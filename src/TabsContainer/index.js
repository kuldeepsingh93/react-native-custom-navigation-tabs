import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import styles from '../styling'
import ColorFillNavigationTab from './ColorFillNavigationTab'
import LightDarkTab from './Light&DarkTab'

const TabsContainer = props => {
  const { tabType } = props;
  return (
    <View>
      { (tabType === 'colorFillTab') 
        && 
        <ColorFillNavigationTab { ...props } /> 
        ||
        <LightDarkTab { ...props } />
      }         
    </View>
  )
}

export default TabsContainer
