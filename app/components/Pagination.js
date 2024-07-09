import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Pagination = ({ data, renderItem, onPageChange }) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / pageSize));
    }, [data, pageSize]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        onPageChange(newPage);
    };

    return (
        <View>
            <FlatList
                data={data.slice((page - 1) * pageSize, page * pageSize)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <View>
                <Text>Page {page} of {totalPages}</Text>
                <TouchableOpacity onPress={() => handlePageChange(page - 1)} disabled={page === 1}>
                    <Text>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePageChange(page + 1)} disabled={page === totalPages}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Pagination;
