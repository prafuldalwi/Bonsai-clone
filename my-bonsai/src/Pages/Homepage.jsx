import { Box , Input, Heading, Button} from '@chakra-ui/react'
import React from 'react'

const Homepage = () => {
  return (
    <>
    <div>
      <Box marginLeft={50}>
        <Heading marginTop={75} fontSize={40} fontFamily="Amerigo-bt roman opt" marginBottom={5}>Everything you need to <br /> run your business.</Heading>
       <p>Bonsai’s all-in-one product suite with smart <br /> automation lets you focus on your passion, not <br /> your paperwork.</p>
      
       <Input type="email" placeholder='Enter Your Email' width={400} height={70} marginTop={30} /> <Button marginTop={-2} height={70} color="#00b289" _hover={{backgroundColor:"#00b289", color:"white"}}    border=" 1px solid #00b289" colorScheme="white" variant="outline" padding={5}  >Start Free</Button>
      
      </Box>

      <Box marginLeft={700} marginTop={-300} height={500} width={700} >
      <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png" alt="" />
      </Box>
    </div>

    <div>
      <Box textAlign="center">
        <Heading marginTop={200} textAlign="center" >
        Make more, manage less
        </Heading>
        <h3 fontSize={30} >Bonsai integrates and automates every step of your business so it <br /> runs seamlessly - from proposal to tax season.</h3>
      </Box>
    </div>
    </>
  )
}

export default Homepage