import { View, Text } from "react-native";
import React, { FC, useEffect } from "react";
import tw from "tailwind-rn";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Types";
import { Button } from "react-native-elements";

type Props = NativeStackScreenProps<RootStackParamList, "FlexBox">;

export const FlexBoxScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log("FlexBoxScreen");
    return () => {
      console.log("FlexBoxScreen cleanup");
    };
  }, []);
  return (
    <View style={tw("flex-1 bg-gray-300 justify-center items-center")}>
      <Text>FlexBoxScreen</Text>
      <View style={tw("my-3")}>
        <Button
          title="Go to Hello"
          onPress={() => navigation.navigate("Hello")}
        />
      </View>
    </View>
  );
};
