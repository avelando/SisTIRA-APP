import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AppStyles from '../../styles/AppStyles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={AppStyles.button} onPress={onPress}>
      <Text style={AppStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
