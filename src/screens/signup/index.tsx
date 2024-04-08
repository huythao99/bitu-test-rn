import * as React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppSafeView from '../../core/components/app-safe-view';
import styles from './styles';
import IMAGES from '../../core/assets';
import {COLORS} from '../../core/theme/colors';
import useSignup from './hooks';

export default function SignUpScreen() {
  const {
    phone,
    password,
    showPassword,
    onClickOutside,
    handleShowPassword,
    onChangePhone,
    onChangePassword,
    handleSignup,
  } = useSignup();

  return (
    <AppSafeView>
      <TouchableWithoutFeedback onPress={onClickOutside}>
        <View style={styles.container}>
          <View style={styles.region}>
            <Text style={styles.textRegion}>VN</Text>
            <Image source={IMAGES.ic_vietnam} style={styles.iconVietnam} />
          </View>
          <Image source={IMAGES.image_bitu} style={styles.logo} />
          <Text style={styles.title}>Đăng ký</Text>
          <View style={styles.inputContainer}>
            <Image source={IMAGES.ic_phone} style={styles.iconInput} />
            <Text style={styles.regionCode}>+84</Text>
            <Image source={IMAGES.ic_arrow_down} style={styles.iconArrow} />
            <View style={styles.dashVertical} />
            <TextInput
              style={styles.phoneInput}
              placeholder="Nhập số điện thoại"
              keyboardType="number-pad"
              placeholderTextColor={COLORS.gray_5}
              value={phone}
              onChangeText={onChangePhone}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={IMAGES.ic_lock} style={styles.iconInput} />
            <TextInput
              style={styles.passwordInput}
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.gray_5}
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={handleShowPassword}>
              <Image source={IMAGES.ic_eye} style={styles.iconEye} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnContinue}
            activeOpacity={0.8}
            onPress={handleSignup}>
            <Text style={styles.continue}>Tiếp tục</Text>
          </TouchableOpacity>
          <Text style={styles.optionText}>Hoặc đăng ký tài khoản qua</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity>
              <Image source={IMAGES.ic_facebook} style={styles.iconLogo} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMid}>
              <Image source={IMAGES.ic_google} style={styles.iconLogo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMAGES.ic_apple} style={styles.iconLogo} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.hasAccount}>Nếu bạn đã có tài khoản</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnLogin}>
              <Text style={styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </AppSafeView>
  );
}
