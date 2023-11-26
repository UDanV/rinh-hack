import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        async function registerAndLogin(email, password, name) {
            try {
              // Попытка регистрации
              const registerResponse = await axios.post('http://localhost:8000/auth/register', {
                email: email.value,
                password: password.value,
                first_name: name.value,
                last_name: "default"
              });
              
            //   console.log('Регистрация:', registerResponse.data);
              
              // Попытка входа после успешной регистрации
              const loginResponse = await axios.post('http://localhost:8000/auth/jwt/login', {
                username: email.value,
                password: password.value
              }, 
              { headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                }});
              
            //   console.log('Вход выполнен:', loginResponse.data);
              
              // Возвращаем данные из второго запроса (входа), если все успешно
              return loginResponse.data;
              
            } catch (error) {
              console.error('Ошибка:', error);
              throw error; // Вы можете обработать ошибку здесь или прокинуть её дальше, если необходимо
            }
          }

          const storeToken = async (userToken) => {
            try {
              await AsyncStorage.setItem('userToken', userToken);
            //   console.log(userToken);
            } catch (e) {
              // обработка возможных ошибок
              console.log('Saving token failed', e);
            }
          };

          // Использование функции
          registerAndLogin(email, password, name)
            .then((data) => {
                storeToken(data.access_token).catch((e) => {
                    console.log('There was an error storing the token', e);
                  });    
            })
            .catch((error) => {
              // Обработать ошибку
            });
          

        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        })
    }

    // {
    //     "email": "user@example.com",
    //     "password": "string",
    //     "is_active": true,
    //     "is_superuser": false,
    //     "is_verified": false,
    //     "first_name": "string",
    //     "last_name": "string"
    //   }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Добро пожаловать.</Header>
            <TextInput
                label="Имя"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />
            <TextInput
                label="E-mail"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Пароль"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onSignUpPressed}
                style={{ marginTop: 24 }}
            >
                Продолжить
            </Button>
            <View style={styles.row}>
                <Text>У меня уже есть аккаунт</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
                    <Text style={styles.link}>Войти</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
