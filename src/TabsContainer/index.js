import React from 'react'

import ColorFillNavigationTab from './ColorFillNavigationTab'
import DarkTab from './DarkTab'
import LightTab from './LightTab';
import BubbleTabBar from './BubbleTabBar';
import ZoomInOut from './ZoomInOut'

const TabsContainer = props => {
  const { tabBarType } = props;
  if (tabBarType === 'colorFillTab') {
    return <ColorFillNavigationTab {...props} />
  } else if (tabBarType === "light") {
    return <LightTab {...props} />
  } else if (tabBarType === "dark") {
    return <DarkTab {...props} />
  } else if (tabBarType === "bubbleTab") {
    return <BubbleTabBar {...props} />
  } else if (tabBarType === "zoomInOut") {
    return <ZoomInOut {...props} />
  }
}

export default TabsContainer
