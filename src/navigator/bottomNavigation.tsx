import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as COLORS from '../utils/colors';
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

interface CustomTabButtonProps {
  style: any;
  accessibilityState: {selected: boolean};
}

const CustomTabButton: React.FC<CustomTabButtonProps> = props => (
  <Pressable
    {...props}
    style={[
      props.style,
      props.accessibilityState.selected
        ? styles.selectedTabButton
        : styles.tabButton,
    ]}
  />
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          paddingTop: 0,
          marginBottom: 10,
        },
        tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
        tabBarInactiveTintColor: COLORS.PRIMARY_COLOR,
        headerShown: false,
      }}>
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={COLORS.PRIMARY_COLOR}
              size={size}
            />
          ),
          tabBarButton: CustomTabButton,
          tabBarLabel: 'Home',
          tabBarLabelPosition: 'below-icon',
        })}
        name={'home'}
        component={Home}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({focused, size}) => (
            <Antdesign
              name={focused ? 'star' : 'staro'}
              color={COLORS.PRIMARY_COLOR}
              size={size}
            />
          ),
          tabBarButton: CustomTabButton,
          tabBarLabel: 'Favourite',
          tabBarLabelPosition: 'below-icon',
        })}
        name={'favourite'}
        component={Favourite}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {},
  selectedTabButton: {
    borderTopColor: COLORS.PRIMARY_COLOR,
    borderTopWidth: 1,
  },
});

export default BottomNavigation;
