import React from 'react';
import {StatusBar} from 'react-native';

import Home from './src/screens/Home';
import {colors} from './src/themes/colors';

const App = () => (
  <>
    <StatusBar backgroundColor={colors.pink} />
    <Home />
  </>
);

export default App;
