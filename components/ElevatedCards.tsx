import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>more...</Text>
        </View>
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
  container: {
    padding: 8,
  },
  elevatedCard: {
    backgroundColor: '#cad5e2',
    elevation:4,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
});
