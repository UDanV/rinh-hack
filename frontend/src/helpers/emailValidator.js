export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Заполните это поле"
    if (!re.test(email)) return 'Введите верную почту'
    return ''
}
