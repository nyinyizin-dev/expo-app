import { Text, View,ScrollView} from "react-native";
import { Image } from "expo-image";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomText from "@/components/shop/CustomText";

export default function Cart() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView>
      <CustomText style={{ fontSize: 30 }}>Welcome Cart Screen</CustomText>
      <CustomText style={{ fontFamily: "NotoSerifJP" }}>おはいよいよ</CustomText>
      <CustomText style={{ fontFamily: "Oswald-Bold" }}>Cart Screen</CustomText>
      <Text style={{ fontSize: 30,fontFamily: "SpaceMono" }}>Space Mono</Text>
      <Text style={{ fontSize: 30}}>System </Text>
      <CustomText style={{ fontFamily: "Inter_500Medium_Italic" }}>Inter_500Medium_Italic</CustomText>
      <CustomText style={{ fontFamily: "Inter_900Black" }}>Inter_900Black</CustomText>

      <Image source={require('@/assets/images/react-logo.png')} style={{width: 150, height: 150, }} />
      <Image source={{uri:'https://i.pravatar.cc/400?img=37'}} 
      style={{width: 150, height: 200, resizeMode: 'contain',backgroundColor: "teal"}} />
      <Image source={{uri:'man'}} 
      style={{width: 150, height: 200, resizeMode: 'contain',backgroundColor: "teal"}} />
     

      </ScrollView> 
    </View>
  );
}
