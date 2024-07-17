import { FC, useCallback, useState } from "react";
import { type Player, type PlayerCounter } from "../types";
// import { useLocalStorage } from "@uidotdev/usehooks";
import { PlayerCounter as PlayerCounterComponent } from "./PlayerCounter";

const defaultCounter: PlayerCounter = {
    life: 40,
    commanderDamage: 0,
};

const defaultPlayers: Array<Player> = [
    {
        settings: {
            color: "bg-green-800"
        },
        current: defaultCounter,
        previous: defaultCounter,
    },
    {
        settings: {
            color: "bg-purple-800"
        },
        current: defaultCounter,
        previous: defaultCounter,
    },
];

export const LifeCounter: FC = () => {
    // const [players, setPlayers] = useLocalStorage("players", defaultPlayers);
    const [players, setPlayers] = useState(defaultPlayers);
    const reset = () => void setPlayers(defaultPlayers);

    return (
        <div className="flex flex-col h-screen relative p-5 gap-5">
            <PlayerCounterComponent player={players[0]} rotated={true}/>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
            <PlayerCounterComponent player={players[1]}/>
        </div>
    )
};