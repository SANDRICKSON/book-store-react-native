import axios from "axios";
import { Alert } from "react-native";

const endpointUrl =
    "https://6a58af5168601fc330e91ee6.mockapi.io/books";

export const getListOfBooks = async ({ onSuccess, onError }) => {
    try {
        const response = await axios.get(endpointUrl);
        onSuccess(response.data);
    } catch (error) {
        console.log(error);
        onError(error);
    }
};

export const createBook = async ({
                                     body,
                                     onSuccess,
                                     onError,
                                 }) => {
    try {
        const response = await axios.post(endpointUrl, body);

        console.log(response.data);

        onSuccess(response.data);
    } catch (error) {
        console.log(error);
        onError(error);
    }
};

export const deleteBookById = async ({
                                         itemId,
                                         onSuccess,
                                         onError,
                                     }) => {
    try {
        await axios.delete(`${endpointUrl}/${itemId}`);

        Alert.alert("Success", "Book deleted successfully.");

        onSuccess();
    } catch (error) {
        console.log(error);
        onError(error);
    }
};

export const getBookById = async ({
                                      itemId,
                                      onSuccess,
                                      onError,
                                  }) => {
    try {
        const response = await axios.get(`${endpointUrl}/${itemId}`);

        onSuccess(response.data);
    } catch (error) {
        console.log(error);
        onError(error);
    }
};

export const updateBook = async ({
                                     itemId,
                                     body,
                                     onSuccess,
                                     onError,
                                 }) => {
    try {
        const response = await axios.put(
            `${endpointUrl}/${itemId}`,
            body
        );

        onSuccess(response.data);
    } catch (error) {
        console.log(error);
        onError(error);
    }
};