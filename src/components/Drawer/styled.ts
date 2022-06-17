import {DrawerContentScrollView} from '@react-navigation/drawer';
import styled from 'styled-components/native';

export const DrawerContainer = styled(DrawerContentScrollView)`
  background-color: #f4f9f8;
  margin: 8px 0;
`;

export const DrawerHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px;
  margin-bottom: 32px;
`;

export const DrawerDivider = styled.View`
  background-color: #667f90;
  width: 85%;
  height: 1px;
  opacity: 0.3;

  margin: 8px 0;
`;

export const DrawerListItemBefore = styled.View`
  position: absolute;
  background-color: #2f9ff8;
  width: 6px;
  height: 6px;
  left: -16px;
  bottom: 8px;
  border-radius: 6px;
`;

export const DrawerListItemIcon = styled.View`
  position: relative;
`;

export const ImageBrandLogo = styled.Image`
  width: 30px;
  height: 35px;
  margin-right: 16px;
  margin-left: 16px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #0768b5;
`;
