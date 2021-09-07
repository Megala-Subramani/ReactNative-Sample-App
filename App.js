/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TouchableOpacity, 
   TextInput,
   Button,
   Image,
   FlatList,
   Platform
 } from 'react-native';

 const onPressCircle=(color)=>{
  console.log("MEGALA===>",color);
  alert("I am from "+color.toUpperCase() +" Circle");
 }
 const App: () => Node = () => {
  const bgColor = Platform.OS === "android" ? "peachpuff" : "gray"
  const [text,setText]=useState('');
  const [color,setColor] = useState('gray');
  const colorArray = ["red","green","yellow","blue","pink","orange"];
  const changingInputData=(data)=>{
    console.log("changingInputData=====> : ",data);
    setText(data);
  }
  const onButtonClick=()=>{
    if(text != ""){
      if(colorArray.indexOf(text.toLowerCase()) !== -1){
        setColor(text.toLowerCase());
      }else{
        setColor('gray');
        alert("Input String not Match With Color Values");
      }
     /* switch(text.toLowerCase()){
        case "red":
            setColor('red');
            break;
        case "green":
            setColor('green');
            break;
        case "yellow":
            setColor('yellow');
            break;
        case "blue":
            setColor('blue');
            break;    
        case "pink":
            setColor('pink');
            break;
        case "orange":
            setColor('orange');
            break;
        default:
            setColor('gray');
            alert("Input String not Match With Color Values")
          break;
      }*/
    }
    else{
      alert("No Data Available");
    }
  }
  const renderColorArr=({item})=>{
    console.log("MEGALA====>item: ",item)
    return(<Text style={styles.TextStyle} >{item}</Text>)
  }
  console.log("bgColorbgColor===> ",bgColor)
   return (
     <SafeAreaView>
             <View style={{backgroundColor:bgColor,width:100+'%',height:100+'%'}}>
                <TouchableOpacity  style={styles.circleContainerLeftTop} onPress={()=>onPressCircle('red')} ></TouchableOpacity >
                <TouchableOpacity  style={styles.circleContainerRightTop} onPress={()=>onPressCircle('green')} ></TouchableOpacity >
                <TouchableOpacity  style={styles.circleContainerLeftBottom} onPress={()=>onPressCircle('yellow')} ></TouchableOpacity >
                <TouchableOpacity  style={styles.circleContainerRightBottom} onPress={()=>onPressCircle('blue')} ></TouchableOpacity >
                <ScrollView style={styles.TextContainer} >
                  <FlatList data={colorArray} renderItem={renderColorArr} keyExtractor={item => item} />
                </ScrollView>
                <View style={{marginTop:10,width:90+'%',marginLeft:15}}>
                  <Text style={{color}} >
                    {text}
                  </Text>
                  <TextInput style={styles.TextInputStyle} onChangeText={(text)=>changingInputData(text)} >
                  </TextInput>               
                  <TouchableOpacity style={{width:120,height:40,marginLeft:100,marginTop:10,borderWidth:1,borderRadius:30,backgroundColor:color}} onPress={onButtonClick}>
                   <Text style={styles.ClickMeStyle}>Click Me</Text>
                   <Image style={{width:25,height:25,position:'absolute',left:75,top:4}} source={require("./images/click.jpg")}/>
                  </TouchableOpacity>                  
                </View>
             </View>             
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
  ClickMeStyle:{
    width:94,
    height:40,
    textAlign:'center',
    marginTop:8
  },
  TextInputStyle:{
    height:40,
    lineHeight:40,
    borderWidth:1,
    borderColor:'green'
  },
  TextContainer:{
    width:150,
    height:165,
    maxHeight:165,
    borderWidth:1,
    borderColor:'black',
    marginLeft:50,
    marginTop:-400,
    marginLeft:100
  },
  TextStyle:{
    height:50,/*150*/
    textAlign:'center'
  },
  circleContainerLeftTop: {
     width:100,
     height:100,
     backgroundColor:'red',
     borderRadius:50
   },
  circleContainerRightTop: {
    width:100,
    height:100,
    backgroundColor:'green',
    borderRadius:50,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop:-100
  },
  circleContainerLeftBottom:{
    width:100,
    height:100,
    backgroundColor:'yellow',
    borderRadius:50,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop:368
  },
  circleContainerRightBottom:{
    width:100,
    height:100,
    backgroundColor:'blue',
    borderRadius:50,
    marginTop:-100
  }
 });
 
 export default App;
 