import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

const Header = () => {
    const elRef = useRef();
    const elRef2 = useRef();

    useEffect(() => {
        console.log(elRef.current.clientHeight);
    }, []);
    return (
        <View
            style={styles.container}
            onLayout={(e) => console.log(e.nativeEvent.layout.height)}
            ref={elRef}
        >
            <Text style={styles.text}>Local Storage Mobile</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
        borderTopWidth: 0,
        width: "100%",
        height: 54,
    },
    text: {
        fontFamily: "Poppins_700Bold",
    },
});
