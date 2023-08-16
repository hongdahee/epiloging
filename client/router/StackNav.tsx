import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBar} from './TabNav';
import {Storage} from '../view/Storage';
import {Search} from '../view/Search';
import {Mypage} from '../view/Mypage';
import {CalendarScreen} from '../view/Calendar';
import {Note} from '../view/Note';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={TabBar} />
        <Stack.Screen name="Storage" component={Storage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
