const keyStorage = '@horo_invest'

export const saveTokenLocalStorage = (token: string) => (
    localStorage.setItem(keyStorage, token)
)

export const getTokenLocalStorage = (): string | null => (
    localStorage.getItem(keyStorage)
)

export const removeTokenLocalStorage = () => (
    localStorage.removeItem(keyStorage)
)

export const cleanLocalStorage = () => (
    localStorage.clear()
)

const hasToken = () => (
    getTokenLocalStorage() !== null
)

export const isAuthenticated = () => (
    hasToken()
)