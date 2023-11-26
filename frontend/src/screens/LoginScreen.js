import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Alert} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        async function Login(email, password) {
            try {
              // Попытка входа 
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
          Login(email, password)
            .then((data) => {
                  storeToken(data.access_token).catch((e) => {
                    console.log('There was an error storing the token', e);
                  });            
            })
            .catch((error) => {
              // Обработать ошибку
            });
        navigation.navigate('Dashboard')
    }
    
    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
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
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    <Text style={styles.forgot}>Забыли свой пароль?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={onLoginPressed}>
                Войти
            </Button>
            <View style={styles.row}>
                <Text>У Вас еще нет аккаунта?</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Зарегистрироваться</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
