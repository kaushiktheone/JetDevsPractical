import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Alert,
  StatusBar,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {EMAIL_REGX, PASSWORD_REGX, isIOS} from '../utils/constant';
import * as COLORS from '../utils/colors';

const Login: React.FC = props => {
  const emailInputRef = useRef<any>(null);
  const passwordInputRef = useRef<any>(null);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const buttonDisable = () => {
    const emailValue = getValues('email');
    const pwdValue = getValues('password');

    if (!emailValue || !pwdValue) {
      return true;
    }

    if (errors.email || errors.password) {
      return true;
    }

    return false;
  };

  const onLoginPress = (data: any) => {
    const {email, password} = data;

    if (email === 'reactnative@jetdevs.com' && password === 'jetdevs@123') {
      props?.navigation?.navigate('BottomTabs');
    } else {
      Alert.alert('Login Failed', 'Email or password is incorrect.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.loginContainer}>
        <StatusBar
          backgroundColor={COLORS.BG_COLOR}
          barStyle={'dark-content'}
        />
        <View style={styles.cardContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/applogo.png')}
              style={styles.logoImage}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>LOGIN</Text>
          </View>
          <View style={styles.textInputContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: EMAIL_REGX,
                  message: 'Email is not correct',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomTextInput
                  err={errors.email}
                  iconName="mail-outline"
                  placeholder="Enter Email"
                  returnKeyType="next"
                  inputRef={emailInputRef}
                  keyboardType="email-address"
                  blurOnSubmit={false}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.pwdErrTxt}>{errors.email.message}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: PASSWORD_REGX,
                  message: 'Password is not correct',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomTextInput
                  secure
                  err={errors.password}
                  iconName="lock-closed-outline"
                  placeholder="Enter Password"
                  returnKeyType="go"
                  inputRef={passwordInputRef}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(onLoginPress)}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.pwdErrTxt}>{errors.password.message}</Text>
            )}
          </View>
          <CustomButton
            title="LOGIN"
            disabled={buttonDisable()}
            onPress={handleSubmit(onLoginPress)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
  },
  loginContainer: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
  },
  cardContainer: {
    borderRadius: 8,
    minHeight: '75%',
    backgroundColor: 'white',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -50,
  },
  logoImage: {
    height: 50,
    width: 50,
  },
  titleContainer: {
    alignSelf: 'center',
    marginTop: 100,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLORS.LOGIN_TXT,
  },
  textInputContainer: {
    marginTop: 50,
    marginBottom: 80,
  },
  pwdErrTxt: {
    fontSize: 10,
    color: COLORS.RED,
    marginHorizontal: 24,
  },
});

export default Login;
