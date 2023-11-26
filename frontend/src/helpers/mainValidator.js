export function mainValidator(month, age, occupation, annual_income, monthly_inhand_salary, num_bank_accounts, num_credit_card, num_of_loan, num_credit_inquiries, credit_history_age, amount_invested_monthly, payment_behaviour, monthly_balance) {
    if (!month) return "Заполните это поле"
    if (!age) return "Заполните это поле"
    if (!occupation) return "Заполните это поле"
    if (!annual_income) return "Заполните это поле"
    if (!monthly_inhand_salary) return "Заполните это поле"
    if (!num_bank_accounts) return "Заполните это поле"
    if (!num_credit_card) return "Заполните это поле"
    if (!num_of_loan) return "Заполните это поле"
    if (!num_credit_inquiries) return "Заполните это поле"
    if (!credit_history_age) return "Заполните это поле"
    if (!amount_invested_monthly) return "Заполните это поле"
    if (!month) return "Заполните это поле"
    if (!payment_behaviour) return "Заполните это поле"
    if (!monthly_balance) return "Заполните это поле"
    return ''
}
