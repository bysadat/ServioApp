// ForgotPasswordScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { sendPasswordResetEmail } from "../util/auth";

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  async function resetPasswordHandler() {
    try {
      await sendPasswordResetEmail(email);
      Alert.alert("Success", "Password reset email sent!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(
        "Error",
        "Could not send password reset email. Please try again."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Enter your email address to reset your password:
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={resetPasswordHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f3f3f3",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
});

export default ForgotPasswordScreen;
