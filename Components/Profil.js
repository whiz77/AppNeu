import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
    Alert,

} from 'react-native';

import Slider from '/Users/wicker/Dropbox/Development/AppNeu/Components/Slider';

export default class Profil extends Component {


    onButtonPress() {
        this.props.navigator.push({
            id: 'NewSite'
        })
    };

    render() {
        return (
            <Image style={styles.container} source={require('../Images/imgBack.png')}>
                <View style={[styles.pictures, styles.shadow]}>
                    <View style={styles.stagePic}>
                        <View style={styles.singlePicBig}>
                            <Slider/>
                        </View>
                    </View>
                    <View style={styles.smallPic}>
                        <Image style={styles.singlePicSmall} source={require('../Images/Img3.png')}/>
                        <Image style={styles.singlePicSmall} source={require('../Images/Img5.png')}/>
                    </View>
                    <View style={styles.smallPic}>
                        <Image style={styles.singlePicSmall} source={require('../Images/Img4.png')}/>
                        <Image style={styles.singlePicSmall} source={require('../Images/Img2.png')}/>
                    </View>
                </View>
                <View style={[styles.footer, styles.shadow]}>
                    <View style={styles.profil}>
                        <View style={styles.profilPic}>
                            <Image source={require('../Images/ImgProfil.jpg')}/>
                        </View>
                        <View style={styles.profilName}>
                            <Text style={styles.h1}>name</Text>
                            <Text style={styles.h2}>Photographer</Text>
                        </View>
                    </View>
                    <View style={styles.btnFooter}>
                        <TouchableHighlight style={styles.primaryCta} onPress={this.onButtonPress.bind(this)}
                                            activeOpacity={0.5}
                                            underlayColor={'transparent'}>
                            <Text style={styles.textPrimaryCta}>Neue Seite</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: null,
        width: null,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        padding: 30,
    },
    pictures: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    shadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 36,
        shadowOffset: {
            height: 36,
            width: 1
        }
    },
    stagePic: {
        flex: 5,
        overflow: 'hidden',
    },

    smallPic: {
        flexDirection: 'row',
        flex: 3,
        alignItems: 'flex-start'
    },
    singlePicBig: {
        flex: 1,
        //resizeMode: 'stretch',
        // width: null,
        // height: null,

    },
    singlePicSmall: {
        flex: 1,
    },
    footer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    profil: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilPic: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilName: {
        flex: 3,
        padding: 10,
    },

    h1: {
        color: '#000000',
        backgroundColor: 'transparent',
        fontFamily: 'Helvetica',
        fontWeight: '300',
        fontSize: 16,
    },
    h2: {
        color: '#a4a4a4',
        fontWeight: '100',
        fontStyle: 'italic',
        paddingTop: 2.5,

    },
    btnFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
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

module.exports = Profil;