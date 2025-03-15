import { Account, Avatars, Client, Databases, OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { Platform } from 'react-native';

export const config = {
    platform: 'com.Real_estate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '67c838a3003d70403b66',
    DatabaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID, 
};


export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);


export async function login() {
    try {
        const redirectUri = Linking.createURL('/');
        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);

        if (!response) throw new Error('Failed to login');

        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);

        if (browserResult.type !== 'success') throw new Error('Failed to login');
        const url = new URL(browserResult.url);
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();
        
        if (!secret || !userId) throw new Error('Failed to login');

        const session = await account.createSession(userId, secret);

        if (!session) throw new Error('Failed to return session');

        return true;
    } catch (error) {
        console.error(error);
        return false
    }
}


// export async function login() {
//   try {
//     const redirectUri = "http://localhost:3000/";
    
//     // Create OAuth2 session with success/failure URLs
//     const session = await account.createOAuth2Session(
//       OAuthProvider.Google,
//       redirectUri, // Success URL
//       redirectUri  // Failure URL
//     );

//     // Open browser session
//     const authUrl = session?.url || session.toString();
//     const browserResult = await openAuthSessionAsync(authUrl, redirectUri);

//     // ... rest of your code ...
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }


// export async function login() {
//     try {
//         // ✅ Fix: Use correct redirect URI allowed in Appwrite Console
//         const redirectUri =
//             Platform.OS === 'web' 
//                 ? 'https://cloud.appwrite.io/v1/account/sessions/oauth2/callback'
//                 : AuthSession.makeRedirectUri({ native: 'exp://127.0.0.1:19000' });

//         const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);
//         if (!response) throw new Error('Failed to login');

//         const result = await openAuthSessionAsync(response.toString(), redirectUri);

//         if (result.type !== 'success') throw new Error('Failed to login');

//         const url = new URL(result.url);
//         const secret = url.searchParams.get('secret')?.toString();
//         const userId = url.searchParams.get('userId')?.toString();
        
//         if (!secret || !userId) throw new Error('Failed to login');

//         const session = await account.createSession(userId, secret);
//         if (!session) throw new Error('Failed to return session');

//         return true;
//     } catch (error) {
//         console.error(error);
//         return false;
//     }
// }

export async function logout() {
    try {
        await account.deleteSession('current');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();
        if (response.$id) {
            const userAvatar = avatar.getInitials(response.name)
            return { ...response, avatar: userAvatar.toString() };
        }
        
    } catch (error) {
        console.error(error);
        return null;
    }
}

