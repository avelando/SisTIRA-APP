import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import AppStyles from '../../styles/AppStyles';
import EyeOpen from '../../assets/eyeopen.svg';
import EyeClosed from '../../assets/eye-closed.svg';

interface FormInputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  value: string;
  onChangeText: (text: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  value,
  onChangeText,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={{ width: '90%' }}>
      {label && <Text style={AppStyles.text}>{label}</Text>}
      <View style={AppStyles.inputContainer}>
        <TextInput
          style={[AppStyles.input, { flex: 1 }]}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={AppStyles.iconContainer}
          >
            {isPasswordVisible ? (
              <EyeOpen width={20} height={20} fill="#fff" />
            ) : (
              <EyeClosed width={20} height={20} fill="#fff" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;
