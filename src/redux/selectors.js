export const selectAllContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectLoader = state => state.contacts.isLoading;
