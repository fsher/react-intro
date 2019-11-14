export type CharacterClass = 'Warrior' | 'Mage' | 'Hunter' | 'Paladin';

export type CharacterImage = {
    default: string;
    large: string;
}

export interface Character {
    name: string;
    image: CharacterImage;
    level: number;
    class: CharacterClass;
}

export const activePlayers: Character[] = [
    {
        name: "Freddisimo",
        image: {
            default: 'placeholder',
            large: 'placeholder'
        },
        level: 25,
        class: 'Warrior'
    },
    {
        name: "Nagibator2000",
        image: {
            default: 'placeholder',
            large: 'placeholder'
        },
        level: 100,
        class: 'Mage'
    },
    {
        name: "SudoRoot",
        image: {
            default: 'placeholder',
            large: 'placeholder'
        },
        level: 1,
        class: 'Hunter'
    }
]