import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import Button from "@/components/Button";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-screen justify-between items-center bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/SignUp")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="font-JakartaBold text-sm text-black">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 bg-[#e2e8f0] mx-1 rounded-full" />}
        activeDot={<View className="w-8 h-1 bg-[#0286ff] mx-1 rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((el) => (
          <View key={el.id} className="flex justify-center items-center p-5">
            <Image
              source={el.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="mt-5 flex flex-col justify-center items-center gap-[10px] w-full">
              <Text className="font-JakartaBold font-bold text-3xl text-center w-9/12">
                {el.title}
              </Text>
              <Text className="font-JakartaMedium font-medium text-[17px] text-center text-[#858585] w-10/12">
                {el.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <Button
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/SignUp")
            : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Welcome;
