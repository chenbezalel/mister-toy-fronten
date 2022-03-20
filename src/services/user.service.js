import { utilService } from "./util.service.js";
import axios from 'axios'
import { httpService } from "./http.service.js";

// const USER_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/user/'
//     : '//localhost:3030/api/user/';

// const AUTH_URL = (process.env.NODE_ENV !== 'development')
//     ? '/api/auth/'
//     : '//localhost:3030/api/auth/';
const USER_URL = 'user/'
const AUTH_URL = 'auth/'

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
        // const res = axios.get(USER_URL, { params: filterBy })
        // return res.data
        return httpService.get(USER_URL, filterBy)
    } catch (err) {
        console.log('err in userService in query:', err);
    }
}

async function getById(id) {
    try {
        // const res = await axios.get(USER_URL + id)
        // return res.data
        return httpService.get(USER_URL + id)
    } catch (err) {
        console.log('err in userService in getById:', err);
    }
}

async function remove(userId) {
    return httpService.delete(USER_URL + userId)
    // return await axios.delete(USER_URL + userId)
}

async function login(username, password) {
    try {
        // const res = await axios.post(AUTH_URL + 'login', { username, password })
        // const user = await res.data
        const user = await httpService.post(AUTH_URL + 'login', { username, password })
        utilService.saveToStorage('loggedinUser', user)

        return user
    } catch (err) {
        console.log('err in userService in login:', err);
    }
}

async function signup(fullname, username, password) {
    try {
        // const res = await axios.post(AUTH_URL + 'signup', { fullname, username, password })
        // const user = await res.data
        const user = await httpService.post(AUTH_URL + 'signup', {fullname, username, password })
        utilService.saveToStorage('loggedinUser', user)
        return user
    } catch (err) {
        console.log('err in userService in signup:', err);
    }
}

async function logout() {
    try {
        // await axios.post(AUTH_URL + 'logout')
       await httpService.post(AUTH_URL + 'logout')
       utilService.removeFromStorage('loggedinUser')
    } catch (err) {
        console.log('err in userService in logout:', err);
    }
}

function getLoggedinUser() {
    return utilService.loadFromStorage('loggedinUser')
}