import { RootState } from '../store'; // Adjust the path to your store definition

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectUser = (state: RootState) => state.auth.user;
