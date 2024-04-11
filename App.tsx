// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import MainNavigation from './src/navigation/MainNavigation';

// const App = () => (
//   <Provider store={store}>
//     <MainNavigation />
//   </Provider>
// );

// export default App;

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import notifee, {EventType} from '@notifee/react-native';
import store from './src/redux/store';
import MainNavigation from './src/navigation/MainNavigation';

function App(): React.JSX.Element {
  useEffect(() => {
    const unsubscribeForeground = notifee.onForegroundEvent(
      async ({type, detail}) => {
        await handleNotificationEvent(type, detail);
      },
    );

    const unsubscribeBackground = notifee.onBackgroundEvent(
      async ({type, detail}) => {
        await handleNotificationEvent(type, detail);
      },
    );

    return () => {};
  }, []);

  async function handleNotificationEvent(
    type: EventType,
    detail: any,
  ): Promise<void> {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        console.log('User pressed notification', detail.notification);
        break;
    }
  }

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;
