import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodes } from '../redux/episodesSlice';
import EpisodeCard from '../components/EpisodeCard';
import Pagination from '../components/Pagination';

const EpisodesScreen = () => {
    const dispatch = useDispatch();
    const episodes = useSelector((state) => state.episodes.episodes);
    const status = useSelector((state) => state.episodes.status);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchEpisodes(page));
    }, [dispatch, page]);

    useEffect(() => {
        console.log('Episodes:', episodes);
    }, [episodes]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    if (status === 'loading') {
        return <Text>Loading...</Text>;
    }

    if (status === 'failed') {
        return <Text>Error fetching episodes</Text>;
    }

    return (
        <View>
            <FlatList
                data={episodes}
                renderItem={({ item }) => <EpisodeCard episode={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
            <Pagination onNext={handleNextPage} onPrev={handlePrevPage} />
        </View>
    );
};

export default EpisodesScreen;
