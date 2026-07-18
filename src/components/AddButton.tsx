import {StyleSheet, TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const AddButton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name="plus" size={24} color="white"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: "#1273d5",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    }
})

export default AddButton;