import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    Dashboard,
    ListApplication,
    InfoApplication,
    FormCreateApplication,
    Result,
    Error,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen
                        name="ResetPasswordScreen"
                        component={ResetPasswordScreen}
                    />
                    <Stack.Screen name="ListApplication" component={ListApplication} />
                    <Stack.Screen name="InfoApplication" component={InfoApplication} />
                    <Stack.Screen name="FormCreateApplication" component={FormCreateApplication} />
                    <Stack.Screen name="Result" component={Result} />
                    <Stack.Screen name="Error" component={Error} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
