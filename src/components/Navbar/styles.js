import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 80,
    paddingTop: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 10, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  activeText: {
    color: '#3677C1',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 16,
  },
  inactiveText: {
    color: '#484C52',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 16,
  },
});
