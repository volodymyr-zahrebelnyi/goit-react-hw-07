import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../components/data/contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = state => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
