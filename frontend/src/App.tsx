import * as React from 'react';
import {GlobalStyled} from "./GlobalStyled";
import {PlayersViewer} from "./components/PlayersViewer";

export const App: React.FunctionComponent = () => {
    return (
        <>
            <GlobalStyled/>
            <PlayersViewer/>
        </>
    );
}