import React, { useCallback } from 'react'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
import { authConfig } from './Config'


function validateSingup (values) {
    var message = ''
    var valid = true
    if (!values['name'] || !values['email'] || !values['password'] || !values['confirm_password']) {
        message = 'Todos os campos são obrigatórios!'
        valid = false
    }
    if (!(values['password'] === values['confirm_password'])){
        message = 'Senhas não conferem!'
        valid = false
    }
    return {valid, message}
}

function validateLogin (values) {
    var message = ''
    var valid = true
    if (!values['email'] || !values['password']) {
        message = 'Todos os campos são obrigatórios!'
        valid = false
    }
    return {valid, message}
}


export function login(values) {
    const {valid, message} = validateLogin(values)
    if(valid){
        return submit(authConfig.auth().signInWithEmailAndPassword(values['email'], values['password'])) 
    } else {
        toastr.error('Erro', message)
    }    
}

export function signup(values) {
   const {valid, message} = validateSingup(values)
   if(valid) {
    return submit(authConfig.auth().createUserWithEmailAndPassword(values['email'], values['password']))
   } else {
    toastr.error('Erro', message) 
   }
}

export function loginProvider(provider) {
        return (authConfig.auth().signInWithPopup(provider)).then(resp => {
            var user = resp.user
            localStorage.setItem('_controlevalidade_user', JSON.stringify(user))
            location.reload()
    }).catch(error => {
            toastr.error('Erro', error.message)
    })
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
