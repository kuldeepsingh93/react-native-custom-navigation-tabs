import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
    flexDirection: "row",
    elevation: 2,
    alignItems: "center",
  },
  tabButton: { flex: 1 },
  spotLight: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  spotLightInner: {
    backgroundColor: "#ffffff",
    borderRadius: 50
  },
  lightModeSpotLightInner: {
    backgroundColor: "#ffffff",
    borderRadius: 50
  },
  dark_bulge_container: { 
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  light_bulge_container: {
    backgroundColor: '#bbbbbb',
    position: 'absolute',
    top: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50
  },
  scaler: { flex: 1, alignItems: "center", justifyContent: "center" }
})

export default styles
