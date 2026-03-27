const sql = `select uti, count(uti) from attachment group by uti order by count(uti) desc;`;

const allow_list = {
  "public.jpeg": { name: "JPEG", type: "Image" },
  "public.heic": { name: "HEIC", type: "Image" },
  "public.png": { name: "PNG", type: "Image" },
  "com.apple.quicktime-movie": { name: "Quicktime", type: "Video" },
  "com.compuserve.gif": { name: "GIF", type: "Image" },
  "public.vcard": { name: "Contact", type: "Contact" },
  "com.adobe.pdf": { name: "PDF", type: "Document" },
  "public.vlocation": { name: "Location", type: "Location" },
};

export const get_attachments = (db: any): Object => {
  const attachments = db.exec(sql);
  const data = attachments[0].values.map((row: any) => {
    const [uti, count] = row;

    // check if uti is in allow_list
    if (!allow_list[uti]) return; // skip

    return {
      name: allow_list[uti].name,
      type: allow_list[uti].type,
      uti: uti,
      value: count,
    };
  });
  return data;
};

export const Attachments = () => {
  return (
    <div>
      <h1>Yikes!</h1>
      <p> You send a lot of iMessages! </p>
    </div>
  );
};
