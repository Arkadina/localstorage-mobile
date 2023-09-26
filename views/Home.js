import { useEffect, useState } from "react";
import {
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableWithoutFeedback,
    Vibration,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, resetTodo } from "../app/store/slices/todoSlice";

import { AntDesign } from "@expo/vector-icons";

function Home() {
    const [inputValue, setInputValue] = useState();
    const [todos, setTodos] = useState();
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(selector.todo.todos);
    }, [selector.todo]);

    function handleOnChange(e) {
        setInputValue(e);
    }

    function handleOnPress() {
        if (inputValue === undefined || inputValue.replace(/\s/g, "") === "")
            return;

        dispatch(addTodo(inputValue));
        setInputValue();

        Keyboard.dismiss();
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <View style={styles.mainContainer}>
                    <View style={styles.mainContainerTextInputContainer}>
                        <TextInput
                            placeholder="Search something!"
                            keyboardType="default"
                            onChangeText={(e) => handleOnChange(e)}
                            style={styles.mainContainerTextInput}
                            value={inputValue}
                        />

                        <Pressable
                            style={styles.textInputButton}
                            onPress={() => handleOnPress()}
                        >
                            <AntDesign name="plus" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <List todos={todos} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

function List({ todos }) {
    const dispatch = useDispatch();

    function handleLongPress(id) {
        console.log("LongPress");
        dispatch(deleteTodo(id));

        Vibration.vibrate(1000);
    }

    function handlePressOut() {
        console.log("PressOut");
    }

    return (
        <View style={styles.itemContainer}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onLongPress={() => handleLongPress(item.id)}
                        onPressOut={() => handlePressOut()}
                    >
                        <Text style={styles.item}>{item.todo}</Text>
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    );
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
    itemContainer: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    item: {
        fontWeight: "bold",
        textTransform: "lowercase",
        fontSize: 14,
        paddingBottom: 12,
    },
});

export default Home;
