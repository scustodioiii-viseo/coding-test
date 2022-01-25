import {StyleSheet} from 'react-native';
import R from 'res/R';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: R.colors.white,
    padding: 20,
    margin: 14,
    borderRadius: 12,
    height: 150,
  },
  icon: {
    alignSelf: 'center',
    height: 100,
    width: 75,
  },
  infoContainer: {
    marginHorizontal: 12,
    maxWidth: 150,
  },
  infoTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  infoPoints: {
    fontSize: 16,
  },
  arrow: {
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
  },
});

export default styles;
