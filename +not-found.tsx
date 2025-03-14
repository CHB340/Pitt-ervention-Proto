import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            {/* Updated the href to a valid relative path */}
            <Link href="../" style={styles.button}>
                Go back to Home Screen
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
