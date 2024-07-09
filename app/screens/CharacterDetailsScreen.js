import React from 'react';
import { View, Text, Image } from 'react-native';

const CharacterDetailsScreen = ({ route }) => {
    const { character } = route.params;

    return (
        <View>
            <Image source={{ uri: character.image }} style={{ width: 100, height: 100 }} />
            <Text>{character.name}</Text>
            <Text>Species: {character.species}</Text>
            <Text>Status: {character.status}</Text>
        </View>
    );
};

export default CharacterDetailsScreen;

