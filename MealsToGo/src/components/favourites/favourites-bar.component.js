import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FavouritesBar = ({
  favourites,
  onNavigate,
  clearAllFavourites,
}) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <HeaderWrapper>
        <Spacer variant="left.large">
          <Text variant="caption">Favorites</Text>
        </Spacer>
        <TouchableOpacity onPress={clearAllFavourites}>
          <Spacer variant="left.large">
            <Text variant="caption">Clear all</Text>
          </Spacer>
        </TouchableOpacity>
      </HeaderWrapper>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantsDetails", { restaurant });
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
