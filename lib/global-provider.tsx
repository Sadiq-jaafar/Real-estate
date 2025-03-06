import { createContext, useContext } from "react";
import { avatar } from './appwrite';
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./appwrite";

interface GlobalContextType {
    isLoggedin: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newPrams?: Record<string, string| number>) => Promise<void>;
}
 
interface User { 
    $id: string;
    avatar: string;
    email: string;
    name: string;
}


const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => { 
  
        const {
            data: user,
            loading,
            refetch,
         } = useAppwrite({
            fn: getCurrentUser,
         })
    const isLoggedin = !!user;
          return (
              <GlobalContext.Provider value={{
                    isLoggedin,
                    user,
                    loading,
                    refetch
        }}>
            {children}
        </GlobalContext.Provider> 
    );
}
export const useGlobalContext = () => { 
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
}
export default GlobalProvider