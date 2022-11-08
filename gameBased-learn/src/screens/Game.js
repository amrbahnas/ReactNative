import { View, Text } from "react-native";
import styles from "../styles";

const Game = () => {
  return (
    <View style={styles.body}>
      <View style={styles.leftView}>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
        <Text style={styles.card}>Game page</Text>
      </View>
    </View>
  );
};

export default Game;
