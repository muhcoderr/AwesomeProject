import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/muhcoder/image/upload/v1710785303/samples/bike.jpg",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Smile Face</Text>
          <Text style={styles.cardLabel}>Canada</Text>
          <Text style={styles.cardDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
          <Text style={styles.cardFooter}>20 mins away</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
  },
  cardDescription: {
    color: '#000000',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1

  },
  cardFooter: {
    color: '#000000',
    fontSize: 12
  },
});
