import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen(){
      return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
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
});