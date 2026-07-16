import axios from "axios";
import {Alert} from "react-native";
import {useState} from "react";

const [bookList, setBookList] = useState([]);
const endpointUrl = "https://6a58af5168601fc330e91ee6.mockapi.io/books"
export const getListOfBooks = async ({onSuccess,onError}) => {
    const response = await axios.get(endpointUrl);
    console.log(JSON.stringify(response.data));
    onSuccess();
    setBookList(response.data);
}

export const getBookById = async () => {
    try {
        const response = await axios.get(endpointUrl + "/6000");
        console.log(JSON.stringify(response.data));
    } catch (err) {
        console.log(err);
    }

}


const deleteBookById = async () => {
    try {
        const response = await axios.delete(endpointUrl + "/76");
        Alert.alert("Book was deleted successfully.");
    } catch (error) {

    }
}
