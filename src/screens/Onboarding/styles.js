import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#042F6E',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#235697',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  terms: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 18,
  },
  link: {
    color: '#235697',
    textDecorationLine: 'underline',
  },
});

