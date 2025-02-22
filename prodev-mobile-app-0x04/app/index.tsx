import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { styles } from '@/styles/_mainstyle';

export default function Index() {
  const navigation = useNavigation();

  const handleJoinPress = () => {
    navigation.navigate('join');
  };

  const handleSignInPress = () => {
    navigation.navigate('signin');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Company Logo */}
            <View style={styles.logoContainer}>
              <Image source={require("../assets/images/Logo.png")} />
            </View>

            {/* Text Group */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>The best prices for over 2 </Text>
                <Text style={styles.titleSubText}>million properties worldwide</Text>
              </View>
            </View>

            {/* Button Group */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonPrimary} onPress={handleJoinPress}>
                  <Text style={{ ...styles.buttonPrimaryText, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSecondary} onPress={handleSignInPress}>
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}