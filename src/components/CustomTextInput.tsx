import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as COLORS from '../utils/colors';

interface CustomTextInputProps {
  err?: boolean;
  iconName?: string;
  secure?: boolean;
  style?: any;
  onChangeText?: (text: string) => void;
  inputRef?: React.RefObject<TextInput>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const [textVisible, setTextVisible] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    if (props.secure === true) {
      setTextVisible(false);
    } else {
      setTextVisible(true);
    }
  }, [props.secure]);

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: props.err
            ? COLORS.RED
            : onFocus
            ? COLORS.PRIMARY_COLOR
            : COLORS.INITIAL_TXTINPUT,
        },
        props.style,
      ]}>
      {props.iconName && (
        <Icon
          name={props.iconName}
          size={24}
          color={onFocus ? COLORS.PRIMARY_COLOR : COLORS.WRITTEN_GRAY}
        />
      )}
      <TextInput
        {...props}
        style={styles.textInput}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={COLORS.INITIAL_TXTINPUT}
        secureTextEntry={!textVisible}
        onChangeText={props.onChangeText}
        ref={props.inputRef}
      />
      {props.secure && (
        <Icon
          name={!textVisible ? 'eye' : 'eye-off'}
          size={22}
          color={COLORS.HAWKE_BLUE}
          onPress={() => setTextVisible(!textVisible)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10,
    paddingLeft: 2,
    marginVertical: 10,
    marginHorizontal: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.DARK_GREY,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 8,
    textAlignVertical: 'bottom',
    letterSpacing: 0.5,
    color: COLORS.WRITTEN_GRAY,
  },
});

export default CustomTextInput;
