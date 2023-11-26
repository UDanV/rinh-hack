export function passwordValidator(password) {
    if (!password) return "Заполните это поле"
    if (password.length < 8) return 'Пароль должен состоять минимум из 8-ми символов'
    return ''
}
