import React from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/core';

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="red.500"
      borderRadius="sm"
      paddingLeft="38px"
      {...props}
    />
  );
};

export default Input;
