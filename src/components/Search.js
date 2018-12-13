import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList
} from "react-native";

import FilmItem from "./FilmItem";

import { getFilms } from "../api/TMDBA";

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.state = {
      films: []
    };
  }

  onChangedText(text) {
    this.searchedText = text;
  }

  renderFilms() {
    if (this.searchedText.length > 0) {
      getFilms(this.searchedText).then(data => {
        this.setState({ films: data.results });
      });
    }
  }
  render() {
    return (
      <View style={sytles.mainContainer}>
        <TextInput
          onChangeText={text => this.onChangedText(text)}
          style={[sytles.textinput, { marginBottom: 10 }]}
          placeholder="Entrer un film"
        />
        <Button
          style={{ height: 50 }}
          title="Rechercer"
          onPress={() => this.renderFilms()}
        />
        <FlatList
          data={this.state.films}
          keyExtractor={item => item.title.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}

const sytles = StyleSheet.create({
  mainContainer: {
    marginTop: 40
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  }
});

export default Search;
