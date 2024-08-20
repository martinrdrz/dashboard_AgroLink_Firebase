import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onLogin, onLogout } from '../store';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export const useCheckAuth = () => {
    //Este hook solo devuelve el estado y lo mas importante, dispara el onAuthStateChanged()
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(onLogout());
            const { uid, email, displayName, photoURL } = user;
            dispatch(onLogin({ uid, email, name: displayName, photoURL }));
        });
    }, []);
    return { status };
};
