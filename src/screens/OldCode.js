/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import type { Node } from 'react';
 import {
   Image,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App: () => Node = () => {
 
   const [familyArr, setFamilyArr] = useState([])
   useEffect(() => {
     fetch('https://thronesapi.com/api/v2/Characters').then((res) => res.json()).then((response) => {
 
       var familyArr1 = []
       var newArr1 = []
 
       response.map((eachChar) => {
         if (newArr1.includes(eachChar.family)) {
           familyArr1 = familyArr1.map((eachFamily) => {
             if (eachFamily.family == eachChar.family) {
               return { ...eachFamily, count: eachFamily.count + 1, listOfChar: [...eachFamily.listOfChar, eachChar] }
             } else return eachFamily
           })
         } else {
           newArr1 = [...newArr1, eachChar.family]
           familyArr1 = [...familyArr1, { family: eachChar.family, count: 1, listOfChar: [{ ...eachChar }] }]
         }
       })
       setFamilyArr(familyArr1)
     }).catch((e) => {
       console.log('error', e)
     })
   }, [])
 
   return (
     <SafeAreaView>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic" >
         <RenderItems familyArr={familyArr} />
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const RenderItems = ({ familyArr }) => {
   return familyArr.map((eachFamily) => {
     const { family, count, listOfChar } = eachFamily
     return <View>
       <View style={{ backgroundColor: 'brown', padding: 10 }}>
         <Text style={{ color: 'white', fontSize: 18 }}>{family} : {count}</Text>
       </View>
       <View style={{ marginVertical: 10 }}>
         {listOfChar.map((eachChar) => <RenderEachChar eachChar={eachChar} />)}
       </View>
     </View>
   })
 }
 
 const EachTextInChar = ({ label, value }) => {
   return <Text numberOfLines={1} ellipsizeMode={'tail'}><Text style={{ color: 'red' }}>{label}:</Text> {value}</Text>
 }
 
 const RenderEachChar = ({ eachChar }) => {
   return <View key={eachChar.id} style={{ marginVertical: 5, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
     <View>
       <EachTextInChar label={'Name'} value={eachChar.fullName} />
       <EachTextInChar label={'Title'} value={eachChar.title} />
     </View>
     <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={{ uri: eachChar.imageUrl }} />
   </View>
 }
 
 export default App;
 