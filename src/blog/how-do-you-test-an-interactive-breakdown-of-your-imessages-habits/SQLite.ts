import initSqlJs from 'sql.js';

export let SQL = null;
const load_sql_wasm = async () => {
  SQL = await initSqlJs({
    locateFile: (File: String) => `https://sql.js.org/dist/${File}`
  });
}

export default { SQL, load_sql_wasm};