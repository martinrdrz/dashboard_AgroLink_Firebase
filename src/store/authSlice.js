//sirve para mantener la infromacion del Usuario Logueado.

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'checking', 'authenticated' , 'not-authenticated'
        uid: null,
        name: null,
        email: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        checking: (state) => {
            state.status = 'checking';
            state.uid = null;
            state.name = null;
            state.email = null;
            state.photoURL = null;
            state.errorMessage = null;
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.name = payload.name;
            state.email = payload.email;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.name = null;
            state.email = null;
            state.photoURL = null;
            state.errorMessage = payload;
        },
        clearErrorMesage: (state) => {
            state.errorMessage = null;
        },
    },
});

export const { checking, onLogin, onLogout, clearErrorMesage } = authSlice.actions;
