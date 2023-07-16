import { ScrollView } from "react-native";
import React, { useRef } from "react";

const ScreenComponent = ({ children }) => {
    const scrollViewRef = useRef(null);
    // console.log(scrollViewRef.current);
    return <ScrollView ref={scrollViewRef}>{children}</ScrollView>;
};

export default ScreenComponent;
