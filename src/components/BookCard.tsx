import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
const BookCard = ({title,price,authorName,imageUri,onDeleteItem,onEditItem}) =>{
    return (
        <View style={styles.container}>

            <View style={styles.detailsContainer}>
                <Image source={{uri: imageUri}} style={styles.coverImage}/>
                <Text style={styles.bookName}>{title}</Text>
                <Text style={styles.authorName}>{authorName}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>

            <View style={styles.delEditContainer}>
                <TouchableOpacity style={styles.circleButton}>
                    <MaterialIcons name="delete-outline" size={30} color="#ff0000" onPress={onDeleteItem}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}>
                    <AntDesign name="edit" size={30} color="#ff0000" onPress={onEditItem}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius:10,
        padding:10,
        shadowColor: "#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity: .1,
        shadowRadius:4,
        elevation:3,
        margin:10
    },

    coverImage: {
        height:120,
        width:"25%",
        borderRadius:8,
        resizeMode:"stretch"
    },

    detailsContainer: {
        flex:1,
        marginHorizontal:10,
        marginTop:10
    },

    bookName : {
        fontSize:16,
        fontWeight:"bold",
        color:'#000',
    },

    authorName : {
        fontSize:14,
        color:'#888',
    },

    price:{
        fontSize:16,
        fontWeight:"bold",
        color:'#25a'
    },

    delEditContainer : {
        flexDirection:'row',
        alignItems:'center'
    },

    circleButton : {
        height:30,
        width:30,
        borderRadius:15,
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        marginStart:10
    }



})

export default BookCard;