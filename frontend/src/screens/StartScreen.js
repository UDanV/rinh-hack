import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <Logo />
            <Header>Привет!</Header>
            <Paragraph>
                Добро пожаловать в приложение для расчета Вашей кредитоспособности.
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
            >
                Войти
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                Зарегистрироваться
            </Button>
        </Background>
    )
}
