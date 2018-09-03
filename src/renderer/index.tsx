import * as PouchDB from "pouchdb";

const pouchdb = new PouchDB("rendererdb", {adapter: "idb"});
console.log(pouchdb);
