import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import Row from './Row'
const renderItem=({item})=><Row{...item}/>
const renderSectionHeader=obj=><Text>{obj.section.title}</Text>

const AontactsList = props =>{
  const contactsByLetter=props.contacts.reduce((obj,contact)=>{
    const firstLetter = contact.name[0].toUpperCase()
    return{
      ...obj,
      [firstLetter]:[...(obj[firstLetter]||[]),contact ]
    }
  },{})
  const sections = Object.keys(contactsByLetter).sort().map(letter=>({
  title:letter,
  data:contactsByLetter[letter]
}))
return(
 <SectionList 
          renderItem ={renderItem}
          renderSectionHeader={renderSectionHeader}
          sections={sections}
  />
)
}

AontactsList.propTypes={
  renderItem:PropTypes.func,
  renderSectionHeader:PropTypes.func,
  contacts:PropTypes.array,
}

export default AontactsList