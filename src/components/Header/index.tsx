import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconBtn}>
                <Ionicons
                    size={32}
                    color='white'
                    name='return-up-back-outline'
                />
            </TouchableOpacity>
            <Text style={styles.text}>Taskify</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 46,
    },
    text: {
        color: 'white',
        fontSize: 32,
        marginRight: '34%'
    },
    iconBtn: {
        flex: 1
    }
});
