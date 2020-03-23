import { StyleSheet } from 'react-native'

import { tabWidth } from '../utils'

const styles = StyleSheet.create({
	container: {
    flexDirection: "row",
    elevation: 2,
    alignItems: "center",
  },
  tabButton: { flex: 1 },
  spotLight: {
    width: tabWidth,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  spotLightInner: {
    width: tabWidth * 0.63,
    height: tabWidth * 0.63,
    backgroundColor: "#ffffff",
    borderRadius: 50
  },
  lightModeSpotLightInner: {
    width: tabWidth * 0.57,
    height: tabWidth * 0.57,
    backgroundColor: "#ffffff",
    borderRadius: 50
  },
  dark_bulge_container: { 
    height: tabWidth, 
    width: tabWidth * 0.85, 
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  light_bulge_container: {
    height: tabWidth, 
    width: tabWidth * 0.68, 
    backgroundColor: '#bbbbbb',
    position: 'absolute',
    top: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50
  },
  scaler: { flex: 1, alignItems: "center", justifyContent: "center" }
})

export default styles