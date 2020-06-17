import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'

import utils from '../utils'
import styles from '../styling'

class ZoomInOut extends Component {
  constructor(props) {
    super(props)
    this.animateScale = new Animated.Value(1);
    this.springIcon = new Animated.Value(1);
  }

  componentDidUpdate(prevProps) {
    this.animateTabOpen()
  }


  animateTabOpen = () => {
    this.animateScale.setValue(0)
    this.springIcon.setValue(0)
    Animated.parallel([
      Animated.timing(this.animateScale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear
      }),
      Animated.timing(this.springIcon, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ]).start()
  }

  render() {
    const {
      navigation,
      renderIcon,
      onTabPress,
      onTabLongPress,
      activeTintColor,
      inactiveTintColor,
      numOfTabs,
      tabBarHeight,
      activeBackgroundColor,
      tabBarBackgroundColor
    } = this.props

    const { tabWidth, ZoomScaler } = utils(numOfTabs)

    const { routes, index: activeRouteIndex } = navigation.state
    const interpolateView = this.animateScale.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    const interpolateIcon = this.springIcon.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 2, 1]
    })

    return (

      <View style={[styles.container, { height: tabBarHeight || 70, backgroundColor: tabBarBackgroundColor || '#ffffff' }]}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? (activeTintColor || '#000000') : (inactiveTintColor || 'grey')

          return (
            <TouchableOpacity
              key={routeIndex}
              style={{ width: tabWidth, alignItems: "center", justifyContent: "center", height: tabBarHeight || 70 }}
              onPress={() => {
                onTabPress({ route });
              }}
              onLongPress={() => {
                onTabLongPress({ route });
              }}
            >
              {isRouteActive && <Animated.View style={[styles.animatedView, { backgroundColor: activeBackgroundColor || '#1178A9', transform: [{ scale: interpolateView }] }]} />}
              <Animated.View style={isRouteActive ? { transform: [{ scale: interpolateIcon }] } : ''}>
                <ZoomScaler pose={isRouteActive ? "active" : "inactive"}>
                  {renderIcon({ route, focused: isRouteActive, tintColor })}
                </ZoomScaler>
              </Animated.View>
            </TouchableOpacity>
          )
        })}
      </View >
    )
  }
}

export default ZoomInOut