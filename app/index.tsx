import BottomLoginSheet from "@/components/BottomSheet/BottomLoginSheet";
import AnimatedIntro from "@/components/intro/AnimatedIntro";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AnimatedIntro />
      <BottomLoginSheet/>
    </View>
  );
}
