import {createSlice, Slice} from '@reduxjs/toolkit';

export enum Page {
    StartPage,
    GamePage,
    LeaderBoard,
    SubmitResult
}

export type PageState = {
    currentPage: Page,
};


export const pageSlice: Slice = createSlice({
    name: 'page',
    initialState: {
        currentPage: Page.StartPage
    },
    reducers: {
        openPage: (state: PageState, action: {payload: Page, type: string}) => {
            state.currentPage = action.payload;
        },
    },
})

export const { openPage } = pageSlice.actions

export default pageSlice.reducer