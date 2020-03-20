import { Dimensions } from 'react-native'
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
let navigationRoutes = {};

Object.keys(iconMap).map((item, index) => {
  navigationRoutes[`route${index}`] = { x: tabWidth * index }
})

const SpotLight = posed.View(navigationRoutes);

const Scaler = posed.View({
  active: { scale: 1.4 },
  inactive: { scale: 1 }
});

export { tabWidth, windowWidth, SpotLight, Scaler }