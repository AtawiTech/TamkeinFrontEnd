import { Flex, HStack, VStack,Image ,Button, Input,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Home from './Home'

function Profile() {
  return (
    <>
    <Flex backgroundColor='lightgray' height='100vh' >

    <VStack spacing='273'>
       {/* Heading */}
      <HStack spacing='600' backgroundColor='black' paddingX='61' paddingY='3' color='white'  >

        {/* Icons */}
      <HStack >
        <Link>
      <Image src='#' />
        </Link>
        <Link>
      <Image src='#' />
        </Link>
        <Link>
      <Image src='#' />
        </Link>
      
      </HStack>

      {/* Logo */}
      <Link to={'/'}><Image src='#' /> قيمني</Link>
      <Button color='black'padding='6' backgroundColor='#White' borderRadius='30' >حسابي</Button>
      </HStack>

      {/* Body */}
      <HStack  >
        <VStack width='45rem' spacing='5'backgroundColor='gray' padding='8' borderRadius='5'>
           <HStack justifyItems='center' alignItems='center' justifyContent='center'>

            <Text >
                بياناتي
            </Text>
           </HStack>

            <HStack spacing='90'>
            <Image width='8rem' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsQh8tvclNkrB57vus8zpRAo72kuSDkBOXQ&usqp=CAU'/>
            <VStack>
            <Input placeholder='الاسم الاول ' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
            <Input placeholder='الاسم الاخير ' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
            <Input placeholder='الايميل ' type='email' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
            <Input placeholder='الرقم السري ' type='password' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
            </VStack>
            </HStack>
        </VStack>
        </HStack>
    </VStack>
    </Flex>
    <Footer />
    </>
  )
}

export default Profile