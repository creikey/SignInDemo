import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  rootContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 12,
    padding: 10,
  },
  loginElement: {
    padding: 6,
    borderBottomWidth: 3,
    borderColor: 'rgba(0.0,0.0,0.0,0.2)',
  },
  scrollContainer: {
    height: 150,
  },
  mainText: {
    fontSize: 46,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type LoginProps = {
  onLogin: (name: string, email: string) => void;
};

const Login = (props: LoginProps) => {
  const [name, onChangeName] = React.useState('Name');
  const [email, onChangeEmail] = React.useState('Email');

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Login</Text>
      <TextInput style={styles.textInput} placeholder="Name" onChangeText={onChangeName} value={name} />
      <TextInput style={styles.textInput} placeholder="Email"onChangeText={onChangeEmail} value={email} />
    <Button
        style={styles.button}
        onPress={() => {
          props.onLogin(name, email);
        }}
        title={"Login"}
      />
    </View>
  );
};

const SignInDemo = () => {
  const [loginData, onChangeLoginData] = React.useState({});
  const [logins, onChangeLogins] = React.useState([]);

  if(Object.keys(loginData).length === 0)
  {
    return (
      <View style={styles.rootContainer}>
      <Login onLogin={(name, email) => {
        onChangeLogins([...logins, new Date()]);
        onChangeLoginData({"name": name, "email": email});
      }}/>
      </View>
    );
  }
  else
  {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.mainText}>Home</Text>
        <Text>Hello {loginData["name"]}, you have logged in {logins.length} times.</Text>
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scroll}>
          {
            logins.map( (login) => {
              return (
                <View key={login.toString()} style={styles.loginElement}>
                  <Text >Logged in at: {login.toString()}</Text>
                </View>
              );
            } )
          }
          </ScrollView>
        </View>
        <Button
            style={styles.button}
            onPress={() => { onChangeLoginData({}); }}
            title={"Logout"}
          />
      </View>
    );
  }

};

export default SignInDemo;
