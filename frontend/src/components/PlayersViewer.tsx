import * as React from 'react';
import {Container, MainBox} from "./PlayersViewer.styled";
import { PlayersList } from './PlayersList';
import {Profile} from "./Profile";

export const PlayersViewer: React.FunctionComponent = () => {
    return (
        <Container>
            <MainBox>
                <Profile />
                <PlayersList />
            </MainBox>
        </Container>
    )
};