import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerBackground: {
    height: 180,
    width: '100%',
    backgroundColor: '#92C5FF',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: 40,
    marginBottom: 10,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
    gap: 20,
  },
  profileInfo: {
    alignItems: 'center',
    gap: 4,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#042F6E',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    fontWeight: '300',
    color: '#999',
    lineHeight: 20,
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: '#042F6E',
    borderRadius: 30,
    width: 300,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    gap: 15,
    alignItems: 'center',
  },
  inputGroup: {
    gap: 4,
    alignItems: 'flex-start',
  },
  input: {
    width: 300,
    height: 45,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#042F6E',
    borderRadius: 30,
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: '#042F6E',
    borderRadius: 30,
    width: 300,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#042F6E',
  },
  outlineButtonText: {
    color: '#042F6E',
  },
});

export default styles;
