import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import * as Font from "expo-font";
import {
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./views/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
                <StatusBar style="dark" />
            </View>
        );
    } else {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider style={styles.container}>
                        <View style={styles.container}>
                            <Header />
                            <Home />
                            <Footer />
                        </View>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
