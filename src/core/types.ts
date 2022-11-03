/*
Events:
- <draw> 4 <challenge tokens>
- <draw> <tile> from <location>
- <place> <challenge token>
- <place> <tile>
- <replenish> <tile> from <location>
- <draw> 3 <cat scoring tiles>
- <place> {<patch tiles>: PatchType}
*/
namespace Calico {
    interface Actions {

    }

    const Nothing = Symbol('nothing');
    type Nothing = typeof Nothing;
    type Maybe<T> = T | Nothing;

    /*
        Board
    */

    enum TileSource {
        MARKET,
        BAG,
    }

    enum Pattern {
        STRIPES,
        FLOWERS,
        DOTS,
        VINES,
        QUATREFOIL,
        FERNS
    }

    enum Color {
        YELLOW,
        PURPLE,
        BLUE,
        GREEN,
        AQUA,
        MAGENTA
    }

    type Tile = {
        pattern: Pattern;
        color: Color;
    }

    type PointValue = number;

    type Button = {
        color: Color;
        value: PointValue; // 3
    }

    type Cat = {
        name: string;
        pattern: Pattern
        value: PointValue;
    }

    type Flair = Cat | Button;

    type ColorlessTile = Omit<Tile, 'color'>;
    type PatchTile = Tile | ColorlessTile;
    type BoardTile = DesignGoalTile | Tile; 

    /* goal tiles */
    const Goals = [
        [[2,2,2], [7, 11]],
        [[4,2], [7, 14]],
        [[3,3], [7, 13]],
        [[3,2,1], [7, 11]],
        [[2,2,1,1], [5, 7]],
        [[1,1,1,1,1,1], [10, 15]]
    ] as const;
    type Goal = typeof Goals[number][0];
    type GoalMin = typeof Goals[number][1][0];
    type GoalMax = typeof Goals[number][1][1];

    type DesignGoalTile = {
        points_min: GoalMin;
        points_max: GoalMax;
        goal: Goal; 
    }

    /*
        Player
    */

    const boardSpaces: Space[][] = Array(7).fill(Array(7).fill({} as Space));
    type Board = {
        color: Color;
        spaces: Space[][];
    }

    type Player = {
        name: string;
        board: Board;
        tiles: [Tile, Maybe<Tile>];
    }

    type Space = { // Node
        tile: Maybe<BoardTile>;
        flair?: Maybe<Flair>; // can have two flair??
    }

    type TileArrangementGoal = {
        // oof how do we do this??
    };

    type CatObjective = {
        cat: Cat;
        patterns: [ColorlessTile, ColorlessTile];
        tileArrangementGoal: TileArrangementGoal;
    };

    type Game = {
        market: [Tile, Tile, Maybe<Tile>];
        bag: Tile[];
        round: number;
        turnOrder: Player[]; 
        turn: Player;
        catObjectives: [CatObjective, CatObjective, CatObjective];
    }

}