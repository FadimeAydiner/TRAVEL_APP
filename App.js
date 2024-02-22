
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Search, CountryDetails, Recommended } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';


const Stack=createNativeStackNavigator();

export default function App() {

  const[fonstLoaded]=useFonts({
    regular:require('./assets/fonts/regular.otf'),
    medium:require('./assets/fonts/medium.otf'),
    bold:require('./assets/fonts/bold.otf'),
    light:require('./assets/fonts/light.otf'),
    xtrabold:require('./assets/fonts/xtrabold.otf'),
  });

  //useCallBack: Returns and stores the actual function itself in a variable
  //Normally for every render all functions render too but we dont want that we just render the effected function
  //To do this we use usecallBack hook 
  //Our onLayoutRootView will change if only fonstLoaded variable change. I will not effect ather functions
  const onLayoutRootView=useCallback(async()=>{
    if(fonstLoaded){
      await Splashscreen.hideAsync();
    }
  },[fonstLoaded]);

  if(![fonstLoaded]){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={{headerShown:false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

