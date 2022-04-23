import styled from '@emotion/native';

export const ItemsWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const NameAndTitleWrapper = styled.View({
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const ItemsText = styled.Text`
  color: ${props => props.textColor};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
  font-size: 16;
`;

export const ItemImage = styled.Image({
  height: 30,
  width: 30,
  borderRadius: 30,
});
