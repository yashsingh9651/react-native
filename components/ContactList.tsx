import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Active',
      imageUrl:
        'https://images.pexels.com/photos/26903015/pexels-photo-26903015/free-photo-of-portrait-of-woman-in-dress-with-eyes-closed-on-seashore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'Inactive',
      imageUrl:
        'https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      uid: 3,
      name: 'Bob Johnson',
      status: 'Active',
      imageUrl:
        'https://images.pexels.com/photos/17798012/pexels-photo-17798012/free-photo-of-woman-in-floral-sundress-and-bucket-hat-standing-on-rock-by-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View style={styles.contact} key={contact.uid}>
            <Image
              style={styles.contactImage}
              source={{uri: contact.imageUrl}}
            />
            <View>
                <Text >{contact.name}</Text>
                <Text>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  container: {padding: 8},
  contact: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 2,
    backgroundColor:'green',
    padding:8,
    borderRadius:6
  },
  contactImage: {height: 60, width: 60, borderRadius: 30},
});
