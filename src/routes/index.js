import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Fontiso from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {Dash} from '../pages/dash'
import {Checkout} from '../pages/checkout'

const Stack = createNativeStackNavigator();
const Top = createMaterialTopTabNavigator();
const Bottom = createMaterialBottomTabNavigator();

const TopTabs = () => {
    return (
        <Top.Navigator>
            <Top.Screen component={Dash} name={'Promotions'} ></Top.Screen>
            <Top.Screen component={Dash} name={'Masculino'} ></Top.Screen>
            <Top.Screen component={Dash} name={'Feminino'} ></Top.Screen>
            <Top.Screen component={Dash} name={'Infantil'} ></Top.Screen>
        </Top.Navigator>
    )
}

const BottomTabs = () => {
    return (
        <Bottom.Navigator barStyle={{backgroundColor: 'yellow'}} >
            <Bottom.Screen component={TopTabs} name={'Menu1'} options={{
                tabBarLabel: null,
                tabBarIcon: () => <Fontiso name='home' color='white' size={20} />
            }} />
            <Bottom.Screen component={TopTabs} name={'Menu2'} options={{
                tabBarLabel: null,
                tabBarIcon: () => <Fontiso name='search' color='white' size={20} />
            }} />
            <Bottom.Screen component={TopTabs} name={'Menu3'} options={{
                tabBarLabel: null,
                tabBarIcon: () => <Fontiso name='instagram' color='white' size={20} />
            }} />
            <Bottom.Screen component={TopTabs} name={'Menu4'} options={{
                tabBarLabel: null,
                tabBarBadge: 4,
                tabBarIcon: () => <Fontiso name='shopping-bag' color='white' size={20} />
            }} />
            <Bottom.Screen component={TopTabs} name={'Menu5'} options={{
                tabBarLabel: null,
                tabBarIcon: () => <FontAwesome name='user-circle-o' color='white' size={20} />
            }} />
        </Bottom.Navigator>
    )
}


export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{title: 'Logo'}} >
                <Stack.Screen name="Home" component={BottomTabs}  />
                <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}