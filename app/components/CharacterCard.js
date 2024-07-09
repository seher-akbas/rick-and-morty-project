import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CharacterCard = ({ character, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image source={{ uri: character.image }} style={{ width: 50, height: 50 }} />
                <Text>{character.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CharacterCard;
