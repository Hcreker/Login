import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'aluno' && password === 'Senai1234') {
            navigation.navigate('Home');
        } else if (username === 'root' && password === 'root') {
            navigation.navigate('AdminHome');
        } else {
            setErrorMessage('Usuário ou senha incorretos.');
            setTimeout(() => setErrorMessage(''), 2000);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Cadastro');
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={styles.container}>
            {/* Balão estilizado */}
            <View style={styles.bubbleContainer}>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Logo</Text>
                    <Text style={styles.bubbleText}>Daora</Text>
                </View>
            </View>

            {/* Título */}
            <Text style={styles.title}>Login Daora!</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F3EF', 
    },
    bubbleContainer: {
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 30,
        left:55,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    bubble: {
        backgroundColor: '#A88B73', 
        borderWidth: 2,
        borderColor: '#6D4C41', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        elevation: 5,
    },
    bubbleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#4E342E', 
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#BCAAA4', 
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: '#8D6E63', 
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#6D4C41',
        textAlign: 'center',
        marginTop: 10,
    },
    error: {
        color: '#D32F2F', 
        textAlign: 'center',
        marginTop: 10,
    },
});

