import { Dimensions } from 'react-native'
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;

const Scaler = posed.View({
  active: { scale: 1.4 },
  inactive: { scale: 1 }
});

export { windowWidth, Scaler }
