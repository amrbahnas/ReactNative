import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import styles from "../styles";

const Start = ({ navigation }) => {
  const handelOnPress = () => {
    navigation.navigate("Game");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.avatar}
      />
      <Text style={styles.startText}>Enter your Name :</Text>
      <TextInput style={styles.input} />
      <Pressable style={styles.pressable} onPress={handelOnPress}>
        <Text>PLAY</Text>
      </Pressable>
    </View>
  );
};

export default Start;
