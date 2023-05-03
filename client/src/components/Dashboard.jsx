import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Wrap,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationTracker from "./Map";

const Dashboard = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const data = await fetch("https://laundary-man.onrender.com/dashboard");
    const res = await data.json();
    setData(res.message);
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
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
            <Heading children="New requests" ml={"4"} />
          </Box>
          <Wrap width={"80%"}>
            <Box borderWidth="1px" borderRadius="lg" overflow="scroll" p="4">
              <Grid templateColumns="repeat(7, 1fr)" gap="6">
                <GridItem fontWeight="bold">Name</GridItem>
                <GridItem fontWeight="bold">Shirt</GridItem>
                <GridItem fontWeight="bold">Phone</GridItem>
                <GridItem fontWeight="bold">Address</GridItem>
                <GridItem fontWeight="bold">Date</GridItem>
                <GridItem fontWeight="bold">Latitude</GridItem>
                <GridItem fontWeight="bold">Longitude</GridItem>
                {data.map((item, index) => (
                  <>
                    <GridItem>{item.name}</GridItem>
                    <GridItem>{item.shirt}</GridItem>
                    <GridItem>{item.phone}</GridItem>
                    <GridItem>{item.address}</GridItem>
                    <GridItem>{item.date}</GridItem>
                    <GridItem>{item?.location?.lat}</GridItem>
                    <GridItem>{item?.location?.long}</GridItem>
                  </>
                ))}
              </Grid>
            </Box>
          </Wrap>
        </Flex>
      ) : (
        <Flex flexDirection={"column"} alignItems={"center"} gap={10}>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
            <Heading children="New requests" ml={"4"} />
          </Box>
          <Wrap>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
              <Grid templateColumns="repeat(7, 1fr)" gap="4">
                <GridItem fontWeight="bold">Name</GridItem>
                <GridItem fontWeight="bold">Shirt</GridItem>
                <GridItem fontWeight="bold">Phone</GridItem>
                <GridItem fontWeight="bold">Address</GridItem>
                <GridItem fontWeight="bold">Date</GridItem>
                <GridItem fontWeight="bold">Latitude</GridItem>
                <GridItem fontWeight="bold">Longitude</GridItem>
                {data.map((item, index) => (
                  <>
                    <GridItem>{item.name}</GridItem>
                    <GridItem>{item.shirt}</GridItem>
                    <GridItem>{item.phone}</GridItem>
                    <GridItem>{item.address}</GridItem>
                    <GridItem>{item.date}</GridItem>
                    <GridItem>{item?.location?.lat}</GridItem>
                    <GridItem>{item?.location?.long}</GridItem>
                  </>
                ))}
              </Grid>
            </Box>
          </Wrap>
        </Flex>
      )}
    </>
  );
};

export default Dashboard;
