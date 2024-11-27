import { Alert } from 'react-native';

const AlertHelper = {
  showSuccess(message: string) {
    Alert.alert('Sucesso', message);
  },

  showError(message: string) {
    Alert.alert('Erro', message);
  },
};

export default AlertHelper;
