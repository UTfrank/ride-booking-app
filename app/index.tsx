import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex h-screen w-full">
      <Text className="text-red-600">Hello, World!</Text>
    </SafeAreaView>
  );
};

export default Home;
