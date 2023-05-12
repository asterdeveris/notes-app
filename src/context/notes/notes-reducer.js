import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  START_EDIT,
  LOADED,
  LOADING,
  CHOOSE_NOTE,
  SEARCH_NOTE,
  END_EDIT,
} from "./notes-actions";

import { deleteNoteFromDB, addNoteToDB } from "./database";

const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      addNoteToDB({ ...action.payload });
      return {
        ...state,
        notes: [...state.notes, action.payload],
        currentNote: { ...action.payload },
      };
    case EDIT_NOTE:
      const { text, ind, regex } = action.payload;
      addNoteToDB({
        ...state.currentNote,
        title: text.match(regex) ? text.match(regex)[0] : "",
        content: text,
      });
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, ind),
          {
            ...state.currentNote,
            title: text.match(regex) ? text.match(regex)[0] : "",
            content: text,
          },
          ...state.notes.slice(ind + 1),
        ],
        currentNote: {
          ...state.currentNote,
          title: text.match(regex) ? text.match(regex)[0] : "",
          content: text,
        },
      };
    case END_EDIT:
      if (action.payload.id !== -1) deleteNoteFromDB(action.payload.id);
      return {
        ...state,
        isReadOnly: true,
        notes:
          action.payload.id !== -1
            ? [
                ...state.notes.slice(0, state.currentNote.id),
                ...state.notes.slice(state.currentNote.id + 1),
              ]
            : [...state.notes],
      };
    case DELETE_NOTE:
      deleteNoteFromDB(state.currentNote.id);
      return {
        ...state,
        currentNote: { ...state.notes[0] },
        notes: [
          ...state.notes.slice(0, action.payload.index),
          ...state.notes.slice(action.payload.index + 1),
        ],
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADED:
      return {
        ...state,
        isLoading: false,
        notes: action.payload,
      };
    case START_EDIT:
      return {
        ...state,
        isReadOnly: false,
      };
    case CHOOSE_NOTE:
      return {
        ...state,
        currentNote: {
          ...state.notes.find((note) => note.id === action.payload.id),
        },
      };
    case SEARCH_NOTE:
      return {
        ...state,
        searchInput: action.payload.input,
      };
    default:
      return state;
  }
};

export default notesReducer;
