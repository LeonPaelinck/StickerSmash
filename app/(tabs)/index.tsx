import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
        <View style={styles.container}>
      <Text style={styles.text}>Hello Luc!</Text>
      <Link href="/about" style={styles.button}>Go to about screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2244ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    color: '#914343ff',
  },
});