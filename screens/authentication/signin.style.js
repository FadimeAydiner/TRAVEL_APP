import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:COLORS.lightWhite
    },
    inputWrapper:(borderColor)=>({
        borderColor:borderColor,
        backgroundColor:COLORS.lightWhite,
        borderWidth:1,
        height:50,
        borderRadius:12,
        flexDirection:'row',
        paddinHorizontal:15,
        alignItem:'center',
        justifyContent:'center'
    }),
    wrapper:{
        marginBottom:20
    },
    label:{
        fontFamily:'regular',
        fontSize:SIZES.small,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right'
    },
    errorMessage:{
        color:COLORS.red,
        fontSize:SIZES.small,
        marginTop:5,
        marginLeft:5,
        textAlign:'right'

    }

})

export default styles