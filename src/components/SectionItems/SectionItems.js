import React from 'react';
import {
  ItemsWrapper,
  NameAndTitleWrapper,
  ItemImage,
  ItemsText,
} from './styles';
import {colors} from '../../themes/colors';

const SectionItems = ({itemName, itemTitle, itemImage}) => (
  <ItemsWrapper>
    <NameAndTitleWrapper>
      <ItemsText
        textColor={colors.pink}
        fontWeight="normal"
        textTransform="capitalize">
        Name :
        <ItemsText
          textColor={colors.darkGrey}
          fontWeight="bold"
          textTransform="upperCase">
          {itemName}
        </ItemsText>
      </ItemsText>
      <ItemsText
        textColor={colors.pink}
        fontWeight="normal"
        textTransform="capitalize">
        Title :
        <ItemsText
          textColor={colors.darkGrey}
          fontWeight="bold"
          textTransform="upperCase">
          {itemTitle}
        </ItemsText>
      </ItemsText>
    </NameAndTitleWrapper>
    <ItemImage source={itemImage} resizeMode="contain" />
  </ItemsWrapper>
);

export default SectionItems;
