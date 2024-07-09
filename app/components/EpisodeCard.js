import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const EpisodeCard = ({ episode, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image source={{ uri: episode.image }} style={{ width: 50, height: 50 }} />
                <Text>{episode.name}</Text>
                <Text>Air Date: {episode.air_date}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default EpisodeCard;
;