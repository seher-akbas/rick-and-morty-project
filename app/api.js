import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const fetchEpisodes = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        console.log('Episodes Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching episodes:', error);
    }
};

export const fetchEpisode = (episodeId) => {
    return axios.get(`${API_URL}/episode/${episodeId}`);
};

export const fetchCharacters = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        console.log('Characters Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
};

export const fetchCharacter = (characterId) => {
    return axios.get(`${API_URL}/character/${characterId}`);
};

export const fetchFavorites = () => {
    return [];
};