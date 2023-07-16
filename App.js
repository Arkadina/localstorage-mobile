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
import ScreenComponent from "./components/ScreenComponent";
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
            <SafeAreaProvider>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScreenComponent>
                        <View style={[styles.container]}>
                            <Header />
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
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    {/* list */}
                                </ScrollView>
                            </View>
                            <Footer />
                        </View>
                    </ScreenComponent>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        );
    }
}

console.log(Dimensions.get("screen").height);

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    mainContainer: {
        flex: 0,
        paddingVertical: 24,
        paddingHorizontal: 35,
        height: Dimensions.get("screen").height - 238,
        minWidth: "100%",
    },
    mainContainerTextInputContainer: {
        flex: 0,
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
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        backgroundColor: "#EEEEEE",
        width: 40,
        borderRadius: 12,
    },
});
