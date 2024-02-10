import React, { useState, useEffect, type MutableRefObject, useRef } from 'react';


// import { load_sql_wasm, SQL } from './SQLite';
import initSqlJs, { type SqlJsStatic, type Database } from 'sql.js';



const FileUpload = () => {
    const [file, setFile] = useState();
    const [copied, setCopied] = useState("Copy");
    const SQL: MutableRefObject<SqlJsStatic | null> = useRef(null);
    const databaseArray: MutableRefObject<Uint8Array | null> = useRef(null);
    const db: MutableRefObject<Database | null> = useRef(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFile(event.target.files[0]);
    };

    useEffect(() => {
      const load_sql_wasm = async () => {
        SQL.current = await initSqlJs({
          locateFile: (file: string) => `https://sql.js.org/dist/${file}`
        });
      }
      load_sql_wasm();
    }, []);

    const makeDB = () => {
        if (!SQL.current) {
            console.log('SQL not loaded');
            return;
        }

        if (!databaseArray.current) {
            console.log('No database array');
            return;
        }

        db.current = new SQL.current.Database(databaseArray.current);
        console.log('DB:', db.current);

        console.log('Tables:', db.current.exec('SELECT name FROM sqlite_master WHERE type="table";'));
    }

    const handleUpload = () => {
        if (!file) {
            console.log('No file selected');
            return;
        }

        // Here you can handle the file upload. This could be sending the file to a server, reading the file locally, etc.
        console.log('File uploaded:', file);

        // getting the unit8array from the file
        const reader = new FileReader();

        reader.onload = (event) => {
            const arrayBuffer = event.target.result;
            databaseArray.current = new Uint8Array(arrayBuffer);
            console.log('File read:', databaseArray.current);
            console.log('SQL:', SQL.current);
            makeDB();
        };

        reader.readAsArrayBuffer(file);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('~/Libaray/Messages/chat.db');
        setCopied("Copied");
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange}></input>
            <button onClick={handleUpload}>Upload</button>
            <p>Copy and Paste the Following: <b onClick={handleCopy}>~/Libaray/Messages/chat.db</b>{navigator.clipboard && <i onClick={handleCopy}>{copied}</i>}</p>

            {file && (
                <div>
                    <h2>File details:</h2>
                    <p>Name: {file.name}</p>
                    <p>Type: {file.type}</p>
                    <p>Size: {file.size} bytes</p>
                </div>
            )}

            {SQL.current && (<p>Loaded</p>)}
        </div>
    );
};

export default FileUpload;