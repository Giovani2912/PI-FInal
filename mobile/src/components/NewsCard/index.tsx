import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { THEME } from "../../theme";
import { News } from '../../screens/News';

export interface NewsCardProps {
  id: string;
  titulo: string;
  descricao: string
}

interface Props extends TouchableOpacityProps {
  data: NewsCardProps;
}

export function NewsCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.titulo}>
            {data.titulo}
          </Text>

          <Text style={styles.desc}>
            {data.descricao}
          </Text>
        </LinearGradient>
    </TouchableOpacity>
  );
}
