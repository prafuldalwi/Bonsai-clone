import React from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'
import { Switch, Stack } from '@chakra-ui/react'
import { HStack, Container, Image } from '@chakra-ui/react'

const Pricing = () => {
  return (
   <div>
    <Box textAlign="center" marginTop={100}>
        <Heading>
        Plans & Pricing 
        <Stack align='center' direction='row' marginLeft={900} marginTop={-30}>
            <Box fontSize={20} color="grey">Monthly</Box>
        <Switch size='lg' /> 
        </Stack>
        </Heading>
    </Box>



    <Box>
    <HStack spacing='24px' marginTop={50} padding={30} marginLeft={100}>
  <Box w='30%' h='700px'  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
    <Container fontSize={30} marginTop={10}>
        Starter
    </Container>
    <Container>
    Ideal for freelancers and contractors just starting out.
    </Container>
    <Box fontSize={40} textAlign="center">
    $24 /MONTH
    </Box>
    <Box textAlign="center" color="#00b289">_______________________________________</Box>


    
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}> All Templates</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Unlimited Clients & Projects</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Invoicing & Payments</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Proposals & Contracts</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Tasks & Time Tracking</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Client CRM</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Expense Tracking</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Up to 5 Project Collaborators</Box>
    </Box>

    <Button marginLeft={8} marginTop={30} backgroundColor="#00b289" _hover="#00b289" color="white" width={300} height={20}>Start Free</Button>
    
    
  </Box>
  <Box w='30%' h='700px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
  <Container fontSize={30} marginTop={10}>
  Professional
    </Container>
    <Container>
    Everything a growing independent business needs to thrive.
    </Container>
    <Box fontSize={40} textAlign="center">
    $39 /MONTH
    </Box>
    <Box textAlign="center" color="#00b289">_______________________________________</Box>


    
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Everything in Starter plus...</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Custom Branding</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Forms & Questionnaires</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Workflow Automations</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Client Portal</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>QuickBooks Integration</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Calendly Integration</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Zapier Integration</Box>
    </Box>
    <Button marginLeft={8} marginTop={30} backgroundColor="#00b289" _hover="#00b289" color="white" width={300} height={20}>Start Free</Button>

  </Box>




  <Box w='30%' h='700px' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
  <Container fontSize={30} marginTop={10}>
  Business
    </Container>
    <Container>
    The perfect package for small businesses and agencies.
    </Container>
    <Box fontSize={40} textAlign="center">
    $79 /MONTH
    </Box>
    <Box textAlign="center" color="#00b289">_______________________________________</Box>


    
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Everything in Starter</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Subcontractor Management</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Hiring Agreement Templates</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Subcontractor Onboarding</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Talent Pool</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>3 Team Seats</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Accountant Access</Box>
    </Box>
    <Box marginLeft={70}>
    <Box marginTop={30} textAlign="center">  
        <Image 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
        />
   </Box>
   <Box marginTop={-4} marginLeft={5}>Connect Multiple Bank Accounts</Box>
    </Box>
    <Button marginLeft={8} marginTop={30} backgroundColor="#00b289" _hover="#00b289" color="white" width={300} height={20}>Start Free</Button>

  </Box>
</HStack>
    </Box>
    <Box marginTop={20} color="grey">
      <div>
       <Box marginTop={30} marginLeft={300}>
       <Heading fontSize={20} marginBlock={10}>
            PRODUCTS
        </Heading>
        <Box>
        Proposals <br />
Contracts <br />
Invoicing <br />
Client CRM <br />
Time Tracking <br />
Task Tracking <br />
Forms <br />
Accounting <br />
Bonsai Tax<br /> 
Bonsai Cash<br />
Pricing<br />
Bonsai Reviewss<br />
        </Box>
       </Box>
        <div>
            <Box marginTop={-390} marginLeft={600}>
                <Heading fontSize={20} marginBlock={10}>FREE RESOURCES</Heading>
                <Box>
                Freelance Resources <br />
                Freelance Blog by Bonsai <br />
                How to Write a Contract <br />
                Online Signature Maker <br />
                Self-Employed Taxes Hub <br />
                Self-Employed Tax Calculator <br />
                Self-Employed Tax Deductions <br />
                </Box>
            </Box>
        </div>
        <div>
          <Box marginTop={-275} marginLeft={900}>
            <Heading fontSize={20} marginBlock={10}>BONSAI</Heading>
            <Box>About <br />
              Careers <br />
              Support <br />
              LinkedIn <br />
              Twitter <br />
              Privacy policy <br />
              Legal <br />
              Affiliates <br />
              Write for Us <br />
             </Box>
          </Box>
        </div>
    </div>
      </Box>
    
   </div>
   
  )
}


export default Pricing