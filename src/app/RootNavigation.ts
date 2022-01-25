import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import R from 'res/R';

const navigationRef = createNavigationContainerRef();

const logout = (): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: R.strings.screens.login,
          },
        ],
      }),
    );
  }
};

export {navigationRef, logout};
