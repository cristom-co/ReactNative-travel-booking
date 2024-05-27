import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types';

type DestinationDetailsScreenRouteProp = RouteProp<RootStackParamList, 'DestinationDetails'>;

type Props = {
  route: DestinationDetailsScreenRouteProp;
};

const DestinationDetailsScreen: React.FC<Props> = () => {
  const destinationId = Math.random();

  return (
    <View style={styles.container}>
      <Text>Destination Details Screen</Text>
      <Text>Destination ID: {destinationId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DestinationDetailsScreen;
