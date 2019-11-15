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

export const Profile: React.FunctionComponent = () => {
    return (
        <Container img={'https://specials-images.forbesimg.com/imageserve/5d52a10068cb0a000916cf4d/960x0.jpg?fit=scale'}>
            <ProfileInfo characterClass={'Mage'} characterLevel={25} characterName={'Fred'} />
        </Container>
    );
};