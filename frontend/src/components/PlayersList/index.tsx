import * as React from 'react';
import {Container} from "./styled";
import {PlayerCard} from "./PlayerCard";

interface Props {
    data: any[];
    onSelected: Function
}

export const PlayersList: React.FunctionComponent<Props> = ({ data, onSelected }) => {
    return (
        <Container>
            {data ? data.map((char, index) => <PlayerCard key={index} characterImg={char.image.default} characterName={char.name} onClick={() => onSelected(char)}/>) : null}
        </Container>
    )
};