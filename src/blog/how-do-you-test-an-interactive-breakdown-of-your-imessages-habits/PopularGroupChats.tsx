import React, { useContext, useState, useEffect } from "react";
import { DatabaseContext } from "./database";

const query = `select
group_concat(distinct h.id) as participants,
count(m. "ROWID") as message_count,
c.display_name
from
chat c
join chat_handle_join chj on chj.chat_id = c."ROWID"
join handle h on h. "ROWID" = chj.handle_id
join chat_message_join cmj on cmj.chat_id = c."ROWID"
join message m on m. "ROWID" = cmj.message_id
group by
c."ROWID"
having
count(distinct h.id) > 1
order by
message_count desc
limit
10;`;

export const format_phone_number = (phone_number: string): string => {
  if (phone_number.length === 12) {
    return `(${phone_number.substring(2, 5)}) ${phone_number.substring(
      5,
      8,
    )}-${phone_number.substring(8, 12)}`;
  }
  return phone_number;
};

const get_common_elements = (data: Array<Object>) => {
  const names = new Set();

  for (const chat of data) {
    for (const participant of chat.participants) {
      names.add(participant);
    }
  }

  let return_data = {};
  for (const name of names) {
    const chats = data.map((chat) => chat.participants.includes(name));
    const total = chats.reduce((a, b) => a + b, 0);

    if (total < 3) {
      continue;
    }

    return_data[name] = {
      chats: chats,
      total: total,
    };
  }

  return return_data;
};

const chat_counts_formatter = (number: number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + " k";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else {
    return number.toString();
  }
};

export const get_popular_group_chats = (db: any): Object => {
  console.log("Starting to get popular group chats");
  const chats = db.exec(query);
  const data = chats[0].values.map((row: any) => {
    const [participants, message_count, display_name] = row;
    return {
      participants: participants.split(",").map(format_phone_number),
      message_count: message_count,
      display_name: display_name,
    };
  });

  console.log("Got popular group chats", data);
  return data;
};

export const PopularGroupChats = () => {
  const db = useContext(DatabaseContext);
  const [chats, setChats] = useState(null);
  const [table_data, setTableData] = useState(null);

  useEffect(() => {
    if (!chats && db) {
      let data = get_popular_group_chats(db);
      setChats(data);

      const table_data = get_common_elements(data);
      setTableData(table_data);
    }
  }, [db, chats]);

  return (
    <div>
      <div>
        <h1>What are your most popular Chats</h1>
        <p> Where do you spent most of your time discussing drama? </p>
      </div>
      <div>
        {/* Table of popular chats */}
        {chats && (
          <table>
            <thead>
              <tr>
                <th>Chat</th>
                <th># of Messages</th>
              </tr>
            </thead>
            <tbody>
              {chats.map((chat, i) => (
                <tr key={`chat-${i}`}>
                  <td>{chat.display_name || chat.participants.join(", ")}</td>
                  <td>{chat_counts_formatter(chat.message_count)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Table of common contacts */}
        {table_data && (
          <table className="daisy-table">
            <thead>
              <tr>
                <td>Phone</td>
                {chats.map((chat, i) => (
                  <td>{chat.display_name || `Chat ` + (i + 1)}</td>
                ))}
              </tr>
              <tr>
                <td>Total</td>
                {chats.map((chat) => (
                  <td>{chat_counts_formatter(chat.message_count)}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(table_data)
                .sort((a, b) => table_data[b].total - table_data[a].total)
                .map((name, i) => (
                  <tr>
                    <td>{name}</td>
                    {table_data[name].chats.map((chat) => (
                      <td>{chat ? "✅" : "❌"}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
