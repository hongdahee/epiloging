import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../view/Home';
import {Storage} from '../view/Storage';
import {Search} from '../view/Search';
import {Mypage} from '../view/Mypage';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: 'white',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
        },
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: () => <Image source={require('../assets/home.png')} />,
        }}
      />
      <Tab.Screen
        name="보관함"
        component={Storage}
        options={{
          tabBarIcon: () => <Image source={require('../assets/storage.png')} />,
        }}
      />
      <Tab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: () => <Image source={require('../assets/search.png')} />,
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: () => <Image source={require('../assets/mypage.png')} />,
        }}
      />
    </Tab.Navigator>
  );
};
