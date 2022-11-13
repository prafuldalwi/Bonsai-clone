import React from 'react';
// import { Select } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {Box} from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
  } from '@chakra-ui/react';


  
  import { Link } from "react-router-dom"
function Navbar() {
  return (
    <body>
        <div>
        <Box display="flex" marginLeft={30} marginTop={30} color="grey" fontFamily="Amerigo-bt roman opt',sans-serif" >
     <Link to={"/"}>
     <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" alt=""  /></Link>
              
           <Box marginLeft={40} >
           <Menu>
                <MenuButton as={Button} border="transparent" backgroundColor="white" >
                    Product
                </MenuButton>
                <MenuList>
                    <MenuItem padding={30} width={80} fontSize={20} color="black">
                      <h4>Bonsai Workflow</h4> 
                      {/* <p>Look professional, win more clients and manage your business from one place</p> */}
                    </MenuItem>
                    <MenuItem padding={30} width={80} fontSize={20} color="black">
                        <h4>Bonsai Text</h4>
                        {/* <p>Maximum write-offs, and estimate and save for 1099 taxes without headaches</p> */}
                    </MenuItem>
                    <MenuItem padding={30} width={80} fontSize={20} color="black">
                        <h4>Bonsai Cash</h4>
                        {/* <p>Bonsai all in one financial hub</p> */}
                    </MenuItem>
                </MenuList>
                </Menu>
                <Menu>
                <MenuButton as={Button} border="transparent" backgroundColor="white">
                    Templates
                </MenuButton>


                <MenuList padding={30} width={600}> 
                    <MenuItem padding={5}>  <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                   Contract Templates</MenuItem>
                    <MenuItem padding={5}>
                    <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                         Proposal Templates</MenuItem>
                    <MenuItem padding={5}>
                    <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                        Invoice Templates</MenuItem>
                    <MenuItem padding={5}>
                    <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                        Agreement Templates</MenuItem>
                    <MenuItem padding={5}>
                    <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                        Quote Templates</MenuItem>
                    <MenuItem padding={5}>
                    <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                        Scope of Work Templates</MenuItem>
                    <MenuItem padding={5}>
                    <Image
                     boxSize='2rem'
                     src='https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg'
                     alt='Simon the pensive'
                     mr='12px'
                   />
                        Brief Templates</MenuItem>
                </MenuList>
                </Menu>

                <Link to="/pricing">
                <Button border="transparent" backgroundColor="white">
                  Pricing
                  </Button>
                </Link>
                <Link to="/reviews">
                <Button border="transparent" backgroundColor="white">
                  Reviews
                  </Button>
                </Link>
           </Box>

                <Box marginLeft={80}>
                <Link to="/login">
                <Button  color="#00b289" _hover={{backgroundColor:"#00b289", color:"white"}}    border=" 1px solid #00b289" colorScheme="white" variant="outline" padding={5} >
                 Login
                </Button>
                </Link>
                
                <Button backgroundColor="#00b289" _hover="#00b289" color="white" width={150} >Start Free</Button>
                </Box>
        </Box>
        
    </div>

    
    </body>
  )
}


export default Navbar