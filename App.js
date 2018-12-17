import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./src/routes/tab";

import Route from "./src/routes/routes";
import Search from "./src/components/Search";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Route />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
