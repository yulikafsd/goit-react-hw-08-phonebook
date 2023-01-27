export const selectUser = ({ auth }) => auth.user;
export const selectError = ({ auth }) => auth.error;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectIsAuthorising = ({ auth }) => auth.isAuthorising;
