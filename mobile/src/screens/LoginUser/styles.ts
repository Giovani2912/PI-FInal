import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 214,
    height: 120,
    marginTop: 74,
    marginBottom: 48,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  input: {
    height: 40,
    width: 214,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: THEME.COLORS.TEXT,
    borderRadius: 7

  },
  button: {
    alignItems: "center",
    backgroundColor: THEME.COLORS.PRIMARY,
    padding: 10,
    width: 214,
    borderRadius: 7,
    marginTop: 10

  },
  text: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});
