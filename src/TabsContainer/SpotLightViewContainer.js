import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import posed from "react-native-pose";

import styles from '../styling'
import { windowWidth } from '../utils'

const SpotLightViewContainer = props => {
  const { tabType, activeRouteIndex, darkBuldgeColor, tabBarHeight, routes } = props

  const numofTabs = routes.length;
  const tabWidth = windowWidth / numofTabs;

  let navigationRoutes = {};

  routes.map((item, index) => {
    navigationRoutes[`route${index}`] = { x: tabWidth * index }
  });

  const SpotLight = posed.View(navigationRoutes);

  const multiple = numofTabs >= 4 && 0.63 || 0.5

  const lightMultiple = numofTabs >= 4 && 0.57 || 0.45

  let darkSpotLightInner = {...styles.spotLightInner, height: tabWidth * multiple, width: tabWidth * multiple}
  let lightSpotLightInner = {...styles.lightModeSpotLightInner, height: tabWidth * lightMultiple, width: tabWidth * lightMultiple}

  let darkBuldgeWidth = numofTabs >= 4 && (tabWidth * 0.85) || (tabWidth * 0.65)
  let lightBuldgeWidth = numofTabs >= 4 && (tabWidth * 0.68) || (tabWidth * 0.58)

  let darkBuldgeHeight = (numofTabs < 4 && tabBarHeight < 70 && ( tabWidth * 0.42)) || (numofTabs < 4 && (tabWidth * 0.45)) || (tabBarHeight < 70 && (tabWidth * 0.53)) || (tabWidth * 0.58)
  let lightBuldgeHeight = (numofTabs < 4 && tabBarHeight < 70 && ( tabWidth * 0.29)) || (numofTabs < 4 && (tabWidth * 0.33)) || (tabBarHeight < 70 && (tabWidth * 0.35)) || (tabWidth * 0.39)



  const darkBuldgeStyling = {...styles.dark_bulge_container, backgroundColor: darkBuldgeColor, height: darkBuldgeHeight, width: darkBuldgeWidth}
  const lightBuldgeStyling = {...styles.light_bulge_container, height: lightBuldgeHeight, width: lightBuldgeWidth }
  const bottomHeight = (tabType === 'dark') ? { bottom: 20} : { bottom: 60}
  const bulge_container = (tabType === 'dark') ? darkBuldgeStyling : lightBuldgeStyling
  const spotLightInner = (tabType === 'dark') ? darkSpotLightInner : lightSpotLightInner

  return (
    <View style={[StyleSheet.absoluteFillObject, bottomHeight]}>
      <SpotLight style={[styles.spotLight, { width: tabWidth }]} pose={`route${activeRouteIndex}`}>
        <View style = {bulge_container} />
        <View style={spotLightInner} />
      </SpotLight>
    </View> 
  )
}

export default SpotLightViewContainer
