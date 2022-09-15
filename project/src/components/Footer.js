import { Box, Text,Flex } from '@chakra-ui/react'
import React from 'react'



function Footer() {
  return (
    <>
    <Flex width='100%' height='4rem' backgroundColor='black' color='white' justifyContent='center' alignItems='center' justifyItems='center' >
        <Text>
            تواصل معنا: demo@demo.com
        </Text>
      
    </Flex>
    </>
  )
}

export default Footer