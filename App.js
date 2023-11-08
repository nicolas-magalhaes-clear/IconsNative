import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      
    <FontAwesome name='home' size={35} color='#11118C'/>
    <FontAwesome name='user' size={25} color='#54a300'/>

    <TouchableOpacity style={styles.btnYoutube}>
      <FontAwesome name='youtube' size={25} color='#fff'/>
      <Text style={styles.btnText}>Acessar canal</Text>
    </TouchableOpacity>

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
  btnYoutube: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    gap: 4
  },
  btnText: {
    color: 'white',
  }
});
