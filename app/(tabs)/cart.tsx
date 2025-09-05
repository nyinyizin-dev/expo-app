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
      <CustomText style={{ fontFamily: "Oswald-Bold" }}>Cart Screen</CustomText>
      <Text style={{ fontSize: 30,fontFamily: "SpaceMono" }}>Space Mono</Text>
      <Text style={{ fontSize: 30}}>System Font</Text>
      {/* <CustomText style={{ fontFamily: "Inter_500Medium_Italic" }}>Inter_500Medium_Italic</CustomText>
      <CustomText style={{ fontFamily: "Inter_900Black" }}>Inter_900Black</CustomText> */}
    </View>
  );
}
