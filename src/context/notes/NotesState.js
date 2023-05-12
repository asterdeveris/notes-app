import NotesContext from "./notes-context";
import { useReducer } from "react";
import notesReducer from "./notes-reducer";

import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  START_EDIT,
  CHOOSE_NOTE,
  LOADED,
  LOADING,
  SEARCH_NOTE,
  END_EDIT,
} from "./notes-actions";

const NotesState = (props) => {
  const initialState = {
    notes: [],
    isReadOnly: true,
    searchInput: "",
    currentNote: {},
    isLoading: true,
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  const asyncDispatch = () => {
    dispatch({ type: LOADING });
    const indexedDB = window.indexedDB;
    const request = indexedDB.open("notesDatabase", 1);

    request.onerror = function (event) {
      console.error("An error occurred with IndexedDB");
      console.error(event);
    };

    request.onupgradeneeded = function () {
      const store = request.result.createObjectStore("notes", {
        keyPath: "id",
      });
      store.createIndex("title", ["title"], { unique: false });
      store.createIndex("content", ["content"], { unique: false });
    };

    request.onsuccess = () => {
      console.log("created");
      const db = request.result;
      const transaction = db.transaction("notes", "readwrite");
      const store = transaction.objectStore("notes");
      const notes = store.getAll();
      notes.onsuccess = () => {
        dispatch({ type: LOADED, payload: notes.result });
      };
    };
  };

  const editNote = (text, ind, regex) => {
    dispatch({
      type: EDIT_NOTE,
      payload: { text, ind, regex },
    });
  };

  const addNote = (newNote) => {
    dispatch({
      type: ADD_NOTE,
      payload: newNote,
    });
  };

  const deleteNote = (index) => {
    dispatch({
      type: DELETE_NOTE,
      payload: { index },
    });
  };

  const startEdit = () => {
    dispatch({
      type: START_EDIT,
    });
  };

  const endEditing = (id) => {
    dispatch({
      type: END_EDIT,
      payload: { id },
    });
  };

  const setChosenNote = (id) => {
    dispatch({
      type: CHOOSE_NOTE,
      payload: { id },
    });
  };

  const searchNote = (input) => {
    dispatch({
      type: SEARCH_NOTE,
      payload: { input },
    });
  };

  return (
    <NotesContext.Provider
      value={{
        addNote,
        deleteNote,
        editNote,
        startEdit,
        asyncDispatch,
        setChosenNote,
        searchNote,
        endEditing,
        notes: state.notes,
        isReadOnly: state.isReadOnly,
        searchInput: state.searchInput,
        currentNote: state.currentNote,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
