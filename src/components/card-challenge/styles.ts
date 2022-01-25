import {StyleSheet} from 'react-native';
import R from 'res/R';

const styles = StyleSheet.create({
  card: {
    backgroundColor: R.colors.white,
    padding: 20,
    margin: 14,
    borderRadius: 12,
    height: 400,
    width: 175,
  },
  icon: {
    alignSelf: 'center',
    height: 100,
    width: 75,
  },
  infoContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoTimeRemaining: {
    marginTop: 6,
    fontSize: 16,
  },
  infoPointsContainer: {
    flexDirection: 'row',
  },
  infoPoints: {
    flex: 1,
    fontSize: 16,
  },
  arrow: {
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
    marginLeft: 12,
  },
});

export default styles;
