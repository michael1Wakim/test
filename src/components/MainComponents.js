import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {globalStyles} from '../styles/globals';

export const HeaderComponent = props => {
  return (
    <View style={globalStyles.header}>
      <View style={globalStyles.menu}>
        <TouchableOpacity onPress={props.onClick} activeOpacity={0.5}>
          <FontAwesome5 name={props.iconName} size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={globalStyles.header_title}>
        <Text style={globalStyles.text}>{props.title}</Text>
      </View>
      <View style={globalStyles.header_logo}>
        <TouchableOpacity onPress={props.onClick} activeOpacity={0.5}>
          <Image
            style={globalStyles.header_logo_img}
            source={require('../../assets/signout.png')}
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const InputSearch = props => {
  return (
    <View style={globalStyles.searchView}>
      <FontAwesome5
        name="search"
        size={18}
        color="#4169e1"
        style={{marginLeft: 20}}
      />
      <TextInput
        autoCorrect={props.autoCorrect}
        clearButtonMode="always"
        value={props.query}
        onChangeText={queryText => props.handleSearch(queryText)}
        placeholder="Search by headline"
        placeholderTextColor="grey"
        style={globalStyles.textinput}
      />
    </View>
  );
};

export const Input = props => {
  return (
    <View style={globalStyles.login_Input}>
      <TextInput
        placeholder={props.placeholder}
        style={globalStyles.textInputWithIcon}
        secureTextEntry={props.securityText}
        underlineColorAndroid="transparent"
        onChangeText={text => {
          props.change(text), props.disabled(false);
        }}
      />
      {props.show && (
        <TouchableOpacity
          onPress={() => props.toggleshowPasswordIcon()}
          style={{justifyContent: 'center', flex: 1}}
          activeOpacity={0.8}>
          <Image
            source={props.showHidePasswordIcon}
            style={globalStyles.hideShowPass}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
