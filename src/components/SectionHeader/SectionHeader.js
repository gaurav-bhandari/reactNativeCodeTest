import React from 'react';
import {HeaderWrapper, HeaderText} from './styles';

const SectionHeader = ({section}) => (
  <HeaderWrapper>
    <HeaderText>{`${section.title} : ${section.data.length}`}</HeaderText>
  </HeaderWrapper>
);

export default SectionHeader;
