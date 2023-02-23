import React from "react";
import { Text, View } from "react-native";
import tw from "react-native-tailwindcss";

const App = () => {
  return (
    <View style={tw("flex-1 justify-center items-center bg-white")}>
      <Text style={tw("text-2xl font-bold text-primary")}>Hello World!</Text>
    </View>
  );
};

export default App;
