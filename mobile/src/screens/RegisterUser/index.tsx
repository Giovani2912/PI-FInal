import { useEffect, useState } from "react";
import React from 'react'
import { Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from '../../assets/image-9.svg'

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";

import { styles } from './styles';

export function RegisterUser() {
  const [username, onChangeUsername] = React.useState("Username");
  const [email, onChangeEmail] = React.useState("Email");
  const [discordId, onChangeDiscordId] = React.useState("Discord Id");
  const [password, onChangePassword] = React.useState("Password");

  const navigation = useNavigation();

  function chancheRegister() {
    navigation.navigate('loginuser');
  }
  const onPress = () => ({});

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Hello!"
          subtitle="Register to get started"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          placeholder="Nome de usuário"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeDiscordId}
          placeholder="Nome no Discord"
        />

        
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Senha"
          secureTextEntry={true}

        />
        

        <TouchableOpacity
          style={styles.button}
          onPress={chancheRegister}
        >
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
