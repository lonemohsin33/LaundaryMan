import { Box, Flex, Grid, GridItem, Heading, Wrap, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
    const [data, setData] = useState([])

    useEffect(() => {
        getData(); 
    }, [])
    async function getData() {
        const data = await fetch(
          "https://laundary-epml.onrender.com/dashboard"
        );
        const res = await data.json()
        setData(res.message)
      
    }
    
  return (
    <>
      {isMobile ? (
        <Flex
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={10}
        >
          <Box>
            <Heading children="New requests" />
          </Box>
          <Wrap width={"80%"}>
            <Box borderWidth="1px" borderRadius="lg" overflow="scroll" p="4">
              <Grid templateColumns="repeat(5, 1fr)" gap="6">
                <GridItem fontWeight="bold">Name</GridItem>
                <GridItem fontWeight="bold">Shirt</GridItem>
                <GridItem fontWeight="bold">Phone</GridItem>
                <GridItem fontWeight="bold">Address</GridItem>
                <GridItem fontWeight="bold">Date</GridItem>
                {data.map((item, index) => (
                  < >
                    <GridItem >{item.name}</GridItem>
                    <GridItem >{item.shirt}</GridItem>
                    <GridItem >{item.phone}</GridItem>
                    <GridItem >{item.address}</GridItem>
                    <GridItem >{item.date}</GridItem>
                  </>
                ))}
              </Grid>
            </Box>
          </Wrap>
        </Flex>
      ) : (
        <Flex flexDirection={"column"} alignItems={"center"} gap={10}>
          <Box>
            <Heading children="New requests" />
          </Box>
          <Wrap>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
              <Grid templateColumns="repeat(5, 1fr)" gap="6">
                <GridItem fontWeight="bold">Name</GridItem>
                <GridItem fontWeight="bold">Shirt</GridItem>
                <GridItem fontWeight="bold">Phone</GridItem>
                <GridItem fontWeight="bold">Address</GridItem>
                <GridItem fontWeight="bold">Date</GridItem>
                {data.map((item, index) => (
                  <>
                    <GridItem>{item.name}</GridItem>
                    <GridItem>{item.shirt}</GridItem>
                    <GridItem>{item.phone}</GridItem>
                    <GridItem>{item.address}</GridItem>
                    <GridItem>{item.date}</GridItem>
                  </>
                ))}
              </Grid>
            </Box>
          </Wrap>
        </Flex>
      )}
    </>
  );
}

export default Dashboard
