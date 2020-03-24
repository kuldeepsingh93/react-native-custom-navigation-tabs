<h1>react-native-custom-navigation-tabs</h1>

A react native package that provides 3 types of tab bar styling that one can use in his/her bottomTabNavigator on the go.

<h1>Getting Started</h1>

**Install via npm**

```shell
npm i react-native-custom-navigation-tabs
```

<h1>Usage</h1>

Import the **TabBar** component from **react-native-custom-navigation-tabs**: 

```shell
import TabBar from 'react-native-custom-navigation-tabs'
```
You need the pass this component to ```tabBarComponent``` property while defining ```createBottomTabNavigator```.
The following properties need to be passed to ```tabBarOptions``` defined besides ```tabBarComponent``` in the form of an object. You can also refer to usage example explained below.

<h1>tabBarOptions Properties</h1>

1. **tabType**: This prop defines the type of tab bar styling that the user wants to use. There can be 3 **string** values for it i.e
    * 'light'
    * 'dark'
    * 'colorFillTab'
    
    ```You need to provide this property otherwise an error will occur.```
2. **activeTintColor**: It accepts a color in the form of string. It is applied on the icon/label of the active tab. If not provided, it will default to ```black```.
3. **inactiveTintColor**: It also accepts a string value for color. It is applied to the icon/label of the inactive tabs. If not provided, it will default to ```white``` for both ```dark and colorFillTab``` tab type or to ```grey``` for ```light``` tab type. 
4. **tabBarBackgroundColor**: It is the background color of the whole tab bar. If not provided, it will default to ```white``` if the ```tabType``` selected is ```light``` or to ```black``` if the ```tabType``` selected is ```dark```. 
5. **tabBarHeight**: It accepts a number. It is the height of the whole tab bar that the user wants to keep. If not provided, it will default to ```70```. The recommended values are ```60, 65, 70```.
6. **style**: This property is specifically for ```colorFillTab```. It defines the specific colors that the tab bar will take corresponding to each tab. It is an object with in turn accepts a single object ```backgroundColor```. Here, user pass the color for each tab as seen in usage example.

**NOTE**: Please provide ```style``` property in case you are using ```colorFillTab``` tab otherwise an error will occur.

<h1>Usage Example:</h1>

<h3>Create Navigator</h3>

```shell
import TabBar from 'react-native-custom-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
    	screen: HomeScreen,
    	navigationOptions: {
    	  tabBarIcon: ({ tintColor }) => <Icon tintColor = {tintColor} name = 'H' />
    	}
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon tintColor = {tintColor} name = 'S' />
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon tintColor = {tintColor} name = 'F' />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon tintColor = {tintColor} name = 'P' />
      }
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#ffffff',
      tabBarBackgroundColor: '#000000',
      tabBarHeight: 70,
      tabType: 'dark',
      style: { 
        backgroundColor: {
          home: 'grey',
          search: 'darkgreen',
          favorites: 'purple',
          profile: 'blue'
      }}
    }
  }
);


const TabNavigation = createAppContainer(TabNavigator)

export default TabNavigation;
```
**NOTE**: 
* ```HomeScreen, SearchScreen, FavoritesScreen, ProfileScreen``` and ```Icon``` components are defined by user and are imported here.
* ```activeTintColor, inactiveTintColor, tabBarBackgroundColor, tabBarHeight``` properties are optional to provide as they will take up their default values if not provided by user.
* ```tabType, style(while using colorFillTab)``` properties are required otherwise the user will get an error.
* Make sure that the keys of ```backgroundColor``` under ```tabBarOptions -> style -> backgroundColor``` are same as your tab name and all in small caps as shown in usage example.

<h3>Icon Component</h3>

```shell
import React from "react"
import { View, Text } from "react-native"

const Icon = ({ name, tintColor }) => {
  return (
    <View>
      <Text style={{ fontSize: 26, color: tintColor }}>{ name }</Text>
    </View>
  )
};
export default Icon;
```

<h1>Build with: </h1>

* React
* react-native
* react-navigation
* react-navigation-tabs
* react-native-pose
* Animated


