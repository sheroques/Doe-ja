import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Tabs from '../../components/Tabs';

const Home = ({ goToHome, goToHistory, goToProfile, goToDonate }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Tabs />
        <Text style={styles.title}>
          Cada gesto importa. Comece agora a apoiar as causas que você acredita!
        </Text>
        <View style={styles.cardGrid}>
          <Card goToDonate={goToDonate} />
          <Card goToDonate={goToDonate} />
          <Card goToDonate={goToDonate} />
          <Card goToDonate={goToDonate} />
        </View>
      </ScrollView>

      <Navbar 
        goToHome={goToHome} 
        goToHistory={goToHistory} 
        goToProfile={goToProfile} 
      />
    </View>
  );
};

export default Home;
