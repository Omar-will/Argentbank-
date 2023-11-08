import { createSelector } from "@reduxjs/toolkit";

const selectUsers = (state) => state.users;

export const selectAuth = createSelector(selectUsers, (users) => users.isAuth);
export const selectIsLoading = createSelector(selectUsers, (users) => users.isLoading);
export const selectStatus = createSelector(selectUsers, (users) => users.status);
export const selectToken = createSelector(selectUsers, (users) => users.token);
export const selectUserData = createSelector(selectUsers, (users) => users.userData);
export const selectUserName = createSelector(selectUserData, (userData) => userData?.userName);
export const selectFirstName = createSelector(selectUserData, (userData) => userData?.firstName);
export const selectLastName = createSelector(selectUserData, (userData) => userData?.lastName);
export const selectError = createSelector(selectUsers, (users) => users.error);

