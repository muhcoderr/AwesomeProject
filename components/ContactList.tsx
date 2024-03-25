import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "ABE",
      status: "Computer Engineer",
      imageUrl:
        "https://res.cloudinary.com/muhcoder/image/upload/v1710785303/samples/bike.jpg",
    },
    {
      uid: 2,
      name: "ABE",
      status: "Computer Engineer",
      imageUrl:
        "https://res.cloudinary.com/muhcoder/image/upload/v1710785303/samples/bike.jpg",
    },
    {
      uid: 3,
      name: "ABE",
      status: "Computer Engineer",
      imageUrl:
        "https://res.cloudinary.com/muhcoder/image/upload/v1710785303/samples/bike.jpg",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.cardImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {},
  userCard: {},
  cardImage: {
    height: 60,
    width:60,
    borderRadius:60/2,
    // marginBottom: 8,
    // borderTopLeftRadius: 6,
    // borderTopRightRadius: 6,
  },
  userName: {},
  userStatus: {},
});
