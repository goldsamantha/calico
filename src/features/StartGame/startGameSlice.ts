import { createSlice } from '@reduxjs/toolkit';
import { startGame } from '../../app/api/queries';

export interface StartGameState {
  status: "idle" | "loading" | "failed";
  name: string;
  gameCode: string;
}

const initialState: StartGameState = {
  status: "idle",
  name: "",
  gameCode: "",
};

export const startGameSlice = createSlice({
    name: 'game/start',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(startGame.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(startGame.fulfilled, (state, action) => {
                state.status = 'idle';
                state.gameCode = action.payload.game_code;
            })
            .addCase(startGame.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default startGameSlice.reducer;