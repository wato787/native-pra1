import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { FC, useEffect, useState } from "react";
import tw from "tailwind-rn";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Types";
import Button from "react-native-elements/dist/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addByPayload,
  decrement,
  increment,
  selectCount,
} from "../slices/counterSlice";
import { Input } from "react-native-elements";

type Props = NativeStackScreenProps<RootStackParamList, "ReduxTK">;

export const ReduxTKScreen: FC<Props> = ({ navigation }) => {
  const [amount, setAmount] = useState("0");
  const incrementAmount = Number(amount) || 0;
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("redux");
    return () => {
      console.log("redux cleanup");
    };
  }, []);
  return (
    <View style={tw("flex-1 bg-gray-300 justify-center items-center")}>
      <Text>ReduxTKScreen {count}</Text>
      <View style={tw("my-3")}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate("FlexBox")}
        />
      </View>
      <View style={tw("my-1")}>
        <Button title="increment" onPress={() => dispatch(increment())} />
      </View>
      <View style={tw("my-1")}>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Input
        onChangeText={(txt: string) => setAmount(txt)}
        value={amount}
        leftIcon={<FontAwesome name="pencil" size={24} color={"gray"} />}
        placeholder="type add number"
      />
      <View style={tw("my-1")}>
        <Button
          title="incrementByAmount"
          onPress={()=>{
            dispatch(addByPayload(incrementAmount))
            setAmount("0")
          }}

        />
      </View>
    </View>
  );
};
