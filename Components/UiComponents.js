import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

export default class UiComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Back',
        }
    };

    onBackButtonPress() {
        this.props.navigator.push({
            id: 'Profil'
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.primaryCta}
                                    activeOpacity={0.5}
                                    underlayColor={'transparent'}>
                    <Text style={styles.textPrimaryCta}>{this.state.text}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryCta: {
        backgroundColor: '#0269FF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    textPrimaryCta: {
        color: '#ffffff',
        fontSize: 15,
    },
});
