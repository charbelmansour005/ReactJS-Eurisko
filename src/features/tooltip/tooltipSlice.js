import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disabled: false,
};

export const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    toggleTooltip: (state) => {
      state.disabled = !state.disabled;
    },
  },
});

export const { toggleTooltip } = tooltipSlice.actions;

export default tooltipSlice.reducer;
