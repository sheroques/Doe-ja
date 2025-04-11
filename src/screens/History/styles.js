import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#042F6E',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#042F6E',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  project: {
    fontSize: 14,
    fontWeight: '600',
    color: '#042F6E',
  },
  date: {
    fontSize: 10,
    fontWeight: '300',
    color: '#39393E',
  },
  amount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#038C3E',
  },
});

export default styles;
