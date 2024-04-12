import { StyleSheet } from "react-native";
import { tlh, tlr } from "../../contants/dimension";

const styles = StyleSheet.create({
    selectedContainer: {
        flexDirection: 'row',
        width:86*tlr,
        height:25*tlh,
        justifyContent:'space-between',
        alignItems:'center'
    },
    container: {
        height: 107 * tlh,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    itemimage: {
        width: 77 * tlr,
        height: 77 * tlh,
        borderRadius: 8,
        backgroundColor: '#F6F6F6'
    },
    nameProduct: {
        paddingEnd: 3,
        borderRightColor:'black',
        borderEndWidth: 1,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        color: 'black',
        lineHeight: 20
    },
    description: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#7D7B7B',
        lineHeight: 20
    },
    price: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#007537',
        lineHeight: 22
    },
    flex: {
        flexDirection: 'row',
        marginTop:13*tlh
    },
    delete:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        marginStart:30,
        color:'black',
        fontStyle:'normal',
        fontVariant:'500',
        fontSize:20,

    },
    remove:{
        justifyContent:'center',
        alignItems:'center',
        width:20*tlh,
        height:20*tlh,
    },
    btnct:{
        width:20*tlh,
        height:20*tlh,
        borderWidth:1,
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'black'
    }
  
})

export default styles