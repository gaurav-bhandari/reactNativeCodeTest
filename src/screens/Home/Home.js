import React, {useEffect, useState} from 'react';
import {SafeAreaView, SectionList} from 'react-native';

import oneDotComApi from '../../api';
import SectionHeader from '../../components/SectionHeader';
import SectionItems from '../../components/SectionItems';
import {Header, HeaderText} from './styles';

const Home = () => {
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const charactersData = await oneDotComApi.get('/api/v2/Characters');
        const familiesArr = charactersData.data.map(
          eachCharacter => eachCharacter.family,
        );
        let uniqueFamilies = [...new Set(familiesArr)];
        let familiesData = {};
        uniqueFamilies.forEach(eachFamily => {
          charactersData.data.forEach(eachCharacter => {
            if (eachFamily === eachCharacter.family) {
              if (familiesData[eachFamily]) {
                familiesData = {
                  ...familiesData,
                  [eachFamily]: [...familiesData[eachFamily], eachCharacter],
                };
              } else {
                familiesData = {
                  ...familiesData,
                  [eachFamily]: [eachCharacter],
                };
              }
            }
          });
        });
        const newFamiliesData = Object.entries(familiesData).map(
          eachFamilyData => ({
            title: eachFamilyData[0],
            data: eachFamilyData[1],
          }),
        );
        setFamilies(newFamiliesData);
      } catch (e) {
        console.log('Error:', e);
      }
    };
    getCharacters();
  }, []);

  return (
    <SafeAreaView>
      <Header>
        <HeaderText>Home</HeaderText>
      </Header>
      <SectionList
        sections={families}
        renderItem={({item}) => <SectionItems item={item} />}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => <SectionHeader section={section} />}
      />
    </SafeAreaView>
  );
};

export default Home;
