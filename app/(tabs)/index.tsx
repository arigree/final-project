import { StyleSheet, ImageBackground } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/homeImg.jpeg')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Nocturne Threads</Text>
        <Link style={styles.button} href='/(tabs)/two'>Sign In</Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: '#260101',
    opacity: 0.5,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "5px",
    backgroundColor: "#590202",
    color: "#fff",
    padding: 50

  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button:{
    color: 'black',
    fontSize: 20,
    backgroundColor: "#D3D3D3",
    fontWeight: 'bold',
    marginTop: 5,
    padding: 10
  }
});
