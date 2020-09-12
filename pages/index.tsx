import {
  Text,
  Grid,
  Flex,
  Image,
  Link,
  Button,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Stack,
} from '@chakra-ui/core';

import { FiGithub } from 'react-icons/fi';
import Divider from '../components/Divider';
import Input from '../components/Input';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 500px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDirection="column" alignItems="flex-start">
        <Image size="80%" src="/logo.png" alt="CJ" />
      </Flex>
      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <InputGroup>
          <InputLeftElement
            children={<Icon name="email" />}
            height="50px"
            color="red.500"
          />
          <Input placeholder="E-mail" />
        </InputGroup>

        <InputGroup marginTop={4}>
          <InputLeftElement
            children={<Icon name="lock" />}
            height="50px"
            color="red.500"
          />
          <Input placeholder="Senha" />
        </InputGroup>

        <Link
          alignSelf="flex-start"
          marginTop={4}
          fontSize="sm"
          color="red.600"
          fontWeight="bold"
          _hover={{ color: 'red.500' }}
        >
          Esqueci minha senha
        </Link>
        <Button
          marginTop={8}
          backgroundColor="red.500"
          height="50px"
          borderRadius="sm"
          minHeight="50px"
          _hover={{ backgroundColor: 'red.600' }}
        >
          REALIZAR LOGIN
        </Button>
        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem uma conta?{' '}
          <Link color="red.600" fontWeight="bold" _hover={{ color: 'red.500' }}>
            Registre-se
          </Link>
        </Text>
        <Divider />
        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.800"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'red.500' }}
          >
            <Box as={FiGithub} size="16px" marginRight={2} />
            GitHub
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
