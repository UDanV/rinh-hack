import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from "../components/Button"
import {Card, Text} from '@rneui/themed';
import Header from "../components/Header";
import AcceptedImg from "../components/AcceptedImg";
import NotAcceptedImg from "../components/NotAcceptedImg";


export default function ListApplication({ navigation }) {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Header>Ваши заявки</Header>
                    <Card containerStyle={{marginTop: 15, borderRadius: 15}}>
                        <View style={{margin: "auto"}}>
                            <AcceptedImg />
                        <Text style={{textAlign: "center"}}>
                            Дата: 21.12.2023
                        </Text>
                        <Text style={{textAlign: "center"}}>
                            Статус: Одобрена
                        </Text>
                        </View>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('InfoApplication')}
                        >
                            Подробнее
                        </Button>
                    </Card>
                    <Card containerStyle={{marginTop: 15, borderRadius: 15}}>
                        <View style={{margin: "auto"}}>
                            <NotAcceptedImg />
                            <Text style={{textAlign: "center"}}>
                                Дата: 21.12.2023
                            </Text>
                            <Text style={{textAlign: "center"}}>
                                Статус: Отклонена
                            </Text>
                        </View>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('InfoApplication')}
                        >
                            Подробнее
                        </Button>
                    </Card>
                    <Button
                        mode="outlined"
                        onPress={() => navigation.navigate('FormCreateApplication')}
                    >
                        Создать заявку
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
