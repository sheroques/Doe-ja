import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#042F6E',
    textAlign: 'center',
  },
  form: {
    width: 1000, // muito grande para garantir o efeito total? ajustamos já já
    maxWidth: 300,
    alignItems: 'center', // força centralização dos formGroups
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 12,
    width: '100%',
    alignItems: 'flex-start',
  },
  loginText: {
    color: '#235697',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 15,
    textAlign: 'center',
  },
});

