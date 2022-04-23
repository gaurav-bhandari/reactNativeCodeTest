import React from 'react';
import {HeaderWrapper, HeaderText} from './styles';

const SectionHeader = ({familyName, noOfMembers}) => (
  <HeaderWrapper>
    <HeaderText>{`${familyName} : ${noOfMembers}`}</HeaderText>
  </HeaderWrapper>
);

export default SectionHeader;
