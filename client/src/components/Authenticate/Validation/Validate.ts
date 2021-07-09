export const validatePassword = (s: string): boolean => {
    if (s.length >= 6) return true;
    return false
}

export const validateEmail = (email: string): boolean => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}