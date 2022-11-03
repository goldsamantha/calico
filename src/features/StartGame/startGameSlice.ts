import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface StartGameState {
    status: 'idle' | 'loading' | 'failed';
}

const initialState: StartGameState = {
    status: 'idle',
};

export const startGameSlice = createSlice({
    name: 'StartGame',
    initialState,
    reducers: {
        startGame: (state) => {
            console.log(state);
        }
    },
});

export const { startGame } = startGameSlice.actions;
export default startGameSlice.reducer;