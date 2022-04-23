import React from 'react';
import {
  ItemsWrapper,
  NameAndTitleWrapper,
  ItemImage,
  ItemsText,
} from './styles';
import {colors} from '../../themes/colors';

const SectionItems = ({item}) => (
  <ItemsWrapper>
    <NameAndTitleWrapper>
      <ItemsText
        textColor={colors.pink}
        fontWeight="normal"
        textTransform="capitalize">
        Name:
        <ItemsText
          textColor={colors.darkGrey}
          fontWeight="bold"
          textTransform="uppercase">
          {` ${item.fullName}`}
        </ItemsText>
      </ItemsText>
      <ItemsText
        textColor={colors.pink}
        fontWeight="normal"
        textTransform="capitalize">
        Title:
        <ItemsText
          textColor={colors.darkGrey}
          fontWeight="bold"
          textTransform="uppercase">
          {` ${item.title}`}
        </ItemsText>
      </ItemsText>
    </NameAndTitleWrapper>
    <ItemImage source={{uri: item.imageUrl}} resizeMode="contain" />
  </ItemsWrapper>
);

export default SectionItems;
