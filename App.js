import * as React from 'react';
import {ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Note from './components/Note';
import db from './config'
// or any pure javascript modules available in npm

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteText: '',
      noteArr: []
    };
  }
  
markDone =(item) => {

  const node = db.ref('tasks').child(this.state.noteArr[item].id)

    node.remove();
  this.state.noteArr.splice(item,1);
};

  componentDidMount(){
    const tasks = db.ref('tasks');
    tasks.on('value', (data)=>{
      const todos = data.val();
      const taskList= [];

       for(var id in todos){
        taskList.push({id, ...todos[id]})
      }
      this.setState({noteArr:taskList});
    })
  }
  addTask = () => {

    const tasks = db.ref('tasks')
    var d = new Date();
    const arr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    if (this.state.noteText) {
   const newTask =   {
        note: this.state.noteText,
        date: d.getDate() + " " + arr[d.getMonth()] + " " + d.getFullYear(),
      }
    tasks.push(newTask)
      this.setState({ noteText: '' });
    }
    
  };

  render() {
    var notes = this.state.noteArr.map((index, item) => {
      return(<Note  task={index} markDone={()=>{this.markDone(item)}}/>)
        });
    return (
      <View style={styles.container}>
      <View style ={{flex:0.9}}> 
        <View style={styles.header}>
          <Text style={{ fontSize: 25,fontWeight:'bold',color:'red' }}> Keep it </Text>
        </View>
        <ScrollView>{notes}</ScrollView> </View>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Task"
            onChangeText={(text) => {
              this.setState({ noteText: text });
            }}
            value={this.state.noteText}
          />
          <TouchableOpacity style={styles.textButton} onPress={this.addTask}>
            <Text style={{ fontSize: 20 }}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    height: 70,
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
   
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 50,
    borderTopColor: 'gold',
    borderTopWidth: 3,
  },
  textInput: {
    padding: 10,
    fontSize: 18,
    outline: 'none',
  },
  textButton: {
    position: 'absolute',
    bottom: 2,
    right: 10,
    backgroundColor: 'gold',
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
