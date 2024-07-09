import React from 'react';
import { View, Text, Image } from 'react-native';

const EpisodeDetailsScreen = ({ route }) => {
    const { episode } = route.params;

    return (
        <View>
            <Image source={{ uri: episode.image }} style={{ width: 100, height: 100 }} />
            <Text>{episode.name}</Text>
            <Text>Air Date: {episode.air_date}</Text>
            <Text>Episode: {episode.episode}</Text>
        </View>
    );
};

export default EpisodeDetailsScreen;
