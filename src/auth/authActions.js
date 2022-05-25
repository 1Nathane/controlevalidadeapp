import React, { useCallback } from 'react'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
import { authConfig } from './Config'


export function login(values) {
    return submit(authConfig.auth().signInWithEmailAndPassword(values['email'], values['password'])) 
}

export function signup(values) {
    return submit(authConfig.auth().createUserWithEmailAndPassword(values['email'], values['password']))
}

function submit(response) {
    return function(dispatch){
        return (response).then(resp => {
            dispatch([
               { type: 'USER_FETCHED', payload: resp.user }
            ])        
    }).catch(error => {
            toastr.error('Erro', error.message)
        })
}}

export function logout() {
    authConfig.auth().signOut()
    return { type: 'TOKEN_VALIDATED', payload: false }
}

function userIsValid() {
    authConfig.auth().onAuthStateChanged((user) => {
        if (user) {
            return true
        } else {
            return false
        }
    })
}

const userSave = localStorage.getItem('_controlevalidade_user')

export function validateToken() {
    return dispatch => {
         if(userIsValid()){
            dispatch([{ type: 'TOKEN_VALIDATED', payload: true}])
         } else if (userSave){
            dispatch([{ type: 'TOKEN_VALIDATED', payload: true}])
         } else {
            dispatch([{ type: 'TOKEN_VALIDATED', payload: false }])
         }
    } 
}
