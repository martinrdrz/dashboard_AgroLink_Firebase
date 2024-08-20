import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        console.log(resp.user);
        return {
            ok: true,
            uid,
            email,
            photoURL,
            displayName,
        };
    } catch (error) {
        return { ok: false, errorMessage: error.message };
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
