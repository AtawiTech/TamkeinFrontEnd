import { Flex, Heading, HStack, VStack ,Image, Button, Input} from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'


function Login() {
  return (
    <>
    <VStack >

    <Flex justifyContent='center'alignItems='center' height='90vh'>
    <HStack spacing='10'>

    <HStack  width='50%' justifyContent='center'alignItems='center'>
        <VStack width='25rem' spacing='5' backgroundColor='#F4F3F3' padding='2rem' borderRadius='5' border='gray solid 1px'>
        <Heading>نموذج تسجيل الدخول</Heading>
       <Input type='email' placeholder='الايميل' />
       <Input type='password' placeholder='كلمة المرور' />
       <HStack spacing='10'>
       <Button color='white' backgroundColor='black' >تسجيل الدخول</Button>
       <Button color='black' backgroundColor='#FFD05E' >تسجيل</Button>

       </HStack>
        </VStack>
    </HStack>
    <HStack width='50%' justifyContent='center'alignItems='center'>
    <Image  src='https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1663176928~exp=1663177528~hmac=b5b1a84c76302e0d5272e0027053467566a2f136eb18eefdbc5601f177236ed1'/>
    </HStack>
    </HStack>

    </Flex>
    <Footer />
    </VStack>
    
    </>
  )
}

export default Login