import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#235697',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Poppins',
  },
  content: {
    padding: 20,
    gap: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  projetoCard: {
    padding: 16,
    borderRadius: 18,
    borderColor: '#CAD4E0',
    borderWidth: 1,
  },
  projetoTitulo: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  projetoInfo: {
    fontWeight: '300',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  paymentOptions: {
    
  flexDirection: 'row',
  justifyContent: 'space-around',

  },
  paymentCard: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#E8EBF9',
  },
  whiteCard: {
    backgroundColor: '#fff',
  },
  paymentText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#031627',
  },
});
