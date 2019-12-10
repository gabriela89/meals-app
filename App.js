import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {useScreens} from "react-native-screens";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducers from './store/reducers/meals'

useScreens();

const rootReducer = combineReducers({
  meals: mealsReducers
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'fructiger-light': require('./assets/fonts/Frutiger-LT-Com-45-Light.ttf'),
    'fructiger-italic': require('./assets/fonts/Frutiger-LT-Com-56-Italic.ttf'),
    'fructiger-bold': require('./assets/fonts/Frutiger-LT-Com-65-Bold.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoaded(true)} onError={(err)=> console.log(err)}/>;
  }

  return <Provider store={store}><MealsNavigator /></Provider>;
}
