import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';

const HomeScreen = () => {
    const { t, locale, setLocale } = React.useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const languages = [
        { id: 'en', value: 'english', flag: '🇬🇧' },
        { id: 'gr', value: 'german', flag: '🇩🇪' },
        { id: 'it', value: 'italian', flag: '🇮🇹' },
        { id: 'tr', value: 'turkish', flag: '🇹🇷' }
    ];

    const fruits = [
        { id: 1, icon: '🍇', value: 'grapes', background: 'rgba(107, 67, 139, 0.2)' },
        { id: 2, icon: '🍉', value: 'watermelon', background: 'rgba(248, 49, 47, 0.2)' },
        { id: 3, icon: '🍐', value: 'pear', background: 'rgba(195, 239, 60, 0.2)' },
        { id: 4, icon: '🍍', value: 'pineapple', background: 'rgba(243, 173, 96, 0.2)' },
        { id: 5, icon: '🍓', value: 'strawberry', background: 'rgba(248, 49, 47, 0.2)' },
        { id: 6, icon: '🍑', value: 'peach', background: 'rgba(255, 130, 45, 0.2)' },
        { id: 7, icon: '🥝', value: 'kiwi', background: 'rgba(69, 224, 118, 0.2)' },
        { id: 8, icon: '🍒', value: 'cherries', background: 'rgba(246, 50, 47, 0.2)' }
    ];

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const selectLanguage = (id) => {
        setLocale(id);
        setShowDropdown(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{t('home')}</Text>
                <TouchableOpacity onPress={toggleDropdown}>
                    <FontAwesome5 name='cog' size={24} color='black' />
                </TouchableOpacity>
            </View>

            {showDropdown && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={languages}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => selectLanguage(item.id)}
                            >
                                <Text style={styles.flag}>{item.flag}</Text>
                                <Text style={styles.dropdownText}>{t(item.value)}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            <Text style={styles.subHeaderText}>{t('fruits')}</Text>

            {fruits.map(item => (
                <View
                    key={item.id}
                    style={[styles.fruitContainer, { backgroundColor: item.background }]}
                >
                    <Text style={styles.fruitIcon}>{item.icon}</Text>
                    <Text style={styles.fruitText}>{t(item.value)}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 32,
        fontWeight: '800',
    },
    subHeaderText: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 16,
    },
    fruitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderWidth: 2,
        marginTop: 8,
        borderRadius: 10,
    },
    fruitIcon: {
        fontSize: 20,
    },
    fruitText: {
        marginLeft: 8,
        fontWeight: '500',
    },
    dropdown: {
        position: 'absolute',
        top: 60,
        right: 16,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        zIndex: 1000,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    dropdownText: {
        marginLeft: 8,
    },
    flag: {
        fontSize: 24,
    },
});

export default HomeScreen;
