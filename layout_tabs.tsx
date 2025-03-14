// layout_tabs.tsx
import { Tabs } from "expo-router";
import Ionicicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#ffd33d' }}>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="resources" options={{ title: 'Resources' }} />
            <Tabs.Screen name="survey" options={{ title: 'Survey' }} /> {/* Add Survey tab */}
        </Tabs>
    );
}

