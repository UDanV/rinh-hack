import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from "../components/Button";

export default function Dashboard({ navigation }) {
    return (
        <Background>
            <Logo />
            <Header>Ошибка!</Header>
            <Paragraph>
                Вы не смогли войти в аккаунт. Повторите попытку
            </Paragraph>
            <Button
                mode="contained"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'StartScreen' }],
                    })
                }
            >
                Вернуться на главную
            </Button>
        </Background>
    )
}
