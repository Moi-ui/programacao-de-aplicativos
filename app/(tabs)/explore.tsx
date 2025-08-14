import { StyleSheet, Text, View } from 'react-native'; // Corrigido: Text e View importados corretamente

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Oi, gatinha!</Text> {"Que lindo"}
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});