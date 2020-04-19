import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import { CustomHeader } from "./src/layout/header/CustomHeader";
import { CustomDrawerContent } from "./src/components/layout/drawer/CustomDrawerContent";
import { HomeScreen } from "./src/components/community/HomeScreen";
import { HomeScreenDetail } from "./src/components/community/HomeScreenDetail";
import { HomePage } from "./src/components/ecommerce/homepage/HomePage";
import { ProductDetail } from "./src/components/ecommerce/productdetail/ProductDetail";
import { Dashboard } from "./src/components/dashboard/Dashboard";

import { RegisterScreen } from "./src/auth/RegisterScreen";
import { LoginScreen } from "./src/auth/LoginScreen";
import { IMAGE } from "./src/constants/Images";

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen
        name='Home'
        component={HomeScreen}
        options={navOptionHandler}
      ></StackHome.Screen>
      <StackHome.Screen
        name='HomeDetail'
        component={HomeScreenDetail}
        options={navOptionHandler}
      ></StackHome.Screen>
    </StackHome.Navigator>
  );
}
const StackEcommerce = createStackNavigator();

function EcommerceStack() {
  return (
    <StackEcommerce.Navigator initialRouteName='HomePage'>
      <StackEcommerce.Screen
        name='HomePage'
        component={HomePage}
        options={navOptionHandler}
      ></StackEcommerce.Screen>
      <StackEcommerce.Screen
        name='productdetail'
        component={ProductDetail}
        options={navOptionHandler}
      ></StackEcommerce.Screen>
    </StackEcommerce.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? IMAGE.ICON_HOMEBLACK : IMAGE.ICON_HOME;
          } else if (route.name === "HomePage") {
            iconName = focused ? IMAGE.ICON_TOOLS : IMAGE.ICON_REPAIR;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black"
      }}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='HomePage' component={EcommerceStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

// Custom Drawer call from here
function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName='MenuTab'
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}
    >
      <Drawer.Screen name='MenuTab' component={TabNavigator} />
      <Drawer.Screen name='Dashboard' component={Dashboard} />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName='Login'>
        <StackApp.Screen
          name='HomeApp'
          component={DrawerNavigation}
          options={navOptionHandler}
        ></StackApp.Screen>
        <StackApp.Screen
          name='Login'
          component={LoginScreen}
          options={navOptionHandler}
        ></StackApp.Screen>
        <StackApp.Screen
          name='Register'
          component={RegisterScreen}
          options={navOptionHandler}
        ></StackApp.Screen>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
