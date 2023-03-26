import { StatusBar } from "expo-status-bar";
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import * as Font from "expo-font";
import {
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScreenComponent from "./Components/ScreenComponent";

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_700Bold,
    });

    function handleOnChange(e) {
        console.log(e);
    }

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
                <StatusBar style="dark" />
            </View>
        );
    } else {
        return (
            <SafeAreaProvider>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScreenComponent>
                        <View style={[styles.container]}>
                            <Header />
                            <TextInput
                                placeholder="Search something!"
                                keyboardType="default"
                                onChangeText={(e) => handleOnChange(e)}
                            />
                            <Footer />
                        </View>
                    </ScreenComponent>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        height: Dimensions.get("window").height,
    },
});
