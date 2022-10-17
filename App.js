import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import img_logo from "./assets/Trendit-logos_black.png"

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={{
          width: 500,
          height: 500,
          resizeMode: 'contain'
        }}
        source={img_logo}
      />

      <Text>Comming Soon..</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
