import React, { useState, useEffect, useContext } from "react";

import { DatabaseContext } from "./database";
import { format_phone_number } from "./PopularGroupChats";

const query = `SELECT c.chat_identifier, COUNT(*) AS num_messages_received
FROM chat_message_join AS cmj
JOIN message AS m ON cmj.message_id = m.ROWID
JOIN chat AS c ON cmj.chat_id = c.ROWID
WHERE c.room_name is null
GROUP BY cmj.chat_id, c.chat_identifier
ORDER BY COUNT(*) DESC
LIMIT 10;`;

const get_chats = (db) => {
  const chats = db.exec(query);
  return chats[0].values.map((row) => ({
    chat_identifier: format_phone_number(row[0]),
    num_messages_received: row[1],
  }));
};

export const PopularChats = () => {
  const db = useContext(DatabaseContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!db) return;
    setData(get_chats(db));
  }, [db]);

  return (
    <div>
      <div>
        <h1>What are your most popular Chats</h1>
        <p> Where do you spent most of your time discussing drama? </p>
      </div>
      <div>
        {data && (
          <table>
            <thead>
              <tr>
                <th>Chat</th>
                <th># of Messages</th>
              </tr>
            </thead>
            <tbody>
              {data.map((chat, i) => (
                <tr key={`chat-${i}`}>
                  <td>{chat.chat_identifier}</td>
                  <td>{chat.num_messages_received}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
