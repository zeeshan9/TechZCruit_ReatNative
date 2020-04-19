import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { IMAGE } from "../../../constants/Images";

export class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 150,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={IMAGE.ICON_PROFILE}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
        </View>
        <ScrollView style={{ marginLeft: 5 }}>
          {/* Navigation Links inside Drawer Menu */}
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("MenuTab")}
          >
            <Text>Menu Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("Dashboard")}
          >
            <Text>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
