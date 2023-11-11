export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
