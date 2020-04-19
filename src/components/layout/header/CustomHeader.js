import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { IMAGE } from "../../../constants/Images";

export class CustomHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          {this.props.isHome ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Image
                style={{ width: 30, height: 30, marginLeft: 5 }}
                source={IMAGE.ICON_MENU}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                style={{ width: 20, height: 20, marginLeft: 5 }}
                source={IMAGE.ICON_BACK}
                resizeMode='contain'
              />
              <Text>Back</Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 1.5,
            justifyContent: "center"
          }}
        >
          <Text style={{ textAlign: "center" }}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}
