import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeState = {
  isDark: boolean;
};

const initialState: ThemeState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDark = !state.isDark;
    },
    setDark(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
    },
  },
});

export const { toggleTheme, setDark } = themeSlice.actions;
export default themeSlice.reducer;
