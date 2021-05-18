import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../compnents/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestarauntList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreens = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      {isLoading ?
        <ActivityIndicator
          size="large"
          animating={true}
          color={Colors.red800}
        />
        :
        <RestarauntList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaraunt={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      }
    </SafeArea>
  );
};
