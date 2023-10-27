// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: builder => {

//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           deleteContact.pending
//         ),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected
//         ),
//         handleRejected
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from "../auth/operations";
import {
  fetchContactsFulfilledReducer,
  addContactPendingReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
  anyPendingReducer,
  anyFullfilledReducer,
  anyRejectedReducer,
} from './contactsSliceReducers';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsInitialState = {
  items: [],
  isLoading: false,
  isContactAdded: true,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(addContact.pending, addContactPendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
      })
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('fulfilled'), anyFullfilledReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;