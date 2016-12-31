import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight, AppRegistry, Navigator } from "react-native";

var Profil = require('../AppNeu/Components/Profil');
var NewSite = require('../AppNeu/Components/NewSite');
var Slider = require('../AppNeu/Components/Slider');


class AppNeu extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                id: 'Profil'
            }}
                renderScene={
                this.navigatorRenderScene
            }
            />
        );

    }

    navigatorRenderScene(route, navigator){
        _navigator = navigator;
        switch (route.id){
            case 'Profil':
                return(<Profil navigator={navigator} title="Profil"/>)
            case 'NewSite':
                return(<NewSite navigator={navigator} title="New Site"/>)
            case 'Slider':
                return(<Slider navigator={navigator} title="Slider"/>)
        }
    }
}

AppRegistry.registerComponent('AppNeu', () => AppNeu);
