import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    FlatList,
    Modal,
} from "react-native";

import BookCard from "../components/BookCard";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

import {
    getListOfBooks,
    deleteBookById,
} from "../api/http";

export default function HomeScreen() {

    const [bookList, setBookList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const loadBooks = () => {
        getListOfBooks({
            onSuccess: (books) => setBookList(books),
            onError: (error) => console.log(error),
        });
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const onDeleteItem = (item) => {
        deleteBookById({
            itemId: item.id,
            onSuccess: () => {
                loadBooks();
            },
            onError: (error) => console.log(error),
        });
    };

    const onEditItem = (item) => {
        setSelectedBook(item);
        setModalVisible(true);
    };

    const onAddBook = () => {
        setSelectedBook(null);
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* Add Button */}
            <AddButton onPress={onAddBook} />

            {/* Books */}
            <FlatList
                data={bookList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <BookCard
                        title={item.name}
                        authorName={item.email_of_seller}
                        price={item.price_of_book}
                        imageUri={item.cover}
                        onDeleteItem={() => onDeleteItem(item)}
                        onEditItem={() => onEditItem(item)}
                    />
                )}
            />

            {/* Add / Edit Modal */}
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <AddBookScreen
                    selectedBook={selectedBook}
                    onPress={() => {
                        setModalVisible(false);
                        setSelectedBook(null);
                        loadBooks();
                    }}
                />
            </Modal>

        </SafeAreaView>
    );
}