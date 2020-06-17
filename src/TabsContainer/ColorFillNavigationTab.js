import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'

import utils from '../utils'
import styles from '../styling'

class ColorFillNavigationTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerColor: this.props.activeBackgroundColor.Home,
      prevColor: ''
    }
    this.translateXValue = new Animated.Value(0)
    this.animateColor = new Animated.Value(1)
  }

  componentDidUpdate(prevProps) {
    this.animateX()
  }

  animateX = () => {
    this.translateXValue.setValue(0)
    this.animateColor.setValue(0)
    Animated.parallel([
      Animated.spring(this.translateXValue, {
        toValue: 5,
        friction: 2,
        useNativeDriver: true,
        easing: Easing.linear
      }),
      Animated.timing(this.animateColor, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear
      })
    ]).start()
  }

  render() {
    const {
      navigation,
      renderIcon,
      onTabPress,
      onTabLongPress,
      activeBackgroundColor,
      activeTintColor,
      inactiveTintColor,
      numOfTabs,
      tabBarHeight
    } = this.props
    const { routes, index: activeRouteIndex } = navigation.state
    const { tabWidth, Scaler, windowWidth } = utils(numOfTabs)

    return (
      <View style={[styles.container, { backgroundColor: this.state.prevColor, height: tabBarHeight || 70 }]}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? (activeTintColor || '#000000') : (inactiveTintColor || 'grey')

          return (
            <View style={{ justifyContent: "center", alignItems: "center" }} key={routeIndex}>
              {isRouteActive &&
                <Animated.View
                  style={{
                    borderRadius: 50,
                    height: tabBarHeight || 70,
                    zIndex: -1,
                    width: windowWidth * 2,
                    position: 'absolute',
                    backgroundColor: this.state.containerColor,
                    transform: [{ scaleX: this.animateColor }]
                  }}
                />
              }
              <TouchableOpacity
                style={{ width: tabWidth, alignItems: 'center', justifyContent: "center" }}
                onPress={() => {
                  this.setState({ prevColor: this.state.containerColor })
                  this.setState({ containerColor: activeBackgroundColor[route.key] })
                  onTabPress({ route });
                }}
                onLongPress={() => {
                  this.setState({ prevColor: this.state.containerColor })
                  this.setState({ containerColor: activeBackgroundColor[route.key] })
                  onTabLongPress({ route });
                }}
              >
                <Scaler
                  pose={isRouteActive ? "active" : "inactive"}
                >
                  <Animated.View style={isRouteActive && { transform: [{ translateX: this.translateXValue }] }}>
                    {renderIcon({ route, focused: isRouteActive, tintColor })}
                  </Animated.View>
                </Scaler>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

export default ColorFillNavigationTab