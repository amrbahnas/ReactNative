import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36B0F0",
    alignItems: "center",
    // justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 150,
    margin: 50,
  },
  input: {
    backgroundColor: "#C5F1E7",
    width: 300,
    height: 45,
    margin: 10,
    padding: 3,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
  pressable: {
    backgroundColor: "#2CE770",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 20,
  },
  startText: {
    marginTop: 50,
    fontSize: 15,
    color: "#fff",
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
  leftView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: 5,
  },
  rightView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: 5,
  },
  card: {
    width: "100%",
    height: "15.6%",
    margin: 3,
    backgroundColor: "#666",
  },
});
