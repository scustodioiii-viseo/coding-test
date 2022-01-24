import {StyleSheet} from 'react-native';
import R from 'res/R';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: R.colors.white,
    width: '85%',
    minHeight: 120,
    borderRadius: 12,
    marginHorizontal: 30,
    paddingVertical: 12,
  },
  input: {
    marginTop: 18,
    marginHorizontal: 18,
  },
  login: {
    marginVertical: 24,
    alignSelf: 'center',
    width: '50%',
  },
  close: {
    alignSelf: 'flex-end',
    marginHorizontal: 18,
  },
});

export default styles;
