import React from 'react';
import { SafeAreaView,StyleSheet, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik'

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.loginContainer}>
          <Text>Login Screen</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                <Button onPress={handleSubmit} title="Submit" />
              </>
            )}
          </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        width: '80%',
        height:250,
        position:'absolute',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        margin: 40,
        top: 160,
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
      },
      textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
      },
})
export default LoginScreen;