import { FC } from "react";
import { Player } from "../types";

export type PlayerCounterProps = {
    player: Player;
    rotated?: boolean;
};

export const PlayerCounter: FC<PlayerCounterProps> = ({
    player,
    rotated = false
}) => {
    return (
        <div className={`relative flex flex-col flex-grow items-stretch justify-center rounded-2xl ${player.settings.color} ${rotated && "transform rotate-180"}`}>
            <div className="flex flex-col flex-grow justify-center items-center">
                <div className="text-white text-3xl font-black opacity-50">
                    &nbsp;
                    +1
                </div>
                <div className="text-white text-8xl font-black opacity-80">
                    {player.current.life}
                </div>
                <div className="text-white uppercase font-black tracking-wide text-3xl opacity-40 mt-2 mb-5">
                    {player.current.commanderDamage} CMD
                </div>
            </div>
            <div className="absolute flex flex-col w-full h-full">
                <div className="flex flex-row justify-center items-start pt-5 flex-1 text-5xl font-black text-white/20 transition bg-white/0 active:bg-white/30 rounded-2xl">+</div>
                <div className="flex flex-row flex-grow">
                    <div className="flex flex-row justify-center items-end pb-5 flex-1 text-3xl font-black text-white/20 transition bg-white/0 active:bg-white/30 rounded-2xl">DMG</div>
                    <div className="flex flex-row justify-center items-end pb-5 flex-1 text-3xl font-black text-white/20 transition bg-white/0 active:bg-white/30 rounded-2xl">EDH</div>
                </div>
            </div>
        </div>
    );
};