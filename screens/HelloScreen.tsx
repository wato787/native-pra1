import { View, Text } from "react-native";
import React, { FC, useCallback, useEffect, useState } from "react";
import {FontAwesome}  from "@expo/vector-icons";
import tw from "tailwind-rn";
import { RootStackParamList } from "../types/Types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Input } from "react-native-elements";
import { Child } from "../components/Child";

type Props = NativeStackScreenProps<RootStackParamList, "Hello">;

export const HelloScreen: FC<Props> = ({ navigation }) => {
  const [text, setText] = useState("");
  const [printtext, setPrinttext] = useState("");

  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("hello cleanup");
    };
  }, []);

const printMsg= useCallback(()=>{
  console.log("hello")
},[])

  return (
    <View style={tw("flex-1 bg-gray-300 justify-center items-center")}>
      <Text>HelloScreen</Text>
      <View style={tw("my-3")}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate("ReduxTK")}
        />
      </View>
      <Input onChangeText={(txt:string)=>setText(txt)} value={text} leftIcon={<FontAwesome name="pencil" size={24} color="gray" />} placeholder="hello" />
      <Text>{text}</Text>
      <Input value={printtext} onChangeText={(txt:string)=>setPrinttext(txt)} placeholder="type print text" leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}/>
      <Text>{printtext}</Text>
      <Child printMsg={printMsg}/>
    </View>
  );
};
