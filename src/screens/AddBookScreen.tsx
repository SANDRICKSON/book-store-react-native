import {View, StyleSheet, Text, TouchableOpacity, Alert} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import {useState} from "react";
import AppButton from "../components/AppButton";
import {createBook} from "../api/http";

    const AddButton = ({onPress}) => {

        const [bookName, setBookName] = useState("");
        const [authorName, setAuthorName] = useState("");
        const [coverUrl, setCoverUrl] = useState("");
        const [price, setPrice] = useState("");

        const createNewBook = () => {
            createBook({
                body: {
                    name: bookName,
                    cover: coverUrl,
                    price_of_book: price,
                    email_of_seller: authorName
                },
                onSuccess: () => {
                    Alert.alert("Success", "Book created successfully.");
                    onPress();
                },
                onError: (err) => {
                    console.log(err);
                    Alert.alert("Error", "Failed to create book.");
                }
            });
        };


    return (
        <View>
            <TouchableOpacity>
                <AntDesign name="close-circle" size={24} color="red" onPress={onPress}/>
                <View style={styles.body}>
                    <Text style={styles.title}>
                        Book Details
                    </Text>
                    <AppTextInput placeholder={"Book Name"} value={bookName} onChangeText={setBookName}/>
                    <AppTextInput placeholder={"Author Name"} value={authorName} onChangeText={setAuthorName}/>
                    <AppTextInput placeholder={"Cover Image"} value={coverUrl} onChangeText={setCoverUrl}/>
                    <AppTextInput placeholder={"Book Price"} value={price} onChangeText={setPrice} keyboardType={"numeric"}/>
                    <AppButton onPress={createNewBook}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default AddButton

const styles = StyleSheet.create({
    body: {
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        paddingHorizontal:15,
        paddingTop:30
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom:20
    }
})