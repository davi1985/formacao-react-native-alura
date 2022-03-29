import { StatusBar, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { Cart } from "./src/screens/Cart";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { cart } from "./src/mocks/cart";

export default function App() {
  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent />

      <Cart {...cart} />
    </SafeAreaView>
  );
}
