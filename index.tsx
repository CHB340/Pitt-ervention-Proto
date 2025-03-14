
import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from 'expo-router';

export default function Index() {
    const navigation = useNavigation();

    // Use TypeScript type definitions for better type checking
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Pitt-Tervention</Text>
            <Button
                title="Take the Survey"
                onPress={() => navigation.navigate('survey' as never)} // Explicitly cast to avoid typing error
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});
