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

export const saveAsBlobInIDB = async (sha, myblob, key) => {
  let db = await openDB("myDB", 1, {
    upgrade(db) {
      db.createObjectStore("sha");
    },
  });
  await db.put("sha", myblob, key);
  console.count();
  db.close();
};

export const saveAsDBInIDB = async (sha, myblob, key) => {
  let db = await openDB(sha, 1, {
    upgrade(db) {
      db.createObjectStore("sha");
    },
  });
  await db.put("sha", myblob, key);
  console.count();
  db.close();
};
