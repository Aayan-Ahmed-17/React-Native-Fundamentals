import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    //Whole App
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.heroSection}></View>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    height: "10%",
    backgroundColor: "#000",
    width: "100%"
  },
  heroSection: {
    flex: 1,
    backgroundColor: "#00f"
  }
});