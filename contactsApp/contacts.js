const NUM_CONTACTS = 10
const firstNames = ['Emma','Noah','Oliva','GOkul','Swarna']
const lastNames = ['Smith','James','Brown','Nath','Latha']


// Create a random number
const rand =  (max,min = 0)=>Math.floor(Math.random()*(max-min+1))+min


// Generate a name
const generateNames = ()=>`${firstNames[rand(firstNames.length-1)]} ${lastNames[rand(lastNames.length-1)]}`


// Generate a aphone number
const generatePhoneNumber =()=>`${rand(999,100)}-${rand(999,100)}-${rand(9999,1000)}`


// Create a person
const createContact = ()=>({
    name:generateNames(),
    phone:generatePhoneNumber(),
})


// compare Two contacts for alphabatizing
export const compareNames = (contact1,contact2)=>contact1.name > contact2.name


// add keys based on index
const addkeys = (val,key)=>({key,...val})


/* the above function is similar to
const addkeysToContacts = (contact,key)=>({
    key:key,
    ...contact
})
*/


// create an array of length NUM_CONTACTS and assign Keys
export default Array.from({length:NUM_CONTACTS},createContact).map(addkeys)
