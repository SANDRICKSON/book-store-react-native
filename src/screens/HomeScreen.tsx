import {View, Text, SafeAreaView} from "react-native";
import BookCard from "../components/BookCard";
import {useState} from "react";

export default function HomeScreen(){
    const [bookList, setBookList] = useState()
    return (
        <SafeAreaView>
            <BookCard title="First" authorName="Ethel Schneider" price={815.56} imageUri="https://picsum.photos/seed/g1Owq2m/172/2134"/>
            <BookCard title="First" authorName="Rosa Hoppe" price={644.19} imageUri="https://picsum.photos/seed/AEcBUpkIL6/178/110"/>
            <BookCard title="First" authorName="Ms. Melanie Gutkowski" price={394.89} imageUri="https://loremflickr.com/1755/1714?lock=5101518206032626"/>
        </SafeAreaView>
    )
}