import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import styles from '../styling'
import spotLightStylingConfig from './spotLightStylingConfig'

const SpotLightViewContainer = props => {

  const { activeRouteIndex } = props
  const stylingConfig = spotLightStylingConfig(props)

  const { buldgeContainer, spotLightInner, tabWidth, bottomHeight, SpotLight } = stylingConfig

  return (
    <View style={[StyleSheet.absoluteFillObject, bottomHeight]}>
      <SpotLight style={[styles.spotLight, { width: tabWidth }]} pose={`route${activeRouteIndex}`}>
        <View style = {buldgeContainer} />
        <View style={spotLightInner} />
      </SpotLight>
    </View> 
  )
}

export default SpotLightViewContainer
