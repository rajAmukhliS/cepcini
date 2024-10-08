import Row from './Row';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  TextInput,
  LogBox,
} from 'react-native';
import {mvs} from '../../Services/metrices';
import * as SVG from '../../assets/svgs';
import {colorsTheme} from '../../Services/Color';
import {Icon, Icons} from '..';
import {useTheme} from '../../config/theme';

const PrimaryTextInput = ({
  leftIcon = '',
  rightIcon = '',
  rightPng,
  placeholder = '',
  style,
  inputValue,
  onChangeText,
  type,
  secureTextEntry,
  textAlign,
  onLeftPress,
  onBlur,
  placeholderTextColor = 'gray',
  onFocus,
  existThreat,
  onEyeClick,
}) => {
  const colors = useTheme();
  const LeftIcon = SVG[leftIcon];
  const RightIcon = SVG[rightIcon];

  return (
    <Row style={{...styles.main, ...style}}>
      <TouchableOpacity onPress={onLeftPress}>
        {LeftIcon ? <LeftIcon /> : null}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        textAlign={textAlign}
        onBlur={onBlur}
        onFocus={onFocus}
      />

      {onEyeClick && (
        <TouchableOpacity onPress={onEyeClick}>
          <Icon
            name={secureTextEntry ? Icons.EYE_ICON_OPEN : Icons.EYE_ICON_CROSS}
            size={20}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}

      {rightPng ? (
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={rightPng} style={{height: 30, width: 30}} />
        </View>
      ) : null}
      {/* <View style={{backgroundColor: colors.primary, height: 30, width: 30}}>
        <Icon name={Icons.EYE_ICON_CROSS} type={'FontAwesome'} />
      </View> */}
    </Row>
  );
};
export default PrimaryTextInput;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: mvs(10),
    paddingHorizontal: mvs(10),
    height: mvs(60),
    // borderBottomWidth: 1,
    // marginHorizontal: mvs(15),
  },

  input: {
    flex: 1,
    paddingRight: mvs(10),
    color: 'black',
  },
});
