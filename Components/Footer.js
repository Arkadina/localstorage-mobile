import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 74,
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
        borderBottomWidth: 0,
        backgroundColor: "red",
    },
    text: {
        fontFamily: "Poppins_700Bold",
    },
});
