import {
  StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback,
  TouchableOpacity, TouchableHighlight, Button, Alert, Platform, StatusBar, Dimensions
} from 'react-native';
export default function App() {
  const handlePress = () => console.log('text');

  return (
    // <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor: '#fff',
      flex: 1 // 0.5
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 1,
      }} />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
});
