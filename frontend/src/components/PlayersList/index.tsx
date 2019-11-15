import * as React from 'react';
import {Container} from "./styled";
import {PlayerCard} from "./PlayerCard";

export const PlayersList: React.FunctionComponent = () => {
    return (
        <Container>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
        </Container>
    )
};