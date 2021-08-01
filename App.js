import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//hello-world
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteText: '',
      noteArr: []
    };
  }
  addTask = () => {
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
      this.state.noteArr.push({
        note: this.state.noteText,
        date: d.getDate() + " " + arr[d.getMonth()] + " " + d.getFullYear(),
      });
     this.setState({ noteArr: this.state.noteArr });
      this.setState({ noteText: '' });
    }
  };

  render() {
    var notes = this.state.noteArr.map((item) => {
      return <View>
          <Text>{item.note} </Text>
          <Text>{item.date} </Text>
        </View>
        });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}> Keep it </Text>
        </View>
        <Text>{notes}</Text>
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
