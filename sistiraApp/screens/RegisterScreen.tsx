import React, { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import AppStyles from '../styles/AppStyles';
import FormInput from '../components/ui/FormInput';
import CustomButton from '../components/ui/CustomButton';
import AlertHelper from '../helpers/AlertHelper';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      AlertHelper.showError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    AlertHelper.showSuccess('Usuário registrado com sucesso!');
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={AppStyles.container}
      resizeMode="cover"
    >
      <View style={AppStyles.screenContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={AppStyles.logo}
        />
        <Text style={AppStyles.title}>Cadastre-se</Text>
        <FormInput
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
        <FormInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <CustomButton title="Registrar" onPress={handleRegister} />
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
