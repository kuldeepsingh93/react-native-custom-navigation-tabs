import React from 'react'
import { View, StyleSheet } from 'react-native'

const SpotLightViewContainer = props => {
  const { tabType, SpotLight, activeRouteIndex, styles } = props
  const bottomHeight = (tabType === 'dark') ? { bottom: 20} : { bottom: 60}
  const bulge_container = (tabType === 'dark') ? styles.dark_bulge_container : styles.light_bulge_container
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