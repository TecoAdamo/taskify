import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <View style={styles.content}>

            </View>
            <StatusBar style='light' />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#082f49',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
