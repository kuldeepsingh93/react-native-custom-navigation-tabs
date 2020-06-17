import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";

import utils from '../utils'
import styles from '../styling'

class LightTab extends Component {
  constructor(props) {
    super(props);
    this.rotateValue = new Animated.Value(0)
    this.moveUp = new Animated.Value(1)
  }

  componentDidUpdate(prevprops) {
    this.animateIcon()
  }

  animateIcon = () => {
    this.rotateValue.setValue(0)
    this.moveUp.setValue(0)
    Animated.sequence([
      Animated.timing(this.moveUp, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear
      }),
      Animated.timing(this.rotateValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true
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
    const rotateIcon = this.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const interpolateVerticalMovement = this.moveUp.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20]
    })
    return (
      <View style={[styles.container, { backgroundColor: tabBarBackgroundColor || '#ffffff', height: tabBarHeight || 70 }]}>

        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const color = isRouteActive ? (activeTintColor || '#000000') : (inactiveTintColor || 'grey')
          const tintColor = color
          const transformVertical = isRouteActive && { transform: [{ translateY: interpolateVerticalMovement }] } || {}
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
                style={styles.scaler}
              >
                <Animated.View style={{ alignItems: "center", ...transformVertical }}>
                  {isRouteActive ? <View style={[styles.semiCircle, { backgroundColor: tabBarBackgroundColor || "#ffffff", bottom: 8 }]} /> : null}
                  <Animated.View style={isRouteActive && { transform: [{ rotate: rotateIcon }] }}>
                    {renderIcon({ route, focused: isRouteActive, tintColor })}
                  </Animated.View>
                </Animated.View>
                <View>
                  {!isRouteActive && <Text style={{ color: color, marginTop: 5, fontSize: 12 }}>{route.routeName}</Text>}
                </View>
              </Scaler>
            </TouchableOpacity>
          )
        })}
      </View>

    )
  }
}

export default LightTab