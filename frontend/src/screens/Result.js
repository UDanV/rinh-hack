import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from "../components/Button"
import {Card} from '@rneui/themed';
import Header from "../components/Header";
import AcceptedImg from "../components/AcceptedImg";


export default function ListApplication({ navigation }) {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Header>Поздравляем!</Header>
                    <Card containerStyle={{marginTop: 15, borderRadius: 15}}>
                        <View style={{margin: "auto"}}>
                            <AcceptedImg />
                        </View>
                    </Card>
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('ListApplication')}
                    >
                        Вернуться на главную страницу
                    </Button>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
