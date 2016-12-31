import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight

} from 'react-native';

export default class NewSite extends Component {

    onBackButtonPress () {
        this.props.navigator.push({
            id: 'Profil'
        })
    };

    render() {

        return (
            <Image style={styles.container} source={require('../Images/imgBack.png')}>

                <View>
                    <Text style={styles.text}>Test</Text>
                    <TouchableHighlight onPress={this.onBackButtonPress.bind(this)}>
                        <Text>Back</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 40
    },
    text: {
        color: '#ffffff'
    }

});

module.exports = NewSite;