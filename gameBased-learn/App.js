import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./src/screens/Start";
import Game from "./src/screens/Game";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" style="light" />
      <stack.Navigator>
        <stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <stack.Screen name="Game" component={Game} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
