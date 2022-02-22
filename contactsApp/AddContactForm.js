import React from 'react'
import {TextInput,KeyboardAvoidingView,Button,StyleSheet,View} from 'react-native'
const styles = StyleSheet.create({
  input: {
    borderWidth:1,
    minWidth:100,
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:3,
    borderColor:'black',
    fontSize:30,
    },
    container:{
      flex:1,
      backgroundColor:'#fff',
      padding:40,
    },
});
export default class AddContactForm extends React.Component{
  
  state={
    name:'',
    phone:'',
    isFormValid:false,
    
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.name!==prevState.name ||this.state.phone!==prevState.phone)
    this.validateForm()
  }
  
  
  handleNameChange=name=>{
    this.setState({name})
  }
  handlePhoneChange=phone=>{
    if(+phone>=0 && phone.length<=10){
    this.setState({phone})
    }
  }
  validateForm=()=>{
    if(+this.state.phone>=0 && this.state.phone.length===10 &&this.state.name.length>=3){
      this.setState({isFormValid:true})
    }
    else{
      this.setState({isFormValid:false})
    }
  }
  handleSubmit=()=>{
    if(+this.state.phone>=0 && this.state.phone.length===10 &&this.state.name.length>=3)
    this.props.onSubmit({...this.state})
  }
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <TextInput style={styles.input} onChangeText={this.handleNameChange}
      placeholder='Name'
      value={this.state.name}/>
      <TextInput style={styles.input} onChangeText={this.handlePhoneChange} 
      keyboardType='numeric'
      value={this.state.phone}
      placeholder='phone'/>
      <Button  title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
      </KeyboardAvoidingView>

    )
  }
}
