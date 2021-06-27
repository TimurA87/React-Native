import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favorites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const isFavorite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavorite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
