import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export default SafeArea;
