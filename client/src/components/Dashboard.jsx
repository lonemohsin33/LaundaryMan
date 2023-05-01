import { Box, Flex, Grid, GridItem, Heading, Wrap } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData(); 
    }, [])
    async function getData() {
        const data = await fetch("http://localhost:3000/dashboard")
        const res = await data.json()
        setData(res.message)
        console.log(res)
    }
    
  return (
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
  );
}

export default Dashboard
