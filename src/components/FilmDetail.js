import React from "react";
import { StyleSheet, View, Text } from "react-native";

class FilmDetail extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Detail du film</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default FilmDetail;
