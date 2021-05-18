import React from "react";

import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaraunt = {} }) => {
  const {
    name = "Some Restaraunt",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://foodiesfeed.com/wp-content/uploads/2021/01/bowl-with-fermented-vegetables-in-a-korean-restaurant.jpg",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaraunt;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((element, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
