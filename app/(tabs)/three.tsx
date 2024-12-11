import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth"; 
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

const items = [
  { id: "1", title: "Cotton Romper", price: "$10", image: require("../../assets/images/item1.jpeg") },
  { id: "2", title: "Green Women's Blazer", price: "$20", image: require("../../assets/images/item2.jpeg") },
  { id: "3", title: "Black Men's Blazer", price: "$30", image: require("../../assets/images/item3.jpeg") },
  { id: "4", title: "Yellow Fashion Sunglasses", price: "$40", image: require("../../assets/images/item4.jpeg") },
  { id: "5", title: "Blue News Cap", price: "$50", image: require("../../assets/images/item5.jpeg") },
  { id: "6", title: "Denim Button-Up", price: "$60", image: require("../../assets/images/item6.jpeg") },
];

export default function Three() {
    const router = useRouter();
    const handleLogout = async () => {
        try {
          await signOut(auth);
          console.log("out");
          router.replace("/(tabs)/two");
        } catch (error) {
          console.log(error);
          alert("Error logging out: " + error.message);
        }
      };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shop</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
            <Button onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.buttonText}>
                   Logout 
                </Text>
                
                </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    justifyContent: "space-between",
  },
  box: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  price: {
    fontSize: 16,
    color: "#FFD700",
    marginTop: 5,
  },
  logoutButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#590202",
    color: "#fff",
    
  },
  buttonText:{
    color: "white"
  },
});
