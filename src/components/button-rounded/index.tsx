import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  title?: string;
  onPress?: () => void;
}

class ButtonRounded extends React.Component<Props> {
  public render(): React.ReactNode {
    const {style, title, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonRounded;
