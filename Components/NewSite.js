import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TextInput

} from 'react-native';

import UIComponent from '/Users/wicker/Dropbox/Development/AppNeu/Components/UiComponents';



export default class NewSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperatur: '50',
            zustand: 'flüssig',
        }
    };

    phaseErmitteln(temp) {

        if (temp <= 0) {
            this.setState({
                zustand: 'Fest'
            });
        } else if (temp > 0 && temp < 100) {
            this.setState({
                zustand: 'Flüssig'
            });
        } else {
            this.setState({
                zustand: 'Gasförmig'
            })
        }

        this.setState({
            temperatur: temp
        });
    };

    onBackButtonPress() {
        console.log('test');
        this.props.navigator.push({
            id: 'Profil'
        })
    };

    render() {

        return (
            <Image style={styles.container} source={require('../Images/imgBack.png')}>

                <View style={styles.area1}>
                    <Text style={styles.largeText}>WASSER</Text>
                    <Text style={styles.text}>{this.state.zustand}</Text>
                    <TextInput
                        style={styles.inputText}
                        keyboardType='numeric'
                        onChangeText={(temp) => this.phaseErmitteln(temp)}
                        //placeholder={'Gib eine Temperatur ein'}
                        value={this.state.temperatur}
                        maxLength={3}
                    />
                </View>
                <View style={styles.area2}>
                        <UIComponent onClick={(e) => this.onBackButtonPress(e)}/>
                </View>
            </Image>
        )
    }

}

// NewSite.propTypes = {
//     temperatur: React.PropTypes.number.isRequired,
//     zustand: React.PropTypes.string.isRequired
// }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: null,
        height: null

    },
    area1: {
        flex: 3,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    area2: {
        flex: 1
    },
    largeText: {
        fontSize: 32,
        paddingTop: 40,
        color: '#f47354'
    },
    text: {
        color: '#000000',
        padding: 15,
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        borderColor: '#000000',
        textAlign: 'center'
    },

});