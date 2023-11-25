import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Text} from '@rneui/themed';
import Header from "../components/Header";


type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Header>Ваши заявки</Header>
                    <Card containerStyle={{marginTop: 15}}>
                        <Text style={styles.fonts} h1>
                            h1 Heading
                        </Text>
                        <Text style={styles.fonts} h2>
                            h2 Heading
                        </Text>
                        <Text style={styles.fonts} h3>
                            h3 Heading
                        </Text>
                        <Text style={styles.fonts} h4>
                            h4 Heading
                        </Text>
                        <Text style={styles.fonts}>Normal Text</Text>
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
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default Cards;
