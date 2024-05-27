import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/types";

type DestinationsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Destinations"
>;

type Props = {
  navigation: DestinationsScreenNavigationProp;
};

type Destination = {
  id: string;
  name: string;
};

const DestinationsScreen: React.FC<Props> = () => {
  const destinations = [
    { id: "1", name: "New York" },
    { id: "2", name: "Paris" },
    { id: "3", name: "Tokyo" },
    { id: "4", name: "London" },
  ];

  const renderDestination = ({ item }: { item: Destination }) => (
    <TouchableOpacity style={styles.destinationItem} onPress={() => null}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        renderItem={renderDestination}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  destinationItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default DestinationsScreen;
