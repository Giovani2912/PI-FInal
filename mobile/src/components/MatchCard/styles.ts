import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 30,
    borderWidth: 5,
    borderRadius: 8,

  },
  cover: {
    width: 340,
    height: 280,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    backgroundColor: 'darkGray'
  },
  footer: {
    width: '100%',
    height: 120,
    padding: 16,
    justifyContent: 'flex-end',
  },
  nameTitle: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingLeft: 50,
    paddingTop:20
  },
  x: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingTop: 20
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  placarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  timeContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
  },
  imageTeam: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  nameTime: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingTop:20
  },
  placar: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingTop: 5,
    paddingLeft: 10
  }
});
