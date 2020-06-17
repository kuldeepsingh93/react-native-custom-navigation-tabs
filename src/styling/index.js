import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    elevation: 2,
    alignItems: "center",
  },
  bubbleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  scaler: { flex: 1, justifyContent: "center", alignItems: "center" },
  semiCircle: {
    height: 25,
    width: 40,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    position: "absolute",
    zIndex: -1
  },
  single_tab: {
    height: 40,
    width: 117,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: 'row',
    borderRadius: 20
  },
  tab_name: {
    fontSize: 13,
    lineHeight: 15
  },
  animatedView: {
    height: 60,
    width: 60,
    position: "absolute",
    borderRadius: 50,
  }
})

export default styles