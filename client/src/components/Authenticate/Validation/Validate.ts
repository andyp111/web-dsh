export const validatePassword = (s: string): boolean => {
    if (s.length >= 6) return true;
    return false
}