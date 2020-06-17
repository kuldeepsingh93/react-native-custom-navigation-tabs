import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";

import utils from '../utils'
import styles from '../styling'

class DarkTab extends Component {
  constructor(props) {
    super(props);
    this.springIcon = new Animated.Value(0)
    this.moveUp = new Animated.Value(1)
  }

  componentDidUpdate(prevProps) {
    this.animatedIcon()
  }

  animatedIcon = () => {
    this.springIcon.setValue(0)
    this.moveUp.setValue(0)
    Animated.sequence([
      Animated.timing(this.moveUp, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear
      }),
      Animated.spring(this.springIcon, {
        toValue: 5,
        useNativeDriver: true,
        friction: 2,
        easing: Easing.linear
      })
    ]).start()
  }

  render() {
    const {
      renderIcon,
      activeTintColor,
      inactiveTintColor,
      onTabPress,
      onTabLongPress,
      getAccessibilityLabel,
      navigation,
      numOfTabs,
      tabBarHeight,
      tabBarBackgroundColor
    } = this.props;

    const { routes, index: activeRouteIndex } = navigation.state;
    const { Scaler, tabWidth } = utils(numOfTabs)

    const interpolateMovement = this.moveUp.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20]
    })
    return (
      <View style={[styles.container, { height: tabBarHeight || 70, backgroundColor: tabBarBackgroundColor || '#000000' }]}>

        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const color = isRouteActive ? (activeTintColor || '#ffffff') : (inactiveTintColor || 'grey')
          const tintColor = color
          const transformVerticalMovement = isRouteActive && { transform: [{ translateY: interpolateMovement }] } || {}
          return (
            <TouchableOpacity
              key={routeIndex}
              style={{ alignItems: "center", justifyContent: "center", width: tabWidth }}
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
              >
                <Animated.View style={{ alignItems: 'center', ...transformVerticalMovement }}>
                  {
                    isRouteActive ? <View style={[styles.semiCircle, { backgroundColor: tabBarBackgroundColor || "#000000", bottom: 8 }]} /> : null
                  }
                  <Animated.View style={isRouteActive && { transform: [{ translateY: this.springIcon }] }}>
                    {renderIcon({ route, focused: isRouteActive, tintColor })}
                  </Animated.View>
                </Animated.View>

              </Scaler>
            </TouchableOpacity>
          )
        })}
      </View>

    )
  }
}

export default DarkTab