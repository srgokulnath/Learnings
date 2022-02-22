import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import contacts,{compareNames} from './contacts';
import Row from './Row'
import AontactsList from './AontactsList'
import AddContactForm from './AddContactForm'
export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm:false,
    contacts:contacts
  };
  addContact=newContact=>{
    this.setState(prevState=>({showForm:false,contacts:[...prevState.contacts,newContact]}))
  }
  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  }
  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  }
  sort=()=>{ 
    this.setState(prevState=>({
      contacts:[...prevState.contacts].sort(compareNames)
    }))
  }
  
  render() {
    if(this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="Add contact" onPress={this.toggleForm} />

        {this.state.showContacts && <AontactsList 
        contacts={this.state.contacts}
        />
        
      }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});
