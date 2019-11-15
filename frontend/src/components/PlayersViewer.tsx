import * as React from 'react';
import { Container, MainBox } from "./PlayersViewer.styled";
import { PlayersList } from './PlayersList';
import { Profile } from "./Profile";

const data = [
    {
        name: "Freddisimo",
        image: {
            default: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/9w/9WL35DUZNSG01457032148687.jpg',
            large: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/9w/9WL35DUZNSG01457032148687.jpg'
        },
        level: 25,
        class: 'Warrior'
    },
    {
        name: "Destroyer2000",
        image: {
            default: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/QDIDT6YO6NYN1457032234749.jpg',
            large: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/QDIDT6YO6NYN1457032234749.jpg'
        },
        level: 100,
        class: 'Hunter'
    },
    {
        name: "SudoRoot",
        image: {
            default: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/ZNPM9RQETYC21457032234435.jpg',
            large: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/ZNPM9RQETYC21457032234435.jpg'
        },
        level: 1,
        class: 'Paladin'
    }
];

export const PlayersViewer: React.FunctionComponent = () => {
    const [selected, setSelected] = React.useState(data[0]);

    return (
        <Container>
            <MainBox>
                <Profile character={selected} />
                <PlayersList data={data} onSelected={setSelected}/>
            </MainBox>
        </Container>
    )
};