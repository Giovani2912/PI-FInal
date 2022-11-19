import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderWidth: 5,
    borderRadius: 8,
    width: 310,

  },
  cover: {
    height: 320,
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
    
  },
  footer: {
    width: '100%',
    height: 120,
    padding: 16,
    justifyContent: "space-between"
  },
  titulo: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginTop: 0
  },
  desc: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});
