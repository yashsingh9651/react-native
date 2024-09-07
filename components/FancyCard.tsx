import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardHeader}>Demo Image</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          reiciendis soluta omnis exercitationem cum aut iusto dolorem illo
          molestiae non labore molestias quo, beatae vitae vero distinctio vel
          dolores necessitatibus tenetur. Libero error cupiditate, cum illum
          odio cumque dolorum provident dolores nobis, quidem illo optio quasi
          esse ipsum ut adipisci!
        </Text>
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
    backgroundColor: '#cad5e2',
    elevation: 4,
  },
  card: {
    padding: 8,
  },
  cardImage: {
    height: 180,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: '800',
  },
});
