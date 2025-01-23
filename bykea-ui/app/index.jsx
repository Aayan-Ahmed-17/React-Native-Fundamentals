import { StatusBar, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Index() {
  return (
    //Whole App
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="bars" size={34} color="rgba(3, 172, 50, 1)"/>
        <Text style={{ fontSize: 34, fontWeight: "700", color:"#03ac32"}}>BYKEA</Text>
        <FontAwesome name="phone" size={34} color="rgba(3, 172, 50, 1)" />
      </View>

      {/* Main Section */}
      <View style={styles.main}></View>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
    margin: 0,
    padding: 0,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    paddingHorizontal: 20,
    height: "8%",
    boxShadow: "0px 3px 20px 3px rgba(0, 0, 0, 0.54) ",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroSection: {
    flex: 1,
    backgroundColor: "#00f",
  },
});
