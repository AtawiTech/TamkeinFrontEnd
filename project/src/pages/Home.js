import { Flex, HStack, VStack,Image ,Button, Input} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Flex backgroundColor='lightgray'>

    <VStack spacing='273'>
       {/* Heading */}
      <HStack spacing='600' backgroundColor='black' paddingX='59' paddingY='3' color='white' >

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
      <Link to={<Home />}><Image src='#' /> قيمني</Link>
      <Button color='black'padding='6' backgroundColor='#White' borderRadius='30' >حسابي</Button>
      </HStack>

      {/* Body */}
      <HStack spacing='-3' >
        <Input border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
        <Button width='7rem' backgroundColor='black' color='white' borderRadius='50'>بحث</Button>
      </HStack>
    <Footer />
    </VStack>
    </Flex>
    </>
  )
}

export default Home