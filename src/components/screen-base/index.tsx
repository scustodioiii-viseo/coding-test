import React from 'react';
import {Appearance, SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class ScreenBase extends React.Component {
  public render(): React.ReactNode {
    const {children} = this.props;
    const isDarkMode = Appearance.getColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {children}
      </SafeAreaView>
    );
  }
}

export default ScreenBase;
