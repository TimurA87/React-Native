import React, { useContext, useState } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackGround,
  AccountCover,
  AuthInput,
  AuthButton,
  AccountContainer,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackGround>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          onChangeText={(emailInput) => setEmail(emailInput)}
          textContentType="emailAddress"
          keyBoardType="email-address"
          autoCapitalize="none"
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            onChangeText={(pass) => setPassword(pass)}
            textContentType="password"
            autoCapitalize="none"
            secure
            secureTextEntry
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email?.trim(), password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackGround>
  );
};
