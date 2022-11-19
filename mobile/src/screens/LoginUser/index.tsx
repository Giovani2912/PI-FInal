import { useEffect, useState } from "react";
import React from 'react'
import { Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logoImg from '../../assets/image-9.svg';


import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";

import { styles } from './styles';

export function LoginUser() {
  const [email, onChangeEmail] = React.useState("Email");
  const [password, onChangePassword] = React.useState("Password");
  const navigation = useNavigation();

  function chancjeLogin() {
    navigation.navigate('home');
  }

  function chancheRegister() {
    navigation.navigate('registeruser');
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Welcome Back!"
          subtitle="Sign in to see the games!"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
        />
        
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Senha"
          secureTextEntry={true}

        />
        

        <TouchableOpacity
          style={styles.button}
          onPress={chancjeLogin}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLink}
          onPress={chancheRegister}
        >
          <Text style={styles.textLink}>Não tenho conta</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
