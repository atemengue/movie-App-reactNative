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
    this.page = 0; // compteur pour connaitre la page courante
    this.totalPages = 0; // nombre de pages totales pour savoir
    this.state = {
      films: [],
      isloading: false
    };
  }

  searchFilms() {
    this.page = 0;
    this.totalPages = 0;
    this.setState(
      {
        films: []
      },
      () => {
        console.log(
          "Page : " +
            this.page +
            " / TotalPages : " +
            this.totalPages +
            " / Nombre de films : " +
            this.state.films.length
        );
        this.renderFilms();
      }
    );
  }
  onChangedText(text) {
    this.searchedText = text;
  }

  renderFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isloading: true }); // lancement du chargement
      getFilms(this.searchedText, this.page + 1).then(data => {
        this.page = data.page;
        this.totalPages = data.total_pages;
        this.setState({
          films: [...this.state.films, ...data.results],
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

  displayDetailFilm = idFim => {
    console.log("Display film width id" + idFim);
  };

  render() {
    console.log(this.state.isloading);
    return (
      <View style={sytles.mainContainer}>
        <TextInput
          onChangeText={text => this.onChangedText(text)}
          style={[sytles.textinput, { marginBottom: 10 }]}
          placeholder="Entrer un film"
          onSubmitEditing={() => this.searchFilms()}
        />
        <Button
          style={{ height: 50 }}
          title="Rechercher"
          onPress={() => this.searchFilms()}
        />
        <FlatList
          data={this.state.films}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log("onEndReached");
            if (this.state.films.length > 0 && this.page < this.totalPages) {
              this.renderFilms();
            }
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <FilmItem
              film={item}
              displayDetailForFilm={this.displayDetailFilm}
            />
          )}
        />
        {this.displayLoading()}
      </View>
    );
  }
}

const sytles = StyleSheet.create({
  mainContainer: {
    flex: 1
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
