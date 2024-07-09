import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchFavorites } from '../api';
import CharacterCard from '../components/CharacterCard';

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchFavoritesData = async () => {
            const favoritesResponse = await fetchFavorites();
            setFavorites(favoritesResponse);
            setLoading(false);
        };
        fetchFavoritesData();
    }, []);

    const handleCharacterPress = (character) => {
        navigation.navigate('CharacterDetails', { character });
    };

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={favorites}
                    renderItem={({ item }) => <CharacterCard character={item} onPress={() => handleCharacterPress(item)} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

export default FavoritesScreen;

