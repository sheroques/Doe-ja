import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

const Navbar = ({ goToHome, goToHistory, goToProfile }) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.navItem} onPress={goToHome}>
        <FontAwesome5 name="home" size={24} color="#3677C1" />
        <Text style={styles.activeText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={goToHistory}>
        <FontAwesome5 name="history" size={22} color="#484C52" />
        <Text style={styles.inactiveText}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={goToProfile}>
        <FontAwesome5 name="user" size={22} color="#484C52" />
        <Text style={styles.inactiveText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
