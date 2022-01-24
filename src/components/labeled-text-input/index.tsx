import React from 'react';
import {View, TextInput, StyleProp, ViewStyle, Text} from 'react-native';
import R from 'res/R';
import styles from './styles';

type Props = DefaultProps & {
  style?: StyleProp<ViewStyle>;
  label?: string;
  onChangeText?: (text: string) => void;
};

interface DefaultProps {
  placeholder: string;
  maxLength: number;
  secureTextEntry: boolean;
  value: string;
}

interface State {
  text: string;
}

class LabeledTextInput extends React.Component<Props, State> {
  public static defaultProps: DefaultProps = {
    placeholder: R.strings.empty,
    maxLength: 20,
    secureTextEntry: false,
    value: R.strings.empty,
  };

  public constructor(props: Props) {
    super(props);

    this.state = {
      text: props.value,
    };
  }

  public static getDerivedStateFromProps(
    nextProps: Props,
    prevState: State,
  ): State | null {
    if (nextProps.value && prevState.text !== nextProps.value) {
      return {
        text: nextProps.value,
      };
    }
    return null;
  }

  private onChangeText = (text: string): void => {
    this.setState({
      text,
    });

    const {onChangeText} = this.props;
    if (onChangeText) {
      onChangeText(text);
    }
  };

  private renderLabel = (): React.ReactNode => {
    const {label} = this.props;

    if (label) {
      return <Text style={styles.label}>{label}</Text>;
    }

    return null;
  };

  public render(): JSX.Element {
    const {style, placeholder, maxLength, secureTextEntry} = this.props;

    const {text} = this.state;
    return (
      <View style={style}>
        {this.renderLabel()}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={R.colors.grey}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            onChangeText={this.onChangeText}
            value={text}
            selectionColor={R.colors.black}
            spellCheck={false}
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }
}

export default LabeledTextInput;
