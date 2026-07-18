import {TextInput, View,StyleSheet} from "react-native";

const AppTextInput = ({value, onChangeText, placeholder,keyboardType,...otherProps}) => {


    return (
        <View style={styles.container}>
            <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            {...otherProps}
            >

            </TextInput>
        </View>
    )
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf4ef",
        width: "100%",
        height: 40,
        borderRadius:8,
        justifyContent: "center",
        paddingHorizontal: 8,
        marginBottom:20
    }
})