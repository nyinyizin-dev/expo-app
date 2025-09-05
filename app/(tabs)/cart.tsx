import { Text, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomText from "@/components/shop/CustomText";

export default function Cart() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <CustomText style={{ fontSize: 30 }}>Welcome Cart Screen</CustomText>
      <CustomText style={{ fontFamily: "NotoSerifJP" }}>おはいよいよ</CustomText>
      <Text style={{ fontFamily: "Oswald-Bold" }}>Cart Screen</Text>
    </View>
  );
}
