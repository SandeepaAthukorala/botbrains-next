import { auth } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';

const SCOPES = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/drive.file',
];

class GoogleAuthService {
    async init(): Promise<void> {
        // Firebase handles initialization automatically
        return Promise.resolve();
    }

    async signIn(): Promise<any> {
        try {
            const provider = new GoogleAuthProvider();
            SCOPES.forEach(scope => provider.addScope(scope));

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Get the Google Access Token (for Drive API)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const accessToken = credential?.accessToken;

            if (accessToken) {
                this.storeToken(accessToken);
            }

            return {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                picture: user.photoURL,
                accessToken: accessToken // Return this for immediate use if needed
            };
        } catch (error: any) {
            console.error('❌ Firebase Sign-in Error:', error);
            throw {
                type: 'tokenFailed',
                idpId: 'google',
                error: error.message || 'server_error'
            };
        }
    }

    async signOut(): Promise<void> {
        try {
            await firebaseSignOut(auth);
            localStorage.removeItem('google_access_token');
            localStorage.removeItem('google_token_expiry');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    // Helper to store access token manually if we need to pass it to GAPI later
    // Note: Firebase manages its own ID tokens, but for Drive API we need the OAuth access token
    private storeToken(token: string) {
        // Expire in 1 hour (standard Google token life)
        const expiresIn = 3600;
        const expiryDate = new Date().getTime() + expiresIn * 1000;

        localStorage.setItem('google_access_token', token);
        localStorage.setItem('google_token_expiry', expiryDate.toString());
    }

    getAccessToken(): string | null {
        const token = localStorage.getItem('google_access_token');
        const expiry = localStorage.getItem('google_token_expiry');

        if (!token || !expiry) return null;

        if (new Date().getTime() > parseInt(expiry)) {
            // Token expired. With Firebase, we might need to force a re-auth or use silent upgrade
            // For now, return null to force re-login flow if strictly needed for Drive
            return null;
        }

        return token;
    }

    // Helper to wait for Firebase to initialize valid auth state
    private waitForAuth(): Promise<any> {
        return new Promise((resolve) => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                unsubscribe();
                resolve(user);
            });
        });
    }

    async isAuthenticated(): Promise<boolean> {
        const user = await this.waitForAuth();
        return !!user;
    }

    async getCurrentUser(): Promise<any> {
        const user = await this.waitForAuth();
        if (!user) return null;

        return {
            id: user.uid,
            email: user.email,
            name: user.displayName,
            picture: user.photoURL
        };
    }
}

// Export singleton instance with the name expected by consumers
export const googleAuth = new GoogleAuthService();
