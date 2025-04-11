import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  base: {
    width: 241,
    height: 43,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 77,
  },
  filled: {
    backgroundColor: '#3677C1',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#235697',
    backgroundColor: 'transparent',
  },
  small: {
    width: 90,
    height: 30,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFilled: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 22,
  },
  textOutline: {
    color: '#235697',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 22,
  },
  textSmall: {
    color: '#FFFF',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 20,
  },
});

