import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import * as COLORS from '../utils/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <Pressable
      {...props}
      style={[
        styles.container,
        props.style,
        {
          backgroundColor: props.disabled
            ? COLORS.INITIAL_TXTINPUT
            : COLORS.PRIMARY_COLOR,
        },
      ]}
      onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    marginHorizontal: 24,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});

export default CustomButton;
