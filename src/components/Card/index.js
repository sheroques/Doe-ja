
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Button from '../Button';

const Card = ({ goToDonate }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://placehold.co/300x160' }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Título do Card</Text>
        <Text style={styles.cardDescription}>Descrição do card aqui.</Text>

        <View style={{ marginTop: 10 }}>
          <Button 
            title="Doar" 
            onPress={goToDonate} 
            variant="filled" 
            size="small" 
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
