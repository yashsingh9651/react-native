import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.elevatedCard}>
        <Text style={styles.headerText}>What do you want to do today?</Text>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/26890445/pexels-photo-26890445/free-photo-of-penguins-on-a-rocky-slope.jpeg',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={5}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            reiciendis, quaerat dolorum sequi corrupti eum exercitationem, quasi
            aspernatur sit laboriosam vitae. Illo, quasi doloribus! Iste
            voluptas temporibus eius soluta aliquid! Magni explicabo rem quis
            ducimus sint harum odit, aperiam nisi. Eaque quis dolorum hic veniam
            ex tempore dolore! Officiis, in.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://yashks.me')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://yashks.me')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    elevation: 4,
    borderRadius: 4,
    margin: 8,
  },
  cardImage: {height: 200},
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 4,
  },
  bodyContainer: {padding: 8},
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
