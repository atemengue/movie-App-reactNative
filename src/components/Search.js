import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList
} from "react-native";

import films from "../data/filmsData";
import FilmItem from "./FilmItem";

import { getFilms } from "../api/TMDBA";

class Search extends Component {
  constructor(props) {
    super(props);
    this._films = [];
  }

  renderFilms() {
    getFilms("stars").then(data => {
      this._films = data.results;
      this.forceUpdate();
    });
  }
  render() {
    return (
      <View style={sytles.mainContainer}>
        <TextInput
          style={[sytles.textinput, { marginBottom: 10 }]}
          placeholder="Entrer un film"
        />
        <Button
          style={{ height: 50 }}
          title="Rechercer"
          onPress={() => this.renderFilms()}
        />
        <FlatList
          data={this._films}
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
