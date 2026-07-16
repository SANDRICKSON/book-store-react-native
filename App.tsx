import {StyleSheet} from 'react-native';

import {useState} from "react";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
    const [bookList, setBookList] = useState([]);


    return (
        <HomeScreen/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
