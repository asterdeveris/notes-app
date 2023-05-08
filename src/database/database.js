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

const addNote = (currentNote) => {
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
    const titleIndex = store.index("title");
    const contentIndex = store.index("content");

    store.put(currentNote);
    const titleQuery = titleIndex.get(["First"]);
    //   const contentQuery = contentIndex.get(["Note"]);

    //   contentQuery.onsuccess = function () {
    //     console.log("contentQuery", contentQuery.result);
    //   };

    transaction.oncomplete = function () {
      db.close();
    };
  };
};

addNote({ id: 1, title: "First", content: "Note" });
addNote({ id: 2, title: "Second", content: "Note" });
addNote({ id: 3, title: "Third", content: "Note" });


export { initDB };