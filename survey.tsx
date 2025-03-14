import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Switch, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { Picker } from '@react-native-picker/picker';

export default function SurveyScreen() {
    const [ACTC, setACTC] = useState(false);
    const [peerTutoring, setPeerTutoring] = useState(false);
    const [exercise, setExercise] = useState('medium');
    const [meds, setMeds] = useState('yes');

    useEffect(() => {
        // Schedule a daily reminder notification using Date object
        const scheduleNotification = async () => {
            const currentDate = new Date();
            // Set the time to 9:00 AM the next day
            const notificationDate = new Date(currentDate);
            notificationDate.setHours(9);
            notificationDate.setMinutes(0);
            notificationDate.setSeconds(0);

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Reminder: Take your Wellness Survey!",
                    body: "It's time to fill out your daily wellness survey. Tap to complete.",
                },
                trigger: {
                    // Set the trigger time as the future date we created
                    date: notificationDate,
                    repeats: true, // Make it repeat daily
                },
            });
        };

        scheduleNotification();
    }, []);

    const handleSubmitSurvey = async () => {
        const surveyData = {
            ACTC,
            peerTutoring,
            exercise,
            meds,
        };

        // Save survey data in AsyncStorage
        await AsyncStorage.setItem('surveyData', JSON.stringify(surveyData));
        alert('Survey Submitted!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wellness Survey</Text>

            <Text style={styles.text}>Did you go to ACTC?</Text>
            <Switch value={ACTC} onValueChange={setACTC} />

            <Text style={styles.text}>Did you use Peer Tutoring?</Text>
            <Switch value={peerTutoring} onValueChange={setPeerTutoring} />

            <Text style={styles.text}>Exercise Level</Text>
            <Picker selectedValue={exercise} onValueChange={setExercise}>
                <Picker.Item label="Low" value="low" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="High" value="high" />
            </Picker>

            <Text style={styles.text}>Are you taking Medication?</Text>
            <Picker selectedValue={meds} onValueChange={setMeds}>
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
                <Picker.Item label="N/A" value="n/a" />
            </Picker>

            <Button title="Submit Survey" onPress={handleSubmitSurvey} />
        </View>
    );
}


