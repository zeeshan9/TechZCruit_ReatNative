import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { CustomHeader } from "../../../components/layout/header/CustomHeader";

export class HomePage extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title='Setting'
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Setting!</Text>
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("productdetail")}
          >
            <Text>Go product Detail</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
