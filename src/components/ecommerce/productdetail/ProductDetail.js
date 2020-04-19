import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { CustomHeader } from "../../../components/layout/header/CustomHeader";

export class ProductDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title='Prooduct Detail'
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Setting Detail!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
