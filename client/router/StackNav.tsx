import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBar} from './TabNav';
import {Storage} from '../view/Storage';
import {Search} from '../view/Search';
import {Mypage} from '../view/Mypage';
import {CalendarScreen} from '../view/Calendar';
import {Note} from '../view/Note';
import {MemoUpdate} from '../view/MemoUpdate';
import {Login} from '../view/Login';
import {SignUp} from '../view/Signup';
import {SignUpProfile} from '../view/SignupProfile';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="SignupProfile" component={SignUpProfile} />
        <Stack.Screen name="Main" component={TabBar} />
        <Stack.Screen name="Storage" component={Storage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="MemoUpdate" component={MemoUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
