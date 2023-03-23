import { View, Image } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { Text } from "../../components/typography/text.component";

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
  padding-top: ${(props) => props.theme.space[3]};
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantCard = styled(Card)`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantCardCover = styled(Card.Cover)``;
export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
