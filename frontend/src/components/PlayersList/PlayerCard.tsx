import * as React from 'react';
import {AbstractLayer, Container, Name} from "./PlayerCard.styled";

export const PlayerCard: React.FunctionComponent = () => {
    return (
        <Container img={"https://bnetcmsus-a.akamaihd.net/cms/gallery/9w/9WL35DUZNSG01457032148687.jpg"}>
            <AbstractLayer>
                <Name>Player 1</Name>
            </AbstractLayer>
        </Container>
    )
};