import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function ScrollViewScreen() {
  return (
    <View>
      <ScrollView>
        <Text style={{ fontSize: 25 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/report.png")}
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/report.png")}
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/report.png")}
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/report.png")}
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/report.png")}
        />
      </ScrollView>
    </View>
  );
}
