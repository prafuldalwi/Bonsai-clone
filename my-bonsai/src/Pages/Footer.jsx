import React from 'react';
import { Box, Heading } from "@chakra-ui/react";


function Footer() {
  return (
    <div>
        <Heading fontSize={20}>
            Products
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
        <div>
            <Box>
                <Heading fontSize={20}>FREE RESOURCES</Heading>
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
    </div>
    
  )
}

export default Footer