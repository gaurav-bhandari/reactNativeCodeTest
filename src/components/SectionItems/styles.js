import styled from '@emotion/native';

export const ItemsWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15,
});

export const NameAndTitleWrapper = styled.View({
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flex: 6,
});

export const ItemsText = styled.Text`
  color: ${props => props.textColor};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
  font-size: 16px;
`;

export const ItemImage = styled.Image({
  height: 50,
  width: 50,
  borderRadius: 25,
  flex: 1,
});
