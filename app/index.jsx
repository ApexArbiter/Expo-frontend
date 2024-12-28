import { Text, View } from "react-native";
import "../global.css"
export default function Index() {
  return (
    <View
      className="bg-red-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text >Hello Mahad.</Text>
    </View>
  );
}
