'use strict';
import httpService from './httpService'
export default {
    query,
    getCommentById,
    remove,
    edit,
    add
}
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/comment'
    : '//localhost:3000/api/comment';
function query(filterBy) {
    var queryString = '?';
    if (filterBy) {
        let keys = Object.keys(filterBy);
        let vals = Object.values(filterBy);
        keys.forEach((key, idx) => {
            queryString += `${key}=${vals[idx]}`;
            if (keys.length - 1 !== idx) queryString += '&'
        });
    }
    return httpService.get(`${BASE_URL}${queryString}`)
}
function getCommentById(commentId) {
    return httpService.get(`${BASE_URL}/${commentId}`)
}
function remove(commentId) {
    return httpService.delete(`${BASE_URL}/${commentId}`)
}
function edit(comment) {
    if (comment._id) return httpService.put(`${BASE_URL}/${comment._id}`, comment);
    else return httpService.post(BASE_URL, comment)
}

function add(comment){
    return httpService.post(BASE_URL, comment)
}