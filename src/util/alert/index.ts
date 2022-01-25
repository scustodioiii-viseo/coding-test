import {Alert, AlertButton} from 'react-native';
import R from 'res/R';

const show = (
  message?: string,
  alertButtons?: AlertButton[],
  cancelable: boolean = true, // android only
  onDismiss?: () => void,
  title: string = R.strings.empty,
): void => {
  const buttons =
    alertButtons !== undefined
      ? alertButtons.map(
          (button): AlertButton => ({
            ...button,
            onPress: (): void => {
              const {onPress} = button;
              if (onPress) {
                onPress();
              }
              if (onDismiss) {
                onDismiss();
              }
            },
          }),
        )
      : undefined;
  Alert.alert(title, message, buttons, {
    cancelable,
    onDismiss: (): void => {
      if (onDismiss) {
        onDismiss();
      }
    },
  });
};

const showOk = (
  message?: string,
  onPressOk?: () => void,
  cancelable = true, // android only
  onDismiss?: () => void, // android only,
  title = R.strings.appName(),
): void => {
  const okButton: AlertButton = {
    text: R.strings.common.ok(),
    onPress: onPressOk,
    style: 'default',
  };
  const buttons = [okButton];
  show(message, buttons, cancelable, onDismiss, title);
};

const showErrorMessage = (
  message: string,
  onPressOk?: () => void,
  onDismiss?: () => void,
): void =>
  showOk(message, onPressOk, false, onDismiss, R.strings.error.title());

const showOkCancel = (
  message?: string,
  onPressOk?: () => void,
  cancelable = true, // android only
  onDismiss?: () => void, // android only,
  title = R.strings.appName(),
  okButtonText = R.strings.common.ok(),
  style: 'default' | 'cancel' | 'destructive' = 'default',
  onPressCancel?: () => void,
): void => {
  const okButton: AlertButton = {
    text: okButtonText,
    onPress: onPressOk,
    style,
  };
  const cancelButton: AlertButton = {
    text: R.strings.common.cancel(),
    style: 'cancel',
    onPress: onPressCancel,
  };
  const buttons = [okButton, cancelButton];
  show(message, buttons, cancelable, onDismiss, title);
};

export default {
  showErrorMessage,
  showOkCancel,
};
