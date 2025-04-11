import { View, Text, Image } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Navbar from '../../components/Navbar';
import styles from './styles';

export default function Profile({ goToHome, goToHistory, goToProfile }) {
  return (
    <View style={styles.container}>
      {/* Top Background */}
      <View style={styles.headerBackground} />

      {/* Avatar */}
      <Image
        source={require('../../assets/seatprofile.jpeg')}
        style={styles.avatar}
      />

      {/* Conteúdo fixo */}
      <View style={styles.content}>
        {/* Nome e e-mail */}
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Fulano de tal</Text>
          <Text style={styles.email}>emaildeexemplo@gmail.com</Text>
        </View>

        {/* Botão Atualizar dados */}
        <Button
          title="Atualizar dados"
          style={{
            backgroundColor: '#042F6E',
            borderRadius: 30,
            width: 300,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          textStyle={{
            color: '#fff',
            fontWeight: '500',
            fontSize: 14,
          }}
        />

        {/* Campos de email e senha */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Label>Email</Label>
            <Input
              value="emaildeexemplo@gmail.com"
              style={{
                width: 300,
                height: 45,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderColor: '#042F6E',
                borderRadius: 30,
                fontSize: 14,
              }}
            />
          </View>

          <View style={styles.inputGroup}>
            <Label>Senha</Label>
            <Input
              secureTextEntry
              value="********"
              style={{
                width: 300,
                height: 45,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderColor: '#042F6E',
                borderRadius: 30,
                fontSize: 14,
              }}
            />
          </View>
        </View>

        {/* Ações */}
        <Button
          title="Limpar histórico"
          style={{
            backgroundColor: '#042F6E',
            borderRadius: 30,
            width: 300,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          textStyle={{
            color: '#fff',
            fontWeight: '500',
            fontSize: 14,
          }}
        />

        <Button
          title="Sair"
          variant="outline"
          style={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#042F6E',
            borderRadius: 30,
            width: 300,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          textStyle={{
            color: '#042F6E',
            fontWeight: '500',
            fontSize: 14,
          }}
        />
      </View>

      {/* Barra inferior com navegação */}
      <Navbar
        current="Perfil"
        goToHome={goToHome}
        goToHistory={goToHistory}
        goToProfile={goToProfile}
      />
    </View>
  );
}
