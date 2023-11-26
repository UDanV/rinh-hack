import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, ListItem, Text} from '@rneui/themed';
import AcceptedImg from "../components/AcceptedImg";
import BackButton from "../components/BackButton";


export default function ListApplication({ navigation }) {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <BackButton goBack={navigation.goBack} />
                    <Card containerStyle={{marginTop: 35, borderRadius: 15}}>
                        <View style={{margin: "auto"}}>
                            <Text style={{textAlign: "center"}}>
                                Дата: 21.12.2023
                            </Text>
                            <Text style={{textAlign: "center"}}>
                                Статус: Одобрена
                            </Text>
                            <AcceptedImg />
                        </View>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Месяц рассмотрения заявки</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>3</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Возраст заёмщика</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>30</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Должность заёмщика</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>Медиа-Менеджер</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Годовой доход заёмщика (в долларах)</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>15.000</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Ежемесячный доход заёмщика</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>1.000</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Количество банковских счетов</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>8</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Количество действующих кредитных карт</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>7</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Количество действующих кредитов</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>3</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Количество запросов в бюро кредитных историй (за последний месяц)</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>9</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Возраст кредитной истории</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>182</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Сумма среднемесячных вложений заёмщика (в долларах)</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>29</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Потребительское поведение заёмщика</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>Много тратит, средняя цена чеков</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        <ListItem>
                            <ListItem.Content style={styles.listItem}>
                                <ListItem.Title style={styles.title}>Среднемесячный баланс заёмщика в банке</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}>411</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    </Card>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        backgroundColor: "#BABEB9",
        borderRadius: 15,
        padding: 12,
    },
    title: {
        fontSize: 12,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});
