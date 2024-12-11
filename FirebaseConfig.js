    import { initializeApp } from "firebase/app";
    import { initializeAuth, getReactNativePersistence } from "firebase/auth";
    import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
    import { Platform } from "react-native";
    
    
    const firebaseConfig = {
      apiKey: "AIzaSyBQ6j_wny0BaCuc-y6mECgDjIUzw-0z2Ng",
      authDomain: "final-212f9.firebaseapp.com",
      projectId: "final-212f9",
      storageBucket: "final-212f9.firebasestorage.app",
      messagingSenderId: "304430284878",
      appId: "1:304430284878:web:1b03c8f60f28f464c2c31f"
    };
    
    const app = initializeApp(firebaseConfig);
    
    let auth;
    if (Platform.OS === "web") {
      auth = initializeAuth(app);
    } else {
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
      });
    }
    
    export { auth };