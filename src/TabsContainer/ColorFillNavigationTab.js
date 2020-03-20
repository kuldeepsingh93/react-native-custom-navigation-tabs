import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { tabWidth, Scaler } from '../utils'
import styles from '../styling'

const ColorFillNavigationTab = props => {
  const { navigation, renderIcon, onTabPress, onTabLongPress, style, activeTintColor, inactiveTintColor, tabType } = props
  const { backgroundColor } = style
  const [containerColor, setContainerColor] = useState(backgroundColor.home)

  const { routes, index: activeRouteIndex } = navigation.state

	return (
    <View style = {[styles.container, { backgroundColor: containerColor }]}>
      { routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = {
          color: isRouteActive ? activeTintColor : inactiveTintColor,
        }

        return (
          <TouchableOpacity 
            style = {{ width: tabWidth, alignItems: 'center' }}
            key={routeIndex}
            onPress={() => {
              setContainerColor(backgroundColor[route.key.toLowerCase()])
              onTabPress({ route });
            }}
            onLongPress={() => {
              setContainerColor(backgroundColor[route.key.toLowerCase()])
              onTabLongPress({ route });
            }}
          >   
            <Scaler
              pose = { isRouteActive ? "active" : "inactive" }
            >
              { renderIcon({ route, focused: isRouteActive, tintColor }) }
            </Scaler>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default ColorFillNavigationTab