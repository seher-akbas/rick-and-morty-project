import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { fetchEpisodes, fetchCharacters } from '../api';
import EpisodeCard from '../components/EpisodeCard';
import CharacterCard from '../components/CharacterCard';

const HomeScreen = ({ navigation }) => {
    const [episodes, setEpisodes] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const episodesResponse = await fetchEpisodes();
            const charactersResponse = await fetchCharacters();
            setEpisodes(episodesResponse.data.results);
            setCharacters(charactersResponse.data.results);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleEpisodePress = (episode) => {
        navigation.navigate('EpisodeDetailsScreen', { episode });
    };

    const handleCharacterPress = (character) => {
        navigation.navigate('CharacterDetailsScreen', { character });

    };

    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={[...episodes, ...characters]}
                    renderItem={({ item }) => {
                        if (item.episode) {
                            return <EpisodeCard episode={item} onPress={() => handleEpisodePress(item)} />;
                        } else {
                            return <CharacterCard character={item} onPress={() => handleCharacterPress(item)} />;
                        }
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

export default HomeScreen;
