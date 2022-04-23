import styled from '@emotion/native';
import {colors} from '../../themes/colors';

export const HeaderWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: 50,
  backgroundColor: colors.darkGrey,
});

export const HeaderText = styled.Text({
  color: colors.white,
  fontWeight: 'bold',
  marginLeft: 15,
});
