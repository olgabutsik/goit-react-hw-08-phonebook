import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const spinnerSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setNewContact(state, actions) {
      return { ...state, contacts: state.contacts.concat(actions.payload) };
    },
    deleteContact(state, actions) {
      return {
        ...state,
        contacts: state.contacts.filter(e => e.id !== actions.payload),
      };
    },
  },
});

export const { setNewContact, deleteContact } = spinnerSlice.actions;
export default spinnerSlice.reducer;
