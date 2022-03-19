import { utilService } from "./util.service.js";
import axios from 'axios'

const USER_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/user/'
    : '//localhost:3030/api/user/';

const AUTH_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/auth/'
    : '//localhost:3030/api/auth/';

export const userService = {
    query,
    getById,
    remove,
    login,
    signup,
    logout,
    getLoggedinUser,
}

async function query(filterBy) {
    try {
        const res = axios.get(USER_URL, { params: filterBy })
        return res.data
    } catch (err) {
        console.log('err in userService in query:', err);
    }
}

async function getById(id) {
    try {
        const res = await axios.get(USER_URL + id)
        return res.data
    } catch (err) {
        console.log('err in userService in getById:', err);
    }
}

async function remove(userId) {
    return await axios.delete(USER_URL + userId)
}

async function login(username, password) {
    try {
        const res = await axios.post(AUTH_URL + 'login', { username, password })
        const user = await res.data
        utilService.saveToStorage('loggedinUser', user)
        return user
    } catch (err) {
        console.log('err in userService in login:', err);
    }
}

async function signup(fullname, username, password) {
    try {
        const res = await axios.post(AUTH_URL + 'signup', { fullname, username, password })
        const user = await res.data
        utilService.saveToStorage('loggedinUser', user)
        return user
    } catch (err) {
        console.log('err in userService in signup:', err);
    }
}

async function logout() {
    try {
       await axios.post(AUTH_URL + 'logout')
       utilService.removeFromStorage('loggedinUser')
    } catch (err) {
        console.log('err in userService in logout:', err);
    }
}

function getLoggedinUser() {
    return utilService.loadFromStorage('loggedinUser')
}