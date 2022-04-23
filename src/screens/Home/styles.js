import styled from '@emotion/native';
import {colors} from '../../themes/colors';

export const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 50,
  backgroundColor: colors.pink,
});

export const HeaderText = styled.Text({
  color: colors.white,
  fontSize: 16,
  textTransform: 'capitalize',
  fontWeight: 'bold',
});
