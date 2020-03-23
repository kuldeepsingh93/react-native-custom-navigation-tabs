import React from 'react'
import { View, StyleSheet } from 'react-native'

import { SpotLight } from '../utils'
import styles from '../styling'

const { height } = styles.light_bulge_container
const darkBuldgeHeight = styles.dark_bulge_container.height

const SpotLightViewContainer = props => {
  const { tabType, activeRouteIndex, darkBuldgeColor, tabBarHeight } = props

  const darkStyling = {...styles.dark_bulge_container, backgroundColor: darkBuldgeColor, height: tabBarHeight && (darkBuldgeHeight * 0.53) || (darkBuldgeHeight * 0.58)}
  const lightStyling = {...styles.light_bulge_container, height: tabBarHeight && (height * 0.35) || (height * 0.39) }
  const bottomHeight = (tabType === 'dark') ? { bottom: 20} : { bottom: 60}
  const bulge_container = (tabType === 'dark') ? darkStyling : lightStyling
  const spotLightInner = (tabType === 'dark') ? styles.spotLightInner : styles.lightModeSpotLightInner

  return (
    <View style={[StyleSheet.absoluteFillObject, bottomHeight]}>
      <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`}>
        <View style = {bulge_container} />
        <View style={spotLightInner} />
      </SpotLight>
    </View> 
  )
}

export default SpotLightViewContainer