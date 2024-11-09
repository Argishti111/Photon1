import {SafeAreaView, StatusBar, Text, View} from "react-native";
import React from "react";
import styles from "./Styles.ts";
import {TextInput} from "react-native-paper";

function ChatScreen({route}: any) {
    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar
                barStyle={route.params.isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={route.params.backgroundStyle.backgroundColor}
            />
            <View style={styles.chatScreenStyle}>
                <TextInput mode="outlined"
                           label="Outlined input"
                           placeholder="Type something"
                style={{width:'80%', borderRadius:50}}/>
            </View>
        </SafeAreaView>
    );
}

export default ChatScreen;
