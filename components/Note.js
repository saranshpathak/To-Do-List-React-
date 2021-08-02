import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'


export default class Note extends React.Component{
  render(){

    return(
      <View style ={styles.notes} key ={this.props.task}>
      <Text style ={styles.noteText}> {this.props.task.note}</Text>
      <Text style ={styles.noteDate}>{this.props.task.date}</Text>
      <TouchableOpacity style={styles.textButton}  >
     <Text style ={{color:'white',justifyContent:'center',alignItems:'center',textAlign:'center'}} 
     onPress={this.props.markDone}> Done
</Text>      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notes:{
    position:"relative",
    marginTop:5,
    padding:20,
    display:"flex",
    flexDirection:'row',
    borderBottomColor:'grey',
    borderBottomWidth:3,
    
  },
  noteDate:{

    position:"absolute",
    bottom:0,left:20
  },
  textButton:{
    position:'absolute',
    right:10,
    bottom:10,top:10,backgroundColor:'black',borderRadius:5,
    justifyContent:'center',alignItems:'center',width:45
  },
  noteText:{
    fontSize:20,
    textTransform:"capitalize",
    borderLeftColor:'grey',
    borderLeftWidth:10
  }
  
});
