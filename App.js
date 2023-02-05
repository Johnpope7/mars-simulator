import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.boldText}>
        Mars
      </Text>
    </View>
    <Text style={styles.paragraph}>
    Mars is the fourth planet from the Sun. Here, we will be reviewing some of its most popular attributes and History.
    </Text>
    <View style={styles.header}>
          <Button
        title="Physical Characteristics"
        color="#f194ff"
        onPress={() => Alert.alert('New Page')}
      />
    <Text style={styles.boldText}>
    Physical Characteristics
    </Text>
    </View>
      <Text style={styles.paragraph}>
      Mars is approximately half the diameter of Earth, with a surface area only slightly less than the total area of Earth's dry land.Mars is less dense than Earth, having about 15% of Earth's volume and 11% of Earth's mass, resulting in about 38% of Earth's surface gravity. The red-orange appearance of the Martian surface is caused by iron(III) oxide, or rust. It can look like butterscotch; other common surface colors include golden, brown, tan, and greenish, depending on the minerals present.
    </Text>
        <View style={styles.header}>
              <Button
        title="History"
        color="#f194ff"
        onPress={() => Alert.alert('New Page')}
      />
    <Text style={styles.boldText}>
    History
    </Text>
    </View>
    <Text style={styles.paragraph}>
    Named after the Roman god of war, Since Mars can be seen with the naked eye, its difficult to pinpoint when it was first recognized by humans. But, its recognition as a planet has been known by the Egyptians and the ancient Sumerians alike for thousands of years.
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#ab5851',
    padding: 8,
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
  }
});
