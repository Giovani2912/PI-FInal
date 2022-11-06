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

export function LoginUser() {
  const [email, onChangeEmail] = React.useState("Email");
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
          title="Welcome Back!"
          subtitle="Sign in to see the games!"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
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
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
