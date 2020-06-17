import { Dimensions } from 'react-native'
import posed from "react-native-pose";

const utils = numOfTabs => {
  const windowWidth = Dimensions.get('window').width
  const tabWidth = windowWidth / numOfTabs;

  const Scaler = posed.View({
    active: { scale: 1.4 },
    inactive: { scale: 1 }
  });

  const ZoomScaler = posed.View({
    active: { scale: 1.2 },
    inactive: { scale: 1 }
  });

  return {
    tabWidth,
    windowWidth,
    Scaler,
    ZoomScaler
  }
}

export default utils

