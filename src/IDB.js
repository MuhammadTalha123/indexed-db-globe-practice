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