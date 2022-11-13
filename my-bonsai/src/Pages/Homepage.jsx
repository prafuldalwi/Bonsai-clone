import { Box , Input, Heading, Button} from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <>
    <div>
      <Box marginLeft={50}>
        <Heading marginTop={75} fontSize={40} fontFamily="Amerigo-bt roman opt" marginBottom={5}>Everything you need to <br /> run your business.</Heading>
       <p>Bonsai’s all-in-one product suite with smart <br /> automation lets you focus on your passion, not <br /> your paperwork.</p>
      
       <Input  
           border=" 1px solid #00b289" colorScheme="white" variant="outline" type="email" 
       placeholder='Enter Your Email' width={400} height={70} marginTop={30} />
        <Button marginTop={-2} height={70} color="#00b289" _hover={{backgroundColor:"#00b289", color:"white"}} 
           border=" 1px solid #00b289" colorScheme="white" variant="outline" padding={5}  >Start Free</Button>
      
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
        <p>Bonsai integrates and automates every step of your business so it <br /> runs seamlessly - from proposal to tax season.</p>
      </Box>

      <div>
        <Box marginLeft={200} marginTop={100}>
          <h1>Without Bonsai</h1>
          <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg" alt="" />
        </Box>
      </div>

      <div>
        <Box marginLeft={700} marginTop={-400}>
          <h1>With Bonsai</h1>
          <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg" alt="" />
        </Box>
      </div>
      <div>
        <Box marginTop={100}>
        <Tabs size='md' variant='enclosed' display="flex">
  <TabList display="grid" marginLeft={150} >
    <Tab fontSize={"2xl"}>Proposals</Tab>
    <Tab fontSize={"2xl"}>Contracts</Tab>
    <Tab fontSize={"2xl"}>Client CRM</Tab>
    <Tab fontSize={"2xl"}>Time Tracking</Tab>
    <Tab fontSize={"2xl"}>Invoices</Tab>
    <Tab fontSize={"2xl"}>Task tracking</Tab>
    <Tab fontSize={"2xl"}>Accounting & Tasks</Tab>
    <Tab fontSize={"2xl"}>Forms</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <h1 m={30}>Win More Work
With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.</h1>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Protect Your Business
Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ca2feb683_Graphic_Contact-min.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Stay Organized
Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Keep It Simple
Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%2520time-min-p-500.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Get Paid Faster
Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Be More Effective
Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Automate Your Finances
Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png" alt="" />
    </TabPanel>
    <TabPanel>
      <p>Ask Your Clients
Create your own customized forms and questionnaires for clients and kicking off new projects</p>
    <img height={600} width={800} src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png" alt="" />
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
      </div>
      <div>
        <Box>
          <Heading textAlign="center" marginTop={100}>
          Trusted by 500K+ self-employed workers <br />
          and small businesses
          </Heading>
          <Box textAlign="center" marginTop={30} fontSize={25}>
           Whether you’re just getting started or your business is <br /> booming, Bonsai has you covered.

          </Box>
          <Box marginLeft={60} marginTop={90}>
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg" alt="" />
             <Heading fontSize={30}>Built for All Work Types</Heading>
             <Box marginTop={3}>We proudly back people with wide <br /> -ranging businesses—from design and <br /> marketing to development, writing, and <br /> photography.</Box>
          </Box>
          <Box marginLeft={800} marginTop={-230}>
            <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg" alt="" />
             <Heading fontSize={30}>Built for Global Businesses</Heading>
             <Box marginTop={3}>Bonsai has international coverage <br /> across the United States, Canada, UK, <br /> Australia and more, with 180 currencies <br /> supported.</Box>
          </Box>
          </Box>
      </div>
      <div>
        <Box>
        <Heading marginTop={55} textAlign="center" fontSize={35}>Don't just take it from us.</Heading>
        </Box>
        <Container marginTop={50} marginLeft={100} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"  height={300}>
          <img src="https://moz.com/community/q/assets/uploads/profile/46368-profileavatar-1619580488060.png" alt="" />
        "For all my Freelancer / Small Agency followers, I wish I’d discovered @bonsaiinc long ago - great templated contract" <br />
          David Mihm <br />
          Founder of TidingsCo
        </Container>
        <Container marginTop={-300} marginRight={100} boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"  height={300}>
          <img height={200} width={200} src="https://pbs.twimg.com/profile_images/1347666169738768386/f2IU7gcc_400x400.jpg" alt="" />
          "@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and  questions."<br />
            David Urbinati <br />
            Motion design / animation
        </Container>
      </div>
      <div>
        <Box marginTop={200}  borderRadius={30}  backgroundColor="#f2faff" width={900} height={190} padding={30} marginLeft={60}>
        <Container>
         <Heading> It’s your business. <br />     
          We’re here to help it grow.</Heading>
          <Button marginTop={-50} marginLeft={550} backgroundColor="#00b289" _hover="#00b289" color="white" width={100}>Start Free</Button>
        </Container>
        </Box>


        {/* Footer */}


      </div>
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
    </>
  )
}

export default Homepage