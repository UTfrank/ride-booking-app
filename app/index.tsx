import React from "react";
import { Text } from "react-native";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return <Redirect href="/(auth)/" />;
};

export default Home;
