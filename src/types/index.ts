export type Player = {
    settings: PlayerSettings;
    current: PlayerCounter;
    previous: PlayerCounter;
};

export type PlayerSettings = {
    color: string;
};

export type PlayerCounter = {
    life: number;
    commanderDamage: number;
};

