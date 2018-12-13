import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator
} from "react-native";

import FilmItem from "./FilmItem";

import { getFilms } from "../api/TMDBA";

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.state = {
      films: [],
      isloading: false
    };
  }

  onChangedText(text) {
    this.searchedText = text;
  }

  renderFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isloading: true }); // lancement du chargement
      getFilms(this.searchedText).then(data => {
        this.setState({
          films: data.results,
          isloading: false // Arret du chargement
        });
      });
    }
  }

  displayLoading() {
    if (this.state.isloading) {
      return (
        <View style={sytles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    console.log(this.state.isloading);
    return (
      <View style={sytles.mainContainer}>
        <TextInput
          onChangeText={text => this.onChangedText(text)}
          style={[sytles.textinput, { marginBottom: 10 }]}
          placeholder="Entrer un film"
          onSubmitEditing={() => this.renderFilms()}
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
        {this.displayLoading()}
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
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Search;
