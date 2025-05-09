import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 16.5,
    marginBottom: 6,
  },
  tabWrapper: {
    width: 307,
    height: 33,
    backgroundColor: '#CAD4E0',
    borderRadius: 16.5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 42,
  },
  inactiveTab: {
    width: 123,
    height: 27,
    paddingVertical: 3,
    paddingHorizontal: 44,
    borderRadius: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveTabText: {
    color: '#011A3E',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  activeTab: {
    width: 125,
    height: 27,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabText: {
    color: '#042F6E',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
  },
});
