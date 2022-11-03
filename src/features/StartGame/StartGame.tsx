import { useAppDispatch } from '../../app/hooks';
import { startGame } from './startGameSlice';

export function StartGame() {
    const dispatch = useAppDispatch()
    return (
        <button onClick={() => dispatch(startGame())}>
            Start a New Game
        </button>
    );
}