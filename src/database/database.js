const initDB = (setState) => {
  const indexedDB = window.indexedDB;
  const request = indexedDB.open("notesDatabase", 1);

  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
  };

  request.onsuccess = () => {
    console.log("created");
    const db = request.result;
    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");
    const notes = store.getAll();
    notes.onsuccess = () => {
      setState(notes.result);
    };
  };

  request.onupgradeneeded = function () {
    const store = request.result.createObjectStore("notes", { keyPath: "id" });
    store.createIndex("title", ["title"], { unique: false });
    store.createIndex("content", ["content"], { unique: false });
  };
};

const addNoteToDB = (currentNote) => {
  const indexedDB = window.indexedDB;
  const request = indexedDB.open("notesDatabase", 1);

  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
  };

  request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");

    console.log(currentNote);
    store.put(currentNote);
    transaction.oncomplete = function () {
      db.close();
    };
  };
};

const deleteNoteFromDB = (deletedNoteId) => {
  const indexedDB = window.indexedDB;
  const request = indexedDB.open("notesDatabase", 1);

  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
  };

  request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("notes", "readwrite");
    const store = transaction.objectStore("notes");
    store.delete(deletedNoteId);
  };
};

addNoteToDB({ id: 1, title: "First", content: "First\nNote" });
// addNote({ id: 2, title: "Second", content: "Second\nNote" });
// addNote({ id: 3, title: "Third", content: "Third\nNote" });

export { initDB, addNoteToDB, deleteNoteFromDB };
