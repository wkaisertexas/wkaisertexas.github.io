import React, {
  useState,
  useEffect,
  type MutableRefObject,
  useRef,
} from "react";

import initSqlJs, { type SqlJsStatic, type Database } from "sql.js";

import { DatabaseContext } from "./database";

// Section imports
import { LoadingBar } from "./LoadingBar";
import { SMS } from "./SMS";
import { PopularChats } from "./PopularChats";
import { PopularGroupChats } from "./PopularGroupChats";
import { Attachments } from "./Attachments";
import { Timing } from "./Timing";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [copied, setCopied] = useState("Copy");
  const [state, setState] = useState(0);

  const SQL: MutableRefObject<SqlJsStatic | null> = useRef(null);
  const databaseArray: MutableRefObject<Uint8Array | null> = useRef(null);
  const [db, setDB] = useState(null);

  useEffect(() => {
    const load_sql_wasm = async () => {
      SQL.current = await initSqlJs({
        locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
      });
    };
    load_sql_wasm();
  }, []);

  const makeDB = () => {
    if (!SQL.current) {
      console.log("SQL not loaded");
      return;
    }

    if (!databaseArray.current) {
      console.log("No database array");
      return;
    }

    const db_tmp = new SQL.current.Database(databaseArray.current);
    console.log("DB:", db);

    console.log(
      "Tables:",
      db_tmp.exec('SELECT name FROM sqlite_master WHERE type="table";'),
    );

    setDB(db_tmp);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.files[0];
    setFile(event.target.files[0]);

    if (!target) {
      console.log("No file selected");
      return;
    }

    // Here you can handle the file upload. This could be sending the file to a server, reading the file locally, etc.
    console.log("File uploaded:", target);

    // getting the unit8array from the file
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      databaseArray.current = new Uint8Array(arrayBuffer);
      console.log("File read:", databaseArray.current);
      console.log("SQL:", SQL.current);
      makeDB();
    };

    reader.readAsArrayBuffer(target);

    // await reader to finish
    await new Promise((resolve) => {
      reader.onloadend = () => {
        resolve();
      };
    });
  };

  return (
    <section className="not-prose">
      <div id="file-uploader">
        <h1>Visualize your iMessage Habits</h1>
        <p>Upload your iMessage database to visualize your iMessage habits</p>

        {!file && (
          <label className="ui-form-control w-full max-w-xs">
            <div className="ui-label">
              <span className="ui-label-text">Select Your Database File</span>
              <span className="ui-label-text-alt">chat.db</span>
            </div>
            <input
              type="file"
              accept=".db"
              onChange={handleUpload}
              className="ui-file-input ui-file-input-bordered w-full max-w-xs"
            />
          </label>
        )}
      </div>

      {/* <LoadingBar state={state} /> */}

      {db && (
        <DatabaseContext.Provider value={db}>
          <SMS />
          <PopularChats />
          <PopularGroupChats />
          <Attachments />
          <Timing />
        </DatabaseContext.Provider>
      )}
    </section>
  );
};

export default FileUpload;
