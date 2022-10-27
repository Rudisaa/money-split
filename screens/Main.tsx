import { Text, View } from "react-native";
import FoodItem from "../components/FoodItem";

export default function Main() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <FoodItem />
    </View>
  );
}
