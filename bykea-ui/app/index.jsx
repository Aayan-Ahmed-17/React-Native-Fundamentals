import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Index() {
  return (
    //Whole App
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="bars" size={34} color="rgba(3, 172, 50, 1)" />
        <Text style={{ fontSize: 34, fontWeight: "700", color: "#03ac32" }}>
          BYKEA
        </Text>
        <FontAwesome name="phone" size={34} color="rgba(3, 172, 50, 1)" />
      </View>

      {/* Main Section */}
      <View style={styles.main}>
        <View style={styles.hero_sec}>
          <Image
            style={styles.bannerImg}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s",
            }}
          />
        </View>
        <View style={[styles.sec_links, styles.shadowBox]}>
          <View
            style={[
              styles.sec_links_items,
              { borderEndWidth: 1, borderColor: "#999" },
            ]}
          >
            <FontAwesome6 name="message" size={30} color="#999" />
          </View>
          <View style={styles.sec_links_items}>
            <FontAwesome6 name="wallet" size={30} color="#999" />
            <Text style={{ marginLeft: -50, color: "#999", fontSize: 16 }}>
              Rs. 20
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.card_container}>
            <View style={styles.card_items}>
              <Image
                style={styles.card_items_images}
                source={{
                  uri: "https://www.shutterstock.com/image-vector/male-food-delivery-man-green-600w-2496300429.jpg",
                }}
              />
            </View>
            <View style={styles.card_items}>
              <Image
                style={styles.card_items_images}
                source={{
                  uri: "https://www.shutterstock.com/image-vector/male-food-delivery-man-green-600w-2496300429.jpg",
                }}
              />
            </View>
            <View style={styles.card_items}>
              <Image
                style={styles.card_items_images}
                source={{
                  uri: "https://www.shutterstock.com/image-vector/male-food-delivery-man-green-600w-2496300429.jpg",
                }}
              />
            </View>
            <View style={styles.card_items}>
              <Image
                style={styles.card_items_images}
                source={{
                  uri: "https://www.shutterstock.com/image-vector/male-food-delivery-man-green-600w-2496300429.jpg",
                }}
              />
            </View>
            <View style={styles.card_items}>
              <Image
                style={styles.card_items_images}
                source={{
                  uri: "https://www.shutterstock.com/image-vector/male-food-delivery-man-green-600w-2496300429.jpg",
                }}
              />
            </View>
            <View style={styles.card_items}>
              <Image
                style={styles.card_items_images}
                source={{
                  uri: "https://www.shutterstock.com/image-vector/male-food-delivery-man-green-600w-2496300429.jpg",
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  main: {
    flex: 1,
    gap: 20,
  },
  hero_sec: {
    height: "36%",
    backgroundColor: "#00000033",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: 18,
    paddingBottom: 40,
  },
  bannerImg: {
    flex: 1,
    width: "100%",
    borderRadius: 15,
  },
  sec_links: {
    width: "88%",
    height: "8%",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 24,
    position: "absolute",
    top: "32%",
    left: "5%",
    zIndex: 1,
    flexDirection: "row",
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  sec_links_items: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  card_container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card_items: {
    width: 185,
    height: 130,
    backgroundColor: "#333",
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card_items_images: { 
    width: "100%", 
    height: "100%",
    // aspectRatio: 180 / 100,
    objectFit: "cover"
  },
});
