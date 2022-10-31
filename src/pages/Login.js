import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {globalStyles} from '../styles/globals';
import {UserLogin} from '../providers/providers';
import {AppContext} from '../context/Context';
import {Input} from '../components/MainComponents';
import {useSelector, useDispatch} from 'react-redux';
import {setToken, setData} from '../redux/Actions';
const Login = ({navigation}) => {
  const myContext = useContext(AppContext);
  const [Password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [checkLogin, setCheckLogin] = useState('');
  let [securityText, setSecurityText] = useState(true);
  let [buttonDisable, setButtonDisable] = useState(true);
  const showPassword = require('../../assets/blind.png');
  const hidePassword = require('../../assets/eye.png');
  let showHidePasswordIcon = securityText == true ? showPassword : hidePassword;
  const myObj = {username: Username, password: Password};
  const [loading, setLoading] = useState(false);

  const {token, data} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  /** function to change icon show/hide password in the textInput */
  const toggleshowPasswordIcon = () => {
    setSecurityText(!securityText);
  };

  const checkUserifLoggedIn = () => {
    setLoading(true);
    setButtonDisable(true);
    UserLogin(myObj)
      .then(function (response) {
        setCheckLogin('');
        setLoading(false);
        dispatch(setToken(response.data.accessToken));
        // myContext.setDataList(response.data.accessToken);
        navigation.replace('Dashboard');
      })
      .catch(function (error) {
        setLoading(false);
        setCheckLogin('Please check your login credentials');
      });
  };

  return (
    <View style={globalStyles.bodyLogin}>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={globalStyles.containerLogin}>
            <View>
              <Image
                style={globalStyles.LoginLogo}
                source={require('../../assets/login3.png')}
                resizeMode="center"
              />
            </View>
            <Input
              placeholder="username"
              change={setUsername}
              disabled={setButtonDisable}
              securityText={false}
            />

            {loading ? (
              <ActivityIndicator
                visible={loading}
                size="large"
                color="#0000ff"
                style={globalStyles.IndicatorLogin}
              />
            ) : (
              <View style={globalStyles.IndicatorLogin}></View>
            )}
            <Input
              show="1"
              placeholder="password"
              securityText={securityText}
              change={setPassword}
              disabled={setButtonDisable}
              toggleshowPasswordIcon={toggleshowPasswordIcon}
              showHidePasswordIcon={showHidePasswordIcon}
            />

            <Text style={globalStyles.CredentialText}>{checkLogin}</Text>
            <View style={globalStyles.buttonContainerLogin}>
              <TouchableOpacity
                disabled={buttonDisable}
                onPress={() => {
                  checkUserifLoggedIn();
                }}
                style={globalStyles.buttonLogin}
                activeOpacity={0.6}>
                <Text style={globalStyles.buttonTextLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Login;
