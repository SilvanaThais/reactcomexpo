import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Nome({navigation}) {
    const queroir = () => {
        navigation.navigate("Imagem");
    } 
    return (
      <View style={styles.container}>
        <Text>Silvana Pessoa</Text>
        <StatusBar style="auto" />
        <Button 
            title="Quero ir!"
            onPress={() => queroir()}
        />
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
  