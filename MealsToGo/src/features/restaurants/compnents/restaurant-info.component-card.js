import React from "react";
import styled from "styled-components/native";

import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaraunt = {} }) => {
  const {
    name = "Some Restaraunt",
    icon,
    photos = [
      "https://foodiesfeed.com/wp-content/uploads/2021/01/bowl-with-fermented-vegetables-in-a-korean-restaurant.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false
  } = restaraunt;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
