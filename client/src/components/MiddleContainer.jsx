import React, { useRef, useState } from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {
  Wrap,
  Grid,
    GridItem,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Icon,
  useBreakpointValue,
  Input,
  Textarea,
  InputLeftElement,
  InputGroup,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";

import User from "../assets/icons/User";
import Tick from "../assets/icons/Tick";
import Star from "../assets/icons/Star";
import Penta from "../assets/icons/Penta";
import FourSquare from "../assets/icons/FourSquare";
import mobile from '../assets/mobile.png';
import mobilesbg from '../assets/mobilesbg.png'
import Apple from "../assets/icons/Apple";
import Playstore from "../assets/icons/Playstore";
import DesignFoot from "../assets/icons/DesignFoot";

import Slider from "react-slick";
import CarouselSlider from "./CarouselSlider";




const features = [
  {
    featureName: "Feature Name",
    featureContent: `Lorem ipsum dolor sit amet,
consectetur adipiscing elit`,
    featureIcon: "star",
    featureColor: "#2D69F0",
  },
  {
    featureName: "Feature Name",
    featureContent: `"Lorem ipsum dolor sit amet,
consectetur adipiscing elit"`,
    featureIcon: "tick",
    featureColor: "#DD246E",
  },
  {
    featureName: "Feature Name",
    featureContent: `"Lorem ipsum dolor sit amet,
consectetur adipiscing elit"`,
    featureIcon: "penta",
    featureColor: "#6759FF",
  },
  {
    featureName: "Feature Name",
    featureContent: `"Lorem ipsum dolor sit amet,
consectetur adipiscing elit"`,
    featureIcon: "foursquare",
    featureColor: "#0CAE74",
  },
];
const paymentOptions = [
  {
    option: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    option: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    option: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
];

const MiddleContainer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      {isMobile ? (
        <Wrap width={"100%"}>
          <Box
            width={"100%"}
            height={"85vh"}
            display={"flex"}
            flexDir={"column"}
          >
            <Box
              width={"100%"}
              height={"30vh"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Heading fontSize={"25px"}>
                Why To choose{" "}
                <Box as="p" color={"#6759FF"}>
                  Laundry Shop?
                </Box>
              </Heading>
              <Text
                mt={"8"}
                fontSize={"14px"}
                color={"#0A1C1F"}
                opacity={"0.5"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </Box>
            <Box width={"100%"}>
              <CarouselSlider />
            </Box>
          </Box>
          <Flex flexDirection={"column"} gap={4} width={"100%"} pl={"8"}>
            <Heading
              color={"#6759FF"}
              children={"Features"}
              fontSize={"15px"}
              textTransform={"uppercase"}
            />

            <Heading
              children={"Laundry App Features"}
              fontSize={"25px"}
              textTransform={"capitalize"}
            />
            <Box>
              <Image src={mobile} />
            </Box>
            <Box>
              <Grid gap={10}>
                {features.map((item, index) => (
                  <GridItem key={index}>
                    <InputGroup textAlign={"center"} mb={"6"} color={"#6759FF"}>
                      <Heading
                        color={"black"}
                        children={item.featureName}
                        pl={"12"}
                        fontSize={"18px"}
                      />
                      <InputLeftElement
                        width={"20px"}
                        height={"20px"}
                        children={
                          item.featureIcon === "tick" ? (
                            <Tick fill="#6759FF" />
                          ) : item.featureIcon === "star" ? (
                            <Star fill="#6759FF" />
                          ) : item.featureIcon === "penta" ? (
                            <Penta fill="#6759FF" />
                          ) : item.featureIcon === "foursquare" ? (
                            <FourSquare fill="#6759FF" />
                          ) : (
                            {}
                          )
                        }
                      />
                    </InputGroup>
                    <Text width={"350px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={4}
            pt={"8"}
            width={"100%"}
            pl={"8"}
            style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
          >
            <Text
              mb={"3"}
              fontSize={"15px"}
              color={"#6759FF"}
              textTransform={"uppercase"}
            >
              Features
            </Text>
            <Heading
              fontSize={"25px"}
              children="Laundry Stores Near you"
              mb={"6"}
              textTransform={"capitalize"}
            />
            <Box>
              <Image src={mobile} />
            </Box>
            <Flex flexDir={"column"}>
              <Grid gap={10}>
                {features.map((item, index) => (
                  <GridItem key={index}>
                    <InputGroup textAlign={"center"} mb={"6"} color={"#6759FF"}>
                      <Heading
                        color={"black"}
                        children={item.featureName}
                        pl={"12"}
                        fontSize={"18px"}
                      />
                      <InputLeftElement
                        width={"20px"}
                        height={"20px"}
                        children={
                          item.featureIcon === "tick" ? (
                            <Tick fill="#6759FF" />
                          ) : item.featureIcon === "star" ? (
                            <Star fill="#6759FF" />
                          ) : item.featureIcon === "penta" ? (
                            <Penta fill="#6759FF" />
                          ) : item.featureIcon === "foursquare" ? (
                            <FourSquare fill="#6759FF" />
                          ) : (
                            {}
                          )
                        }
                      />
                    </InputGroup>
                    <Text width={"350px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={4}
            pt={"8"}
            width={"100%"}
            pl={"8"}
          >
            <Text
              mb={"3"}
              fontSize={"15px"}
              color={"#6759FF"}
              textTransform={"uppercase"}
            >
              Features
            </Text>
            <Heading
              fontSize={"25px"}
              children="Quick Payment"
              mb={"6"}
              textTransform={"capitalize"}
            />
            <Box>
              <Image src={mobile} />
            </Box>
            <Grid gap={8}>
              <InputGroup textAlign={"center"} color={"#6759FF"}>
                <Heading
                  color={"black"}
                  children={"Easy Payment Mode"}
                  fontSize={"18px"}
                />
              </InputGroup>
              <Text width={"300px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              {paymentOptions.map((item, index) => (
                <GridItem key={index}>
                  <InputGroup color={"#6759FF"}>
                    <Text
                      width={"300px"}
                      color={"black"}
                      children={item.option}
                      fontSize={"14px"}
                      pl={"12"}
                    />
                    <InputLeftElement height={"25px"} width={"20px"}>
                      &#10004;
                    </InputLeftElement>
                  </InputGroup>
                </GridItem>
              ))}
            </Grid>
          </Flex>
          <Box
            height={"600px"}
            width={"100%"}
            style={{
              backgroundImage: `url(${mobilesbg})`,
              backgroundSize: "cover",
              backgroundColor: "rgba(225, 225, 225, 0.2)",
            }}
          >
            <Flex
              flexDir={"column"}
              ml={"15px"}
              mt={"25px"}
              padding={"4"}
              gap={4}
            >
              <Text
                children="Design"
                fontSize={"15px"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                letterSpacing={"0.16em"}
              />
              <Heading children="User Friendly App" fontSize={"25px"} />
              <Text
                width={"335px"}
                textTransform={"capitalize"}
                fontWeight={"semibold"}
                fontSize={"14px"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Flex>
          </Box>
        </Wrap>
      ) : (
        <Wrap height={"500vh"} width={"100%"}>
          <Box
            width={"100%"}
            height={"30vh"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading fontSize={"40px"}>
              Why To choose{" "}
              <Box as="span" color={"#6759FF"}>
                Laundry Shop
              </Box>
              ?{" "}
            </Heading>
            <Text mt={"8"} fontSize={"18px"} color={"#0A1C1F"} opacity={"0.5"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} width={"100%"}>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr" }}
              gap={10}
            >
              {features.map((item, index) => (
                <GridItem
                  key={index}
                  borderRadius={"1vmax"}
                  bg={item.featureColor}
                  width={"270px"}
                  height={"254px"}
                  display={"flex"}
                  flexDir={"column"}
                  padding={"6"}
                  gap={6}
                  Text
                  _hover={{
                    cursor: "pointer",

                    transform: "scale(1.1)",
                  }}
                >
                  {item.featureIcon === "tick" ? (
                    <Tick />
                  ) : item.featureIcon === "star" ? (
                    <Star />
                  ) : item.featureIcon === "penta" ? (
                    <Penta />
                  ) : item.featureIcon === "foursquare" ? (
                    <FourSquare />
                  ) : (
                    {}
                  )}

                  <Heading
                    children={item.featureName}
                    fontSize={"20px"}
                    color={"white"}
                  />
                  <Text color={"white"} fontSize={"18px"}>
                    {" "}
                    {item.featureContent}
                  </Text>
                  <Text
                    color={"white"}
                    fontSize={"18px"}
                    mt={"3"}
                    Text
                    _hover={{
                      cursor: "pointer",

                      fontWeight: "semibold",

                      transform: "scale(1.1)",
                    }}
                  >
                    Know More &rarr;
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Flex
            width={"100%"}
            height={"720px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box width={"45%"}>
              <Image src={mobile} />
            </Box>
            <Flex flexDir={"column"}>
              <Text mb={"3"} fontSize={"18px"} color={"#6759FF"}>
                FEATURES
              </Text>
              <Heading children="Laundary App Features" mb={"6"} />
              <Grid gap={10}>
                {features.map((item, index) => (
                  <GridItem key={index}>
                    <InputGroup
                      textAlign={"center"}
                      mb={"6"}
                      color={"#6759FF"}
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      <Heading
                        color={"black"}
                        children={item.featureName}
                        pl={"12"}
                        fontSize={"25px"}
                      />
                      <InputLeftElement
                        children={
                          item.featureIcon === "tick" ? (
                            <Tick fill="#6759FF" />
                          ) : item.featureIcon === "star" ? (
                            <Star fill="#6759FF" />
                          ) : item.featureIcon === "penta" ? (
                            <Penta fill="#6759FF" />
                          ) : item.featureIcon === "foursquare" ? (
                            <FourSquare fill="#6759FF" />
                          ) : (
                            {}
                          )
                        }
                      />
                    </InputGroup>
                    <Text width={"575px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Flex>
          <Flex
            width={"100%"}
            height={"720px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            style={{ backgroundColor: "rgba(225, 225, 225, 0.2)" }}
          >
            <Flex flexDir={"column"}>
              <Text mb={"3"} fontSize={"18px"} color={"#6759FF"}>
                Choose from different stores
              </Text>
              <Heading children="Laundry Stores Near you" mb={"6"} />
              <Grid gap={10}>
                {features.map((item, index) => (
                  <GridItem key={index}>
                    <InputGroup
                      textAlign={"center"}
                      mb={"6"}
                      color={"#6759FF"}
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      <Heading
                        color={"black"}
                        children={item.featureName}
                        pl={"12"}
                        fontSize={"25px"}
                      />
                      <InputLeftElement
                        children={
                          item.featureIcon === "tick" ? (
                            <Tick fill="#6759FF" />
                          ) : item.featureIcon === "star" ? (
                            <Star fill="#6759FF" />
                          ) : item.featureIcon === "penta" ? (
                            <Penta fill="#6759FF" />
                          ) : item.featureIcon === "foursquare" ? (
                            <FourSquare fill="#6759FF" />
                          ) : (
                            {}
                          )
                        }
                      />
                    </InputGroup>
                    <Text width={"575px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
            <Box width={"45%"}>
              <Image src={mobile} />
            </Box>
          </Flex>
          <Flex
            width={"100%"}
            height={"720px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box width={"45%"}>
              <Image src={mobile} />
            </Box>
            <Flex flexDir={"column"}>
              <Text mb={"3"} fontSize={"18px"} color={"#6759FF"}>
                PAYMENT
              </Text>
              <Heading children="Quick Payment" mb={"6"} />
              <Grid gap={8}>
                <InputGroup textAlign={"center"} color={"#6759FF"}>
                  <Heading
                    color={"black"}
                    children={"Easy Payment Mode"}
                    fontSize={"25px"}
                  />
                </InputGroup>
                <Text width={"575px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                {paymentOptions.map((item, index) => (
                  <GridItem key={index}>
                    <InputGroup
                      textAlign={"center"}
                      color={"#6759FF"}
                      Text
                      _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                        fontWeight: "semibold",

                        transform: "scale(1.2)",
                      }}
                    >
                      <Text
                        color={"black"}
                        children={item.option}
                        fontSize={"18px"}
                        pl={"12"}
                      />
                      <InputLeftElement height={"28px"}>
                        &#10004;{" "}
                      </InputLeftElement>
                    </InputGroup>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Flex>

          <Box
            minHeight={"100vh"}
            width={"100%"}
            style={{
              backgroundImage: `url(${mobilesbg})`,
              backgroundSize: "cover",
              backgroundColor: "rgba(225, 225, 225, 0.2)",
            }}
          >
            <Flex flexDir={"column"} ml={"120px"} /*mt={"100px"}*/ gap={6}>
              <Text
                children="Design"
                fontSize={"18px"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                letterSpacing={"0.16em"}
              />
              <Heading children="User Friendly App" fontSize={"50px"} />
              <Text
                width={"600px"}
                textTransform={"capitalize"}
                fontWeight={"semibold"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Box>
                <Button height={"50px"} width={"165px"}>
                  <Apple /> &nbsp; Apple Store
                </Button>{" "}
                &nbsp;&nbsp;
                <Button height={"50px"} width={"165px"}>
                  <Playstore /> &nbsp; Play Store
                </Button>
              </Box>
            </Flex>
          </Box>
        </Wrap>
      )}
    </>
  );
};

export default MiddleContainer;







