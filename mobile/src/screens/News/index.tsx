import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/image-9.svg';

import { THEME } from "../../theme";
import { styles } from './styles';

import { MatchParams } from "../../@types/navigation";

import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";
import { DuoMatch } from "../../components/DuoMatch";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import {NewsCard} from "../../components/NewsCard"

export function News() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();
  const router = useRoute();
  const match = router.params as MatchParams;

  function handleGoBack() {
    navigation.goBack();
  }


  useEffect(() => {
    fetch(`http://localhost:3030/matches/${match.id}/news`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <View style={styles.wrapperImages}>
          <Image
            source={{ uri: match.imgTimeA }}
            style={styles.cover}
            resizeMode="cover"
          />
          <Text style={styles.x}>
              X
            </Text>
          <Image
            source={{ uri: match.imgTimeB }}
            style={styles.cover}
            resizeMode="cover"
          />
        </View>
        <Heading
          title="Fique por dentro"
          subtitle="Veja as notícias sobre essa partida!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewsCard 
              data={item}
            
            />
          )}
          
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent ]}
          showsHorizontalScrollIndicator
          ListEmptyComponent={
            <Text style={styles.emptyListText}>
              Não há notícias publicadas ainda.
            </Text>
          }
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}
