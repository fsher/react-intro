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
            default: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/9w/9WL35DUZNSG01457032148687.jpg',
            large: 'placeholder'
        },
        level: 25,
        class: 'Warrior'
    },
    {
        name: "Destroyer2000",
        image: {
            default: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/QDIDT6YO6NYN1457032234749.jpg',
            large: 'placeholder'
        },
        level: 100,
        class: 'Hunter'
    },
    {
        name: "SudoRoot",
        image: {
            default: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/ZNPM9RQETYC21457032234435.jpg',
            large: 'placeholder'
        },
        level: 1,
        class: 'Paladin'
    }
]