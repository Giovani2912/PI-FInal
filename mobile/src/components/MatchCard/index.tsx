import { TouchableOpacity, TouchableOpacityProps, ImageBackground, Image, View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { THEME } from "../../theme";

export interface MatchCardProps {
  id: string;
  timeA: string;
  timeB: string;
  placarTimeA: string;
  placarTimeB: string;
  _count: {
    News: number;
  }
  imgTimeA: string;
  imgTimeB: string;
  data: string
}

interface Props extends TouchableOpacityProps {
  data: MatchCardProps;
}

export function MatchCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.nameTitle}>
        Resultado da partida
      </Text>
      <View
        style={styles.cover}
      >  
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <View style={styles.placarContainer}>
            <View style={styles.timeContainer}>
              <Image
                style={styles.imageTeam}
                source={{ uri: data.imgTimeA }}
              />

              <Text style={styles.nameTime}>
                {data.timeA}
              </Text>

              <Text style={styles.placar}>
                {data.placarTimeA}
              </Text>
            </View>
            <Text style={styles.x}>
              X
            </Text>
            <View style={styles.timeContainer}>
              <Image
                style={styles.imageTeam}
                source={{ uri: data.imgTimeB }}
              />
              <Text style={styles.nameTime}>
                {data.timeB}
              </Text>

              <Text style={styles.placar}>
                {data.placarTimeB}
              </Text>
            </View>
          </View>
          <Text style={styles.ads}>
            {data._count.News} Notícias
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
