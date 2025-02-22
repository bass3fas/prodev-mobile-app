import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

export default function Index() {
  const router = useRouter(); // Use the useRouter hook

  const handleJoinPress = () => {
    router.push('/join'); // Navigate to the join screen
  };

  const handleHomePress = () => {
    router.push('/'); // Navigate to the home screen
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <View style={styles.iconsection}>
              <TouchableOpacity onPress={handleHomePress}>
                <Ionicons name="arrow-back" size={25} />
              </TouchableOpacity>
              <Image source={require('@/assets/images/logo-green.png')} />
            </View>
            <View style={styles.titleTextGroup}>
              <Text style={styles.titleText}>Sign in to your</Text>
              <Text style={styles.titleText}>Account</Text>
            </View>
            <Text style={styles.subText}>
              Enter your email and password to sign in.
            </Text>

            <View style={styles.formGroup}>
              <View>
                <Text style={styles.formLabel}>Email</Text>
                <TextInput keyboardType="email-address" style={styles.formControl} />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.formLabel}>Password</Text>
                <View style={styles.formPasswordControl}>
                  <TextInput style={styles.passwordControl} />
                  <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                </View>
              </View>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <View style={styles.dividerGroup}>
              <View style={styles.divider}></View>
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider}></View>
            </View>

            <View style={styles.secondaryButtonGroup}>
              <TouchableOpacity style={styles.secondaryButton}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                  <Image source={require("@/assets/images/google.png")} />
                  <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                  <Image source={require("@/assets/images/facebook.png")} />
                  <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleJoinPress}>
              <Text style={styles.signupSubTitleText}>Join now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}