import { useEffect, useState } from "react";
import React from 'react'
import { Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import logoImg from '../../assets/logo-nlw-esports.png';

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";

import { styles } from './styles';

export function RegisterUser() {
  const [username, onChangeUsername] = React.useState("Username");
  const [email, onChangeEmail] = React.useState("Email");
  const [discordId, onChangeDiscordId] = React.useState("Discord Id");
  const [password, onChangePassword] = React.useState("Password");


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
          value={username}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeDiscordId}
          value={discordId}
        />

        
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
        

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
