import * as React from 'react';
import {AbstractLayer, Container, Name} from "./PlayerCard.styled";

interface Props {
    characterName: string;
    characterImg: string;
    onClick: () => void;
}

export const PlayerCard: React.FunctionComponent<Props> = ({ characterName, characterImg, onClick }) => {
    return (
        <Container img={characterImg} onClick={onClick}>
            <AbstractLayer>
                <Name>{characterName}</Name>
            </AbstractLayer>
        </Container>
    )
};