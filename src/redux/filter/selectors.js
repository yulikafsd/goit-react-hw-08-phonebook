import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter.trim().length === 0) {
      return contacts;
    } else {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
  }
);
