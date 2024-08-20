import { useDispatch, useSelector } from 'react-redux';
import { checking, onLogin, onLogout } from '../store';
import { loginWithEmailPassword, logoutFirebase } from '../firebase/providers';

export const useAuthStore = () => {
    //const { status, uid, name, email, photoURL, errorMessage } = useSelector((state) => state.auth);
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(checking());
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password });
        if (!ok) return dispatch(onLogout({ errorMessage }));
        dispatch(
            onLogin({
                uid,
                name: displayName,
                email,
                photoURL: photoURL ?? null, //devuelve data.photoURL si el mismo existe, caso contrario devuelve null
            })
        );
    };

    // const startLogin_original = async ({ email, password }) => {
    //     dispatch(checking());
    //     try {
    //         const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    //         const { uid, photoURL, displayName } = resp.user;

    //         dispatch(
    //             onLogin({
    //                 uid: uid,
    //                 name: displayName,
    //                 email,
    //                 photoURL: photoURL ?? null, //devuelve data.photoURL si el mismo existe, caso contrario devuelve null
    //             })
    //         );
    //     } catch (error) {
    //         dispatch(onLogout('Credenciales incorrectas'));
    //         // setTimeout(() => {
    //         //     dispatch(clearErrorMesage());
    //         // }, 20);
    //     }
    // };

    const startLogout = async () => {
        localStorage.clear();
        //dispatch(onLogoutCalendar());
        await logoutFirebase();
        dispatch(onLogout());
    };

    // const checkAuthToken = async () => {
    //     const token = localStorage.getItem('token');
    //     if (!token) return dispatch(onLogout());
    //     try {
    //         const { data } = await authApi.get('/auth/renew');
    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('token-init-date', new Date().getTime());
    //         dispatch(onLogin({ uid: data.uid, name: data.name, email: data.email }));
    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch(onLogout());
    //     }
    // };

    return {
        //Propiedades
        status,
        errorMessage,
        //uid,
        //name,
        //email,
        //photoURL,

        //Metodos
        startLogin,
        //startRegister,
        //checkAuthToken,
        startLogout,
    };
};
