import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SendMessageIcon from '../../Icons/SendMessageIcon';
import {useSelector} from 'react-redux';

type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
};

export default function InputField({
  value,
  onChangeText,
  onSubmit,
}: InputFieldProps) {
  const {t} = useTranslation();
  const [isDisabled, setIsDisabled] = React.useState(true);
  useEffect(() => {
    setIsDisabled(!value);
  }, [value]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.inputContainer}></Text> */}
      <TextInput
        style={styles.inputContainer}
        placeholder={t('SEND_MESSAGE_PLACEHOLDER')}
        placeholderTextColor="gray"
        cursorColor="white"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onSubmit}
        style={[styles.sendMessageIcon, !isDisabled && styles.activeBtn]}>
        <SendMessageIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    maxHeight: 43,
    backgroundColor: 'rgba(217, 217, 217, 0.2)',
    borderRadius: 12,
    padding: 10,
    color: '#fff',
    fontFamily: 'ABeeZee-Regular',
  },
  sendMessageIcon: {
    backgroundColor: '#53535C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 11,
  },
  activeBtn: {
    backgroundColor: '#19B692',
  },
});
