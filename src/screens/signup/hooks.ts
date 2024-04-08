import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {appLoadingRef, showAlerMessage} from '../../core/utils/modal';
import {Keyboard} from 'react-native';

export default function useSignup() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangePhone = (value: string) => {
    setPhone(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onClickOutside = () => {
    Keyboard.dismiss();
  };

  const handleSignup = async () => {
    try {
      if (!phone || !password) {
        showAlerMessage('Error', 'Please enter phone and password');
      }
      appLoadingRef.current?.showLoading();
      await auth().createUserWithEmailAndPassword(
        `${phone}@gmail.com`,
        password,
      );
    } catch (error: Error | any) {
      showAlerMessage('Error', error.message);
    } finally {
      appLoadingRef.current?.hideLoading();
    }
  };

  return {
    phone,
    password,
    showPassword,
    handleShowPassword,
    onChangePhone,
    onChangePassword,
    handleSignup,
    onClickOutside,
  };
}
