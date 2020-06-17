import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Easing } from 'react-native'

import styles from '../styling'


class BubbleTabBar extends Component {
  constructor(props) {
    super(props);
    this.tabValue = new Animated.Value(1)
    this.textOpacity = new Animated.Value(1)
    this.rotateIcon = new Animated.Value(0)
  }

  componentDidUpdate(prevProps) {
    this.animateTabWidth()
  }

  animateTabWidth = () => {
    this.tabValue.setValue(0)
    this.textOpacity.setValue(0)
    this.rotateIcon.setValue(0)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.tabValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.linear
        }),
        Animated.timing(this.textOpacity, {
          toValue: 1,
          duration: 550,
          useNativeDriver: true,
          easing: Easing.linear
        })
      ]),
      Animated.timing(this.rotateIcon, {
        toValue: 1,
        duration: 400,
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
      activeTintColor,
      inactiveTintColor,
      activeBackgroundColor,
      tabBarHeight,
      tabBarBackgroundColor
    } = this.props

    const { routes, index: activeRouteIndex } = navigation.state

    const interpolateIcon = this.rotateIcon.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '40deg', '0deg']
    })

    return (
      <View style={[styles.bubbleContainer, { height: tabBarHeight || 70, backgroundColor: tabBarBackgroundColor || '#FFFFFF' }]}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? (activeTintColor || '#000000') : (inactiveTintColor || 'grey')
          return (
            <Animated.View style={isRouteActive && { transform: [{ scaleX: this.tabValue }] }} key={routeIndex}>
              <TouchableOpacity
                style={isRouteActive && [styles.single_tab, { backgroundColor: activeBackgroundColor || '#DCDCDC' }] || {}}
                onPress={() => {
                  onTabPress({ route });
                }}
                onLongPress={() => {
                  onTabLongPress({ route });
                }}
              >
                <Animated.View style={isRouteActive && { opacity: this.textOpacity, transform: [{ rotate: interpolateIcon }] }}>
                  {renderIcon({ route, focused: isRouteActive, tintColor })}
                </Animated.View>
                {isRouteActive && <Animated.Text style={[styles.tab_name, { opacity: this.textOpacity }]}>{route.routeName}</Animated.Text>}
              </TouchableOpacity>
            </Animated.View>
          )
        })}
      </View>
    )
  }
}

export default BubbleTabBar