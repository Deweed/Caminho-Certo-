import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Linking from 'expo-linking';
import {Button} from 'react-native-paper';

export default function SosView({ navigation, route }) {
  const contato = route.params;

  navigation.setOptions({ title: contato.nome });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: -19.90583347318951,
          longitude: -43.96356440815181,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{
            latitude: -19.90583347318951,
            longitude: -43.96356440815181,
          }}></Marker>
      </MapView>
      <View style={styles.actions}>
        <Button 
          onPress={() => Linking.openURL(`tel:${contato.telefone}`)} 
          mode="contained"
          style={{
            width:'60%', 
            backgroundColor: 'darkred',
            padding: 5,
          }}
          >DISCAR</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: '100%',
    height: '70%',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    paddingBottom: 15,
    top: -40,
  }
});
