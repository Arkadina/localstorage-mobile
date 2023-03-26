import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Local Storage Mobile</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderWidth: 1,
        borderBottomColor: "#EEEEEE",
        borderTopWidth: 0,
        width: "100%",
        height: 54,
    },
    text: {
        fontFamily: "Poppins_700Bold",
    },
});
