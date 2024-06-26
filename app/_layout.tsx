import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SecureStore from 'expo-secure-store'
import { useFonts } from "expo-font";
import { useEffect } from "react";


const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;
// custom token cache 
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

SplashScreen.preventAutoHideAsync()

function InitialLayout() {
  const router = useRouter();
  // cleck stuff
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments()

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  // Expo router uses Error boundaries to catch errors in navigation tree 
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  },[loaded])

  useEffect(() => {
    if (!isLoaded) return;
    const inAuthGroup = segments[0] === '(auth)';
    
    console.log(`usereffect - inauthGroup: ${inAuthGroup}`);
    console.log(`usereffect - isSignedIn: ${isSignedIn}`);

    if (isSignedIn && !inAuthGroup) {
      // bring user inside 
      router.replace('/(auth)/')
    } else if (!isSignedIn && inAuthGroup) {
      // kick user out
      router.replace('/');
    }
  },[isSignedIn])

  if (!loaded || !isLoaded) return <Slot/>
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown:false
      }} />
      <Stack.Screen name='login' options={{
        presentation: 'modal',
        title: '',
        headerLeft: () => (
          <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="close-outline" size={28} />
          </TouchableOpacity>
        )
      }}/>
    </Stack>
  );
}



const RoutLayoutNav =()=> {
    return (
      <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
        <GestureHandlerRootView style={{flex:1}}>
          <InitialLayout/>
        </GestureHandlerRootView>
      </ClerkProvider>
    )
}

export default RoutLayoutNav