import React from "react";
import styled from "styled-components/native";

import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../compnents/restaurant-info.component-card";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaraintListContainer = styled.View`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;

export const RestaurantScreens = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaraintListContainer>
      <RestaurantInfoCard />
    </RestaraintListContainer>
  </SafeArea>
);
