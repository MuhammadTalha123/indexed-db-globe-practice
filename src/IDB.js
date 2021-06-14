import { openDB } from "idb";

export const initializeDB = async (dbName, storeName, version) => {
  const db = await openDB(dbName, version, {
    upgrade(db) {
      // Create a store of objects
      db.createObjectStore(storeName);
      // Create an index on the 'date' property of the objects.
      // storeRow.createIndex("number", "number");
    },
  });
  return db;
};

export const saveAsBlobInIDB = async (sha, myblob) => {
  let dbVersion = await openDB("myDb");
  dbVersion.close();
  const db = await initializeDB("myDb", sha, dbVersion.version + 1);
  await db.put(sha, myblob, sha);
  await db.close();
};

export const saveAsDBInIDB = async (sha, myblob) => {
  const db = await initializeDB(sha, "data", 1);
  await db.put("data", myblob, sha);
  await db.close();
};
