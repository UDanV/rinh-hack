import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";
import TextInput from "../components/TextInput";
import { Title } from "react-native-paper";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function FormCreateApplication({ navigation }) {
  const [month, setMonth] = useState({ value: "", error: "" });
  const [age, setAge] = useState({ value: "", error: "" });
  const [occupation, setOccupation] = useState({ value: "", error: "" });
  const [annual_income, setAnnual_income] = useState({ value: "", error: "" });
  const [monthly_inhand_salary, setMonthly_inhand_salary] = useState({
    value: "",
    error: "",
  });
  const [num_bank_accounts, setNum_bank_accounts] = useState({
    value: "",
    error: "",
  });
  const [num_credit_card, setNum_credit_card] = useState({
    value: "",
    error: "",
  });
  const [num_of_loan, setNum_of_loan] = useState({ value: "", error: "" });
  const [num_credit_inquiries, setNum_credit_inquiries] = useState({
    value: "",
    error: "",
  });
  const [credit_history_age, setCredit_history_age] = useState({
    value: "",
    error: "",
  });
  const [amount_invested_monthly, setAmount_invested_monthly] = useState({
    value: "",
    error: "",
  });
  const [payment_behaviour, setPayment_behaviour] = useState({
    value: "",
    error: "",
  });
  const [monthly_balance, setMonthly_balance] = useState({
    value: "",
    error: "",
  });

  // const onLoginPressed = () => {
  //     const mainError = mainValidator()
  //     if (mainError) {
  //         setMonth({...month, error: mainError})
  //         setAge({...age, error: mainError})
  //         setOccupation({...occupation, error: mainError})
  //         setAnnual_income({...annual_income, error: mainError})
  //         setMonthly_inhand_salary({...monthly_inhand_salary, error: mainError})
  //         setNum_bank_accounts({...num_bank_accounts, error: mainError})
  //         setNum_credit_card({...num_credit_card, error: mainError})
  //         setNum_of_loan({...num_of_loan, error: mainError})
  //         setNum_credit_inquiries({...num_credit_inquiries, error: mainError})
  //         setCredit_history_age({...credit_history_age, error: mainError})
  //         setAmount_invested_monthly({...amount_invested_monthly, error: mainError})
  //         setPayment_behaviour({...payment_behaviour, error: mainError})
  //         setMonthly_balance({...monthly_balance, error: mainError})
  //         return
  //     }

  async function GetRequest(token) {
    try {
      // Попытка входа
      const GetResponse = await axios.post(
        "http://localhost:8000/credit/processing_request",
        {
          month: [Number(month.value)],
          age: [Number(age.value)],
          occupation: [occupation.value],
          annual_income: [Number(annual_income.value)],
          monthly_inhand_salary: [Number(monthly_inhand_salary.value)],
          num_bank_accounts: [Number(num_bank_accounts.value)],
          num_credit_card: [Number(num_credit_card.value)],
          num_of_loan: [Number(num_of_loan.value)],
          num_credit_inquiries: [Number(num_credit_inquiries.value)],
          credit_history_age: [Number(credit_history_age.value)],
          amount_invested_monthly: [Number(amount_invested_monthly.value)],
          payment_behaviour: [payment_behaviour.value],
          monthly_balance: [Number(monthly_balance.value)],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(GetResponse.data);

      navigation.navigate("Result", GetResponse.data);
    } catch (error) {
      console.error("Ошибка:", error);
      throw error; // Вы можете обработать ошибку здесь или прокинуть её дальше, если необходимо
    }
  }

  const getToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      return userToken;
    } catch (e) {
      // обработка возможных ошибок
      console.log("Loading token failed", e);
    }
  };

  function onMakeRequestPress() {
    getToken()
      .then((userToken) => {
        GetRequest(userToken);
      })
      .catch((e) => {
        console.log("Unable to retrieve the token", e);
      });
  }

  return (
    <>
      <ScrollView>
        <BackButton goBack={navigation.goBack} />
        <Card containerStyle={{ marginTop: 35, borderRadius: 15 }}>
          <Title style={styles.titleMain}>Создание заявки</Title>
          <TextInput
            label="Месяц рассмотрения кредитной заявки"
            returnKeyType="next"
            value={month.value}
            onChangeText={(text) => setMonth({ value: text, error: "" })}
            error={!!month.error}
            errorText={month.error}
          />
          <TextInput
            label="Возраст заёмщика"
            returnKeyType="next"
            value={age.value}
            onChangeText={(text) => setAge({ value: text, error: "" })}
            error={!!age.error}
            errorText={age.error}
          />
          <TextInput
            label="Должность заёмщика"
            returnKeyType="next"
            value={occupation.value}
            onChangeText={(text) => setOccupation({ value: text, error: "" })}
            error={!!occupation.error}
            errorText={occupation.error}
          />
          <TextInput
            label="Годовой доход заёмщика"
            returnKeyType="next"
            value={annual_income.value}
            onChangeText={(text) =>
              setAnnual_income({ value: text, error: "" })
            }
            error={!!annual_income.error}
            errorText={annual_income.error}
          />
          <TextInput
            label="Ежемесячный доход заёмщика (после уплаты налогов)"
            returnKeyType="next"
            value={monthly_inhand_salary.value}
            onChangeText={(text) =>
              setMonthly_inhand_salary({ value: text, error: "" })
            }
            error={!!monthly_inhand_salary.error}
            errorText={monthly_inhand_salary.error}
          />
          <TextInput
            label="Количество банковских счетов заёмщика"
            returnKeyType="next"
            value={num_bank_accounts.value}
            onChangeText={(text) =>
              setNum_bank_accounts({ value: text, error: "" })
            }
            error={!!num_bank_accounts.error}
            errorText={num_bank_accounts.error}
          />
          <TextInput
            label="Количество действующих кредитных карт у заёмщика"
            returnKeyType="next"
            value={num_credit_card.value}
            onChangeText={(text) =>
              setNum_credit_card({ value: text, error: "" })
            }
            error={!!num_credit_card.error}
            errorText={num_credit_card.error}
          />
          <TextInput
            label="Количество действующих кредитов у заёмщика"
            returnKeyType="next"
            value={num_of_loan.value}
            onChangeText={(text) => setNum_of_loan({ value: text, error: "" })}
            error={!!num_of_loan.error}
            errorText={num_of_loan.error}
          />
          <TextInput
            label="Количество запросов в бюро кредитных историй за последний месяц"
            returnKeyType="next"
            value={num_credit_inquiries.value}
            onChangeText={(text) =>
              setNum_credit_inquiries({ value: text, error: "" })
            }
            error={!!num_credit_inquiries.error}
            errorText={num_credit_inquiries.error}
          />
          <TextInput
            label="Возраст кредитной истории заёмщика (в месяцах)"
            returnKeyType="next"
            value={credit_history_age.value}
            onChangeText={(text) =>
              setCredit_history_age({ value: text, error: "" })
            }
            error={!!credit_history_age.error}
            errorText={credit_history_age.error}
          />
          <TextInput
            label="Сумма среднемесячных вложений заёмщика"
            returnKeyType="next"
            value={amount_invested_monthly.value}
            onChangeText={(text) =>
              setAmount_invested_monthly({ value: text, error: "" })
            }
            error={!!amount_invested_monthly.error}
            errorText={amount_invested_monthly.error}
          />
          <TextInput
            label="Потребительское поведение заёмщика"
            returnKeyType="next"
            value={payment_behaviour.value}
            onChangeText={(text) =>
              setPayment_behaviour({ value: text, error: "" })
            }
            error={!!payment_behaviour.error}
            errorText={payment_behaviour.error}
          />
          <TextInput
            label="Среднемесячный баланс заёмщика в банке"
            returnKeyType="next"
            value={monthly_balance.value}
            onChangeText={(text) =>
              setMonthly_balance({ value: text, error: "" })
            }
            error={!!monthly_balance.error}
            errorText={monthly_balance.error}
          />
        </Card>
        <Button
          mode="contained"
          onPress={onMakeRequestPress}
          // onPress={() => navigation.navigate('Result')}
        >
          Подать заявку
        </Button>
      </ScrollView>
    </>
  );
}
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
    fontWeight: "bold",
  },
  titleMain: {
    fontSize: 25,
    color: "#8BCBB6",
    textAlign: "center",
  },
});
