import { utilService } from "./util.service.js";
import axios from 'axios'

axios.defaults.withCredentials = true

const BASE_URL = (process.env.NODE_ENV !== 'development') 
? '/api/toy/' 
: '//localhost:3030/api/toy/';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

async function query(filterBy) {
    try{
        const res = await axios.get(BASE_URL, {params: filterBy})
        return res.data
    } catch (err){
        console.log('err in toyService in query:', err);
    }

    // return storageService.query(KEY)
  }
  
  async function getById(toyId) {
    try{
        const res = await axios.get(BASE_URL + toyId)
        return res.data
    } catch (err) {
        console.log('err in toyService in getById:', err);
    }
    // return storageService.get(KEY, toyId)
  }
  
  async function remove(toyId) {
    return await axios.delete(BASE_URL + toyId)
    // return storageService.remove(KEY, toyId)
  }
  
  async function save(toy) {
    if (toy._id) {
        try{
            const res = await axios.put(BASE_URL + toy._id, toy)
            return res.data
        } catch {
            console.log('err in toyService in edit:', err);
        }
        // return storageService.put(CAR_KEY, car)
    } else {
        try{
            const res = await axios.post(BASE_URL, toy)
            return res.data
        } catch {
            console.log('err in toyService in add:', err);
        }

        // return storageService.post(CAR_KEY, car)
    }

    // if (toy._id) return storageService.put(KEY, toy)
    // return storageService.post(KEY, toy)
  }
  
  function getEmptyToy() {
    return {
        // _id: '',
        name: '',
        price: '',
        labels: ["On wheels", "Battery Powered", "Baby"],
        // createdAt: Date.now(),
        inStock: true
    }
  }


function _createToys() {
    let toys = utilService.loadFromStorage(KEY)

    if (!toys || !toys.length) {
        const toys = [
            {
                "_id": "3793",
                "name": "dolor pulvinar",
                "price": 62,
                "labels": ["On wheels", "Battery Powered", "Baby"],
                "createdAt": "1993-08-24T23:04:37.281Z",
                "inStock": true
            },
            {
                "_id": "3794",
                "name": "fringilla suspendisse",
                "price": 30,
                "labels": ["Art", "Battery Powered", "Puzzle"],
                "createdAt": "1995-02-08T01:53:20.537Z",
                "inStock": false
            },
            {
                "_id": "3795",
                "name": "lacus sed",
                "price": 6,
                "labels": ["Doll", "Box game", "Art", "Baby", "Baby"],
                "createdAt": "1976-04-18T18:20:29.849Z",
                "inStock": true
            },
            {
                "_id": "3796",
                "name": "tortor odio",
                "price": 31,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1979-05-04T11:56:59.016Z",
                "inStock": false
            },
            {
                "_id": "3797",
                "name": "odio vitae",
                "price": 28,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1986-03-05T00:52:37.348Z",
                "inStock": true
            },
            {
                "_id": "3798",
                "name": "amet pulvinar",
                "price": 95,
                "labels": ["Doll", "Puzzle", "Outdoor", "Baby"],
                "createdAt": "1991-09-19T03:47:26.592Z",
                "inStock": true
            },
            {
                "_id": "3799",
                "name": "amet dolor",
                "price": 5,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1993-09-29T10:33:56.777Z",
                "inStock": true
            },
            {
                "_id": "3800",
                "name": "convallis massa",
                "price": 52,
                "labels": ["Box game", "Art", "Battery Powered", "Baby"],
                "createdAt": "1989-02-07T16:21:03.383Z",
                "inStock": true
            },
            {
                "_id": "3801",
                "name": "eget magna",
                "price": 37,
                "labels": ["Puzzle", "Outdoor", "Box game"],
                "createdAt": "1976-06-18T21:26:40.060Z",
                "inStock": true
            },
            {
                "_id": "3802",
                "name": "elementum etiam",
                "price": 28,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1988-02-08T20:24:56.052Z",
                "inStock": true
            },
            {
                "_id": "3803",
                "name": "nullam rutrum",
                "price": 17,
                "labels": ["Doll", "Puzzle", "Outdoor"],
                "createdAt": "1988-06-08T10:37:59.489Z",
                "inStock": false
            },
            {
                "_id": "3804",
                "name": "massa lacus",
                "price": 94,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1976-12-28T17:13:55.462Z",
                "inStock": true
            },
            {
                "_id": "3805",
                "name": "aliquam curabitur",
                "price": 11,
                "labels": ["On wheels", "Box game", "Art", "Battery Powered", "Baby"],
                "createdAt": "1979-02-21T02:29:10.335Z",
                "inStock": true
            },
            {
                "_id": "3806",
                "name": "odio et",
                "price": 17,
                "labels": ["Art", "Baby", "Doll", "Puzzle"],
                "createdAt": "1975-05-12T18:09:05.731Z",
                "inStock": true
            },
            {
                "_id": "3807",
                "name": "pulvinar sed",
                "price": 100,
                "labels": ["On wheels", "Box game", "Art"],
                "createdAt": "1987-05-31T00:40:32.500Z",
                "inStock": false
            },
            {
                "_id": "3808",
                "name": "nunc consequat",
                "price": 29,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1970-04-07T14:38:45.413Z",
                "inStock": true
            },
            {
                "_id": "3809",
                "name": "risus sed",
                "price": 86,
                "labels": ["Doll", "Outdoor", "Baby"],
                "createdAt": "1996-04-25T03:33:22.135Z",
                "inStock": true
            },
            {
                "_id": "3810",
                "name": "in lacus",
                "price": 69,
                "labels": ["Doll", "Battery Powered", "Baby"],
                "createdAt": "1977-07-25T11:51:39.629Z",
                "inStock": true
            },
            {
                "_id": "3811",
                "name": "at neque",
                "price": 66,
                "labels": ["Doll", "Battery Powered", "Box game", "Art", "Baby"],
                "createdAt": "1994-10-03T16:23:34.808Z",
                "inStock": true
            },
            {
                "_id": "3812",
                "name": "nunc lacus",
                "price": 55,
                "labels": ["On wheels", "Battery Powered", "Baby", "Puzzle"],
                "createdAt": "1997-06-13T19:39:55.150Z",
                "inStock": true
            }
        ];
        utilService.saveToStorage(KEY, toys)
    }

    return toys
}