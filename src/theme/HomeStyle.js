import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import { Dimensions } from "react-native";

// Lấy kích thước của thiết bị hiện tại
const { width, height } = Dimensions.get('window');
const tlr = width / 373
const tlh = height / 734


const styles = StyleSheet.create({
    textmore:{
        marginEnd:26*tlr,
        color:'#221F1F',
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'500',
        lineHeight:20*tlh,
        borderBottomColor:'#A9A9A9',
        borderBottomWidth:1
    },
    moreContainer:{
        width:'100%',
        alignItems:'flex-end'
    },
   
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
  
    textCaytrong: {
        marginTop: 18.183,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 34 * tlh,
        marginStart: 24 * tlr,
        color: 'black'
    },
red:{
    backgroundColor:'white',
    width:"100%",
    height:222,
}
   
    

})


export default styles