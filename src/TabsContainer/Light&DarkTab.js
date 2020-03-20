import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import SpotLightViewContainer from './SpotLightViewContainer'
import { SpotLight, Scaler } from '../utils'
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
    tabBarBackgroundColor
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={[styles.container, { backgroundColor: tabBarBackgroundColor }]}>
      <SpotLightViewContainer styles = { styles } tabType = { tabType } SpotLight = { SpotLight } activeRouteIndex = { activeRouteIndex } />

      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const color = isRouteActive ? activeTintColor : inactiveTintColor;
        const darkTabStyling = (isRouteActive && tabType === 'dark' && {bottom: 8}) || ''
        const lightTabStyling = (isRouteActive && tabType === 'light' && {bottom: 22}) || ''
        const tintColor = {
          color: color
        }
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
                {tabType === 'light' && !tintColor.isRouteActive && <Text style = {{ color: color }}>{route.routeName}</Text>}
              </View>
            </Scaler>
          </TouchableOpacity>
        )
      })}
    </View>

  )
}

export default LightDarkTab