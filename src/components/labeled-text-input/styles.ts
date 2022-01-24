import {StyleSheet} from 'react-native';
import R from 'res/R';

const styles = StyleSheet.create({
  textInputContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 12,
    borderColor: R.colors.black,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: R.colors.black,
    textDecorationColor: R.colors.black,
    width: '100%',
  },
  label: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: R.colors.black,
    marginHorizontal: 6,
    marginBottom: 8,
  },
});

export default styles;
