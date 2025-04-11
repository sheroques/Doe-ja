import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: 150,
    minHeight: 280, // aumentei para garantir espaço para o botão
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'Poppins',
  },
  cardDescription: {
    fontSize: 13,
    color: '#444',
    fontFamily: 'Poppins',
  },
});
