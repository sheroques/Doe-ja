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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  label: {
  fontSize: 14,
  fontWeight: '600',
  color: '#3677C1',
  marginBottom: 4,
  textAlign: 'left', // Garante que o texto do label fique alinhado à esquerda
  alignSelf: 'flex-start', // Mantém o label alinhado com o input
  },


  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#042F6E',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#235697',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 80,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#235697',
    color: '#3677C1',
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: '#3677C1',
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  signupLink: {
    marginTop: 15,
    color: '#235697',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
  },
  backText: {
    color: '#235697',
    fontSize: 14,
  },
});
