import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import oneDotComApi from '../../api';
import SectionHeader from '../../components/SectionHeader';
import SectionItems from '../../components/SectionItems';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const results = await oneDotComApi.get('/api/v2/Characters');
      const families = results.data.map(eachResult => eachResult.family);
      let familySection = {};
      let uniqueFamilyArray = [...new Set(families)];
      uniqueFamilyArray.forEach(eachFamily => {
        results.data.forEach(eachRes => {
          if (eachFamily === eachRes.family) {
            if (familySection[eachFamily]) {
              familySection = {
                ...familySection,
                [eachFamily]: [...familySection[eachFamily], eachRes],
              };
            } else {
              familySection = {
                ...familySection,
                [eachFamily]: [eachRes],
              };
            }
          }
        });
      });
    };
    getCharacters();
  }, []);

  return (
    <SafeAreaView>
      {/* <SectionList sections={data}
     renderItem={}
     keyExtractor={(item) => }
     renderSectionHeader={} 
      /> */}
    </SafeAreaView>
  );
};

export default Home;
