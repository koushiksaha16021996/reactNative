import React, { useState } from 'react'
import { Text, View , StyleSheet, ImageBackground, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native'

export default function Register() {
    const img= require('./image/background.jpg')
    const [username,setusername] = useState("")
    const [useremail,setuseremail] = useState("")
    const [userpassword,setuserpassword] = useState("")
    const signin=()=>{
        alert(`User Name- ${username} \n User Email- ${useremail}`)
        //setusername("")
        //setuseremail("")
        //setuserpassword("")
    }
    const login=()=>{
        alert("try to login but not right now")
    }
    return (
        <View style={style.container}>
            <ImageBackground source={img} style={style.image}>
                <View style={style.subcontainer}>
                    <Text style={style.text}>Registration</Text>
                    
                   
                   <View style={style.textBoxContainer}>
                        <TextInput style={style.textBox} placeholder="Enter your Name" placeholderTextColor="#fff" onChangeText={text => setusername(text)}/>
                        <TextInput style={style.textBox} placeholder="Enter your Email" placeholderTextColor="#fff" onChangeText={text => setuseremail(text)}/>
                        <TextInput style={style.textBox} secureTextEntry={true} placeholder="Enter your Password" placeholderTextColor="#fff" onChangeText={text => setuserpassword(text)}/>
                    </View>

                    <View style={style.signin}>
                        <TouchableOpacity onPress={()=>signin()}>
                          <Text style={style.buttontext}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.notext}>Already have an account? Click the button below </Text>
                    <View style={style.login}>
                        <TouchableOpacity onPress={()=>login()}>
                          <Text style={style.buttontext}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    subcontainer:{
        backgroundColor: "#add8e6",
        width : "80%",
        borderRadius: 20,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0.8
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    text:{
        fontSize : 35,
        fontWeight: 'bold',
    },
    textBox:{
        backgroundColor: "#ff7f50",
        marginVertical: 5,
        borderRadius: 20,
        padding: 9,
        color: "white",
        fontSize : 15,
        fontWeight: 'bold',
        opacity: 0.8
    },
    textBoxContainer:{
        width: "80%",
        marginTop: 40
    },
    signin:{
        width: "50%",
        height: "10%",
        opacity: 1,
        backgroundColor: "#E91E63",
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        justifyContent: 'center',
        padding: 4
    },
    login:{
        width: "20%",
        opacity: 1,
        backgroundColor: "#3F51B5",
        alignItems: 'center',
        borderRadius: 20,
        margin: 5,
        justifyContent: 'center',
        padding: 4
    },
    buttontext:{
        fontSize : 15,
        fontWeight: 'bold',
        color: "white"
    },
    notext:{
        fontSize: 10,
        fontWeight: "bold"
    }
})