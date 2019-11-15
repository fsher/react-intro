import * as React from 'react';
import {Class, Container, InfoBlock, Level, Name, TextInfo} from "./styled";

interface ProfileInfoProps {
    characterName: string;
    characterClass: string;
    characterLevel: number;
}

const ProfileInfo: React.FunctionComponent<ProfileInfoProps> = ({ characterClass, characterLevel, characterName }) => {
    return (
        <InfoBlock>
            <TextInfo>
                <Name>{characterName}</Name>
                <Class>{characterClass}</Class>
            </TextInfo>
            <Level>{characterLevel}</Level>
        </InfoBlock>
    )
};


interface ProfileProps {
    character: any;
}

export const Profile: React.FunctionComponent<ProfileProps> = ({ character }) => {
    return (
        <Container img={character.image.large}>
            <ProfileInfo characterClass={character.class} characterLevel={character.level} characterName={character.name} />
        </Container>
    );
};