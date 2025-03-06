import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, SafeAreaView } from "react-native";

export default function AppLayout() {
    const { loading, isLoggedin } = useGlobalContext();
    
    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100%' }}>
                <ActivityIndicator size="large" color="#0061FF" />
            </SafeAreaView>
        )
    }
    if (!isLoggedin) 
        return <Redirect href="/sign-in" />
    return <Slot />
}