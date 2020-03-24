import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import SpotLightViewContainer from './SpotLightViewContainer'
import { Scaler } from '../utils'
import styles from '../styling'

const LightDarkTab = props => {
  const {
    renderIcon,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
    tabType,
    tabBarBackgroundColor,
    tabBarHeight
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  const backgroundColor = tabBarBackgroundColor || ((tabType === 'dark') && 'black') || 'white'
  const activeColor = activeTintColor || 'black'
  const inactiveColor = inactiveTintColor || ((tabType === 'light' && 'grey') || 'white')

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor, height: tabBarHeight || 70 }]}>
      <SpotLightViewContainer 
        tabType = { tabType } 
        activeRouteIndex = { activeRouteIndex } 
        darkBuldgeColor = { backgroundColor } 
        tabBarHeight = { tabBarHeight }
        routes = { routes }
      />

      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeColor : inactiveColor;
        const darkTabStyling = (isRouteActive && tabType === 'dark' && {bottom: 8}) || ''
        const lightTabStyling = (isRouteActive && tabType === 'light' && {bottom: 22}) || ''

        return (
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <Scaler
              pose={isRouteActive ? "active" : "inactive"}
              style={styles.scaler}
            >
              <View style = {darkTabStyling || lightTabStyling}>
                {renderIcon({ route, focused: isRouteActive, tintColor })}
              </View>
              <View>
                {tabType === 'light' && !isRouteActive && <Text style = {{ color: tintColor }}>{route.routeName}</Text>}
              </View>
            </Scaler>
          </TouchableOpacity>
        )
      })}
    </View>

  )
}

export default LightDarkTab
