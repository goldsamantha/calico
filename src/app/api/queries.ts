import { createAsyncThunk } from '@reduxjs/toolkit';
import { graphql, Query } from './graphql';

export type StartGameInputs = {
  game_code: string;
  player_name: string;
};
export const startGame = thunkedQuery<StartGameInputs>("game/start");

const QUERIES = {
  "game/start": (variables: StartGameInputs): Query => ({
    query: `mutation StartGame($game_code: String = "", $player_name: String = "") {
      insert_games_one(object: {game_code: $game_code, players: {data: [{name: $player_name}]}}) {
        game_code
        players {
          name
        }
      }
  }`,
    variables 
  }),
};

type QueryName = keyof typeof QUERIES

function thunkedQuery<T extends StartGameInputs>(name: QueryName) {
  return createAsyncThunk(
    name,
    async (variables: T) => {
      const query = QUERIES[name](variables);
      const response = await graphql(query)
      return response.json()
    }
  );
}