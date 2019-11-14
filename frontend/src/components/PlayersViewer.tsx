import * as React from 'react';
import {Container, MainBox, PlayerList, Profile} from "./PlayersViewer.styled";

export const PlayersViewer: React.FunctionComponent = () => {
    return (
        <Container>
            <MainBox>
                <Profile>
                    Main
                </Profile>
                <PlayerList>
                    Players
                </PlayerList>
            </MainBox>
        </Container>
    )


};