import { useEffect, useState } from "react";
import { Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import logoImg from '../../assets/image-9.svg';

import { MatchCard, MatchCardProps } from "../../components/MatchCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";

import { styles } from './styles';

export function Matches() {
  const [games, setGames] = useState<MatchCardProps[]>([])

  const navigation = useNavigation();

  function handleOpenNews({ id, timeA, timeB, placarTimeA, placarTimeB, imgTimeA, imgTimeB }: MatchCardProps) {
    navigation.navigate("news", { id, timeA, timeB, placarTimeA, placarTimeB, imgTimeA, imgTimeB });
  }

  useEffect(() => {
    fetch('http://localhost:3030/matches')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Útlimas partidas do BR6"
          subtitle="Veja os resultados e notícias!"
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MatchCard
              data={item}
              onPress={() => handleOpenNews(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          
          contentContainerStyle={styles.contentList}
        />

        
      </SafeAreaView>
    </Background>
  );
}
