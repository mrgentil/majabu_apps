import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import {createBottomTabNavigator,BottomTabBar} from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import {COLORS,icons} from "../constants";
import {NavigationContainer} from "@react-navigation/native";
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();
const Tabs = () => {
        return(
            <Tab.Navigator>
                <Tab.Screen
                    name="Accueil"
                    component={Home}
                    options={{
                        tabBarIcon:({focused}) => (
                            <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? COLORS.primary:COLORS.secondary
                            }}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Music"
                    component={Home}
                    options={{
                        tabBarIcon:({focused}) => (
                            <Image
                                source={icons.music}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor:focused ? COLORS.primary:COLORS.secondary
                                }}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Videos"
                    component={Home}
                    options={{
                        tabBarIcon:({focused}) => (
                            <Image
                                source={icons.movie}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor:focused ? COLORS.primary:COLORS.secondary
                                }}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Candidats"
                    component={Home}
                    options={{
                        tabBarIcon:({focused}) => (
                            <Image
                                source={icons.candidat}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height:25,
                                    tintColor:focused ? COLORS.primary:COLORS.secondary
                                }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        )
};

export default Tabs;