import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducers"
const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const getUser = async (login) => {
        setLoading()
        const response = await fetch(`https://api.github.com/users/${login}`)
        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }
    const searchUser = async (text) => {
        setLoading()
        const prams = new URLSearchParams({
            q: text,
        })
        const response = await fetch(`https://api.github.com/search/users?${prams}`)
        const { items } = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    const clearUser = () => dispatch({ type: 'CLEAR_USERS' })
    const getUserRepos = async (login) => {
        setLoading()
        const prams = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        })
        const response = await fetch(`https://api.github.com/users/${login}/repos?${prams}`)
        const data = await response.json()
        dispatch({
            type: 'GET_REPOS',
            payload: data,
        })
    }
    return <GithubContext.Provider value={
        {
            users: state.users,
            loading: state.loading,
            user: state.user,
            repos: state.repos,
            searchUser,
            clearUser,
            getUser,
            getUserRepos,
        }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext