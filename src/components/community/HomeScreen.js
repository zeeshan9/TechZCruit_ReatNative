import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { CustomHeader } from "../layout/header/CustomHeader";

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title='Home Detail'
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Home!</Text>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("HomeDetail")}
          >
            <Text>Go Home Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
