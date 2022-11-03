import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { startGame } from '../../app/api/queries';
import { useState } from 'react';

export function StartGame() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.startGame.status)
  const [player_name, setPlayerName] = useState("");
  const [game_code, setGameCode] = useState("");
  return (
    <div>
      {status}
      <input type="text" name="game_code" onChange={e => setGameCode(e.target.value)} />
      <input type="text" name="player_name" onChange={e => setPlayerName(e.target.value)} />
      <button onClick={() => dispatch(startGame({ game_code, player_name }))}>
        Start a New Game
      </button>
    </div>
  );
}