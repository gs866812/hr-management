const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    reFetch: false,
};

const reFetchSlice = createSlice({
    name: 'reFetch',
    initialState,
    reducers: {
        toggleRefetch: (state) => {
            state.reFetch = !state.reFetch;
        },
    },
});

export const { toggleRefetch } = reFetchSlice.actions;
export default reFetchSlice.reducer;