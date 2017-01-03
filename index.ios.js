import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight, AppRegistry, Navigator } from "react-native";

const Profil = require('../AppNeu/Components/Profil');
const NewSite = require('../AppNeu/Components/NewSite');


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
