import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { CustomHeader } from "../layout/header/CustomHeader";

export class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title='Dashboard' navigation={this.props.navigation} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Dashboard Screen!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
