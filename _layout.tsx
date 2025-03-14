import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="tabs" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="resources" options={{ title: 'Resources' }} />
            <Stack.Screen name="survey" options={{ title: 'Survey' }} />

        </Stack>
    );
}
