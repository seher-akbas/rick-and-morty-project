import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EpisodeDetailsScreen from './screens/EpisodeDetailsScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="EpisodeDetails" component={EpisodeDetailsScreen} />
                    <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
                    <Stack.Screen name="Favorites" component={FavoritesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;

