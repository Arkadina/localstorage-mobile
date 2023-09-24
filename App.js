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
    NativeModules,
    Pressable,
} from "react-native";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import * as Font from "expo-font";
import {
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AntDesign } from "@expo/vector-icons";
<AntDesign name="plus" size={24} color="black" />;

const { StatusBarManager } = NativeModules;

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_700Bold,
    });

    function handleOnChange(e) {
        // console.log(e);
    }

    console.log(StatusBarManager.HEIGHT + 74 + 54);

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
                <StatusBar style="dark" />
            </View>
        );
    } else {
        return (
            <SafeAreaProvider style={styles.container}>
                <View style={styles.container}>
                    <KeyboardAvoidingView style={styles.container}>
                        <Header />

                        <View>
                            <View style={styles.mainContainer}>
                                <View
                                    style={
                                        styles.mainContainerTextInputContainer
                                    }
                                >
                                    <TextInput
                                        placeholder="Search something!"
                                        keyboardType="default"
                                        onChangeText={(e) => handleOnChange(e)}
                                        style={styles.mainContainerTextInput}
                                    />

                                    <Pressable style={styles.textInputButton}>
                                        <AntDesign
                                            name="plus"
                                            size={24}
                                            color="black"
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={styles.container}
                        ></ScrollView>
                    </KeyboardAvoidingView>
                    <Footer />
                </View>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        paddingVertical: 24,
        paddingHorizontal: 35,
        height: 100,
    },
    mainContainerTextInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    mainContainerTextInput: {
        backgroundColor: "#EEEEEE",
        paddingVertical: 12,
        borderRadius: 12,
        height: 50,
        width: 265,
        paddingHorizontal: 20,
    },
    textInputButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        backgroundColor: "#EEEEEE",
        width: 40,
        borderRadius: 12,
    },
});
