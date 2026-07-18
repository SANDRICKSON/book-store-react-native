import {StyleSheet, Text, TouchableOpacity} from "react-native";

const AppButton = ({onPress}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>Save</Text>
        </TouchableOpacity>
    )
}
export default AppButton;
const styles= StyleSheet.create(
    {
        container: {
            width:'100%',
            backgroundColor:'#1273DE',
            height:40,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:8,
        },
        title: {
            fontSize:23,
            fontWeight:'bold',
            color:'white',
        }
    }
)