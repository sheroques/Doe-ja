import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingBottom: 100, // espaço pro navbar
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#042F6E',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

