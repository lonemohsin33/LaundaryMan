import React, { useRef, useState } from "react";
import {
  Wrap,
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import tc1 from "../assets/tc1.svg";
import vtc1 from "../assets/vtc1.svg";


import "./tcontainer.css";
import User from "../assets/icons/User";
import Phone from "../assets/icons/Phone";
import Shirt from "../assets/icons/Shirt";
import Address from "../assets/icons/Address";

const Topcontainer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [shirt, setShirt] = useState("");
   const [address, setAddress] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
   const formData = {}
   formData.name= name
   formData.phone = phone
   formData.shirt = shirt
    formData.address = address
    formData.date = new Date().toLocaleString();
    
    const res = await fetch("https://laundary-epml.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    const data = await res.json()
   

    setName("")
    setAddress("")
    setPhone("")
    setShirt("")
  
}

  return (
    <>
      {isMobile ? (
        <Wrap
          width={"100%"}
          height={"921px"}
          style={{ backgroundImage: `url(${tc1})` }}
        >
          <svg
            className="vtcm"
            viewBox="0 0 308 467"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M349.543 45.389C410.544 51.796 478.988 21.5234 526.498 55.308C575.549 90.1884 578.759 152.686 577.767 207.68C576.817 260.342 557.119 309.081 521.155 351.528C478.228 402.193 431.369 466.574 358.86 466.047C286.749 465.522 256.353 388.524 200.294 349.195C133.424 302.282 22.7869 290.045 4.19576 217.23C-15.353 140.664 35.7535 51.0394 114.202 12.0041C185.872 -23.658 267.508 36.7727 349.543 45.389Z"
              fill="#DD246E"
            />
          </svg>
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            p={"2vmax"}
            position={"absolute"}
          >
            <Heading
              children={"Logo Space"}
              fontFamily={"cursive"}
              fontSize={"25px"}
              fontWeight={"semibold"}
            />
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              aria-label="Toggle navigation"
              icon={<Icon as={HamburgerIcon} />}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottom={"1px solid"}>Menu</DrawerHeader>

                <DrawerBody display={"flex"} flexDir={"column"}>
                  <Button variant={"ghost"} mb={"2"} colorScheme={"blue"}>
                    Home
                  </Button>
                  <Button variant={"ghost"} mb={"2"} colorScheme={"blue"}>
                    About us
                  </Button>
                  <Button variant={"ghost"} mb={"2"} colorScheme={"blue"}>
                    Courses
                  </Button>
                  <Button variant={"ghost"} mb={"2"} colorScheme={"blue"}>
                    Mock Tests
                  </Button>
                  <Button variant={"ghost"} mb={"2"} colorScheme={"blue"}>
                    Blog
                  </Button>
                </DrawerBody>

                <DrawerFooter>
                  <Button
                    variant="button"
                    bg={"#6759FF"}
                    mr={3}
                    color={"white"}
                    onClick={onClose}
                  >
                    Contact Us
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            left={"20px"}
            position={"absolute"}
            top={"100px"}
          >
            <Box width={"335px"}>
              <Box width={"320px"}>
                <Heading fontSize={"35px"} fontFamily={"cursive"}>
                  Get The Best Laundry Service At your
                  <Box as={"span"} color="#6759FF">
                    {" "}
                    Door Step
                  </Box>
                </Heading>
              </Box>
              <Box width={"300px"} mt={"4"}>
                <Heading
                  color={"#010101"}
                  fontSize={"14px"}
                  fontWeight={"light"}
                  fontFamily={"cursive"}
                >
                  Book laundry service with our app in just few & easy steps
                </Heading>
              </Box>
              <Box mt={"4"} w={"300px"}>
                <Button width={"70%"} bg={"#6759FF"} color={"white"}>
                  {" "}
                  Get Started &rarr;
                </Button>
              </Box>
            </Box>
            <Box
              width={"335px"}
              height={"446px"}
              bg={"white"}
              mt={"8"}
              borderRadius={"2vmax"}
              p={"4"}
            >
              <form width={"90%"} onSubmit={handleSubmit}>
                <InputGroup>
                  <Input
                    placeholder="Name"
                    mb={"3"}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    size="md"
                    fontFamily={"cursive"}
                    fontSize={"14px"}
                    color={"#777777"}
                  />
                  <InputLeftElement pointerEvents={"none"}>
                    <User />
                  </InputLeftElement>
                </InputGroup>
                <InputGroup>
                  <Input
                    placeholder="Phone Number"
                    mb={"3"}
                    value={phone}
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    fontFamily={"cursive"}
                    fontSize={"14px"}
                    color={"#777777"}
                  />
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<Phone />}
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    placeholder="Shirt"
                    mb={"3"}
                    type="text"
                    value={shirt}
                    onChange={(e) => setShirt(e.target.value)}
                    fontFamily={"cursive"}
                    fontSize={"14px"}
                    color={"#777777"}
                  />
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<Shirt />}
                  />
                </InputGroup>
                <InputGroup>
                  <Textarea
                    pl={"10"}
                    placeholder="Address"
                    height={"170px"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fontFamily={"cursive"}
                    fontSize={"14px"}
                    color={"#777777"}
                    mb={"3"}
                  />

                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<Address />}
                  />
                </InputGroup>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"3"}
                >
                  <Button
                    bg={" #6759FF"}
                    color={"white"}
                    width={"80%"}
                    type="submit"
                  >
                    Book Service &rarr;
                  </Button>
                </Box>
              </form>
            </Box>
          </Flex>
        </Wrap>
      ) : (
        <Wrap
          width={"100%"}
          height={"743px"}
          style={{ backgroundImage: `url(${tc1})` }}
        >
          <svg
            className="vtc1"
            width="308"
            height="467"
            viewBox="0 0 308 467"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M349.543 45.389C410.544 51.796 478.988 21.5234 526.498 55.308C575.549 90.1884 578.759 152.686 577.767 207.68C576.817 260.342 557.119 309.081 521.155 351.528C478.228 402.193 431.369 466.574 358.86 466.047C286.749 465.522 256.353 388.524 200.294 349.195C133.424 302.282 22.7869 290.045 4.19576 217.23C-15.353 140.664 35.7535 51.0394 114.202 12.0041C185.872 -23.658 267.508 36.7727 349.543 45.389Z"
              fill="#DD246E"
            />
          </svg>

          <Box
            width={"80%"}
            height={"18vh"}
            display={"flex"}
            left={"140px"}
            position={"absolute"}
            alignItems={"center"}
          >
            <Box width={"40%"}>
              <Heading
                children={"Logo Space"}
                fontFamily={"cursive"}
                fontSize={"40px"}
                fontWeight={"semibold"}
              />
            </Box>
            <Flex
              fontFamily={"cursive"}
              fontWeight={"semibold"}
              fontSize={"18px"}
              justifyContent={"space-evenly"}
              width={"60%"}
              height={"8vh"}
              alignItems={"center"}
            >
              <Text
                Text
                _hover={{
                  cursor: "pointer",
                  color: "blue.400",
                  fontWeight: "semibold",

                  transform: "scale(1.2)",
                }}
              >
                Home
              </Text>
              <Text
                Text
                _hover={{
                  cursor: "pointer",
                  color: "blue.400",
                  fontWeight: "semibold",

                  transform: "scale(1.2)",
                }}
              >
                About Us
              </Text>
              <Text
                Text
                _hover={{
                  cursor: "pointer",
                  color: "blue.400",
                  fontWeight: "semibold",

                  transform: "scale(1.2)",
                }}
              >
                Courses
              </Text>
              <Text
                Text
                _hover={{
                  cursor: "pointer",
                  color: "blue.400",
                  fontWeight: "semibold",

                  transform: "scale(1.2)",
                }}
              >
                {" "}
                Mock Test
              </Text>
              <Text
                Text
                _hover={{
                  cursor: "pointer",
                  color: "blue.400",
                  fontWeight: "semibold",

                  transform: "scale(1.2)",
                }}
              >
                Blog
              </Text>
              <Button bg={"#6759FF"} color={"white"}>
                {" "}
                Contact Us
              </Button>
            </Flex>
          </Box>
          <Flex
            width={"80%"}
            height={"380px"}
            left={"140"}
            top={"260px"}
            justifyContent={"space-between"}
            position={"absolute"}
          >
            <Box>
              <Box width={"560px"}>
                <Heading fontSize={"60px"} fontFamily={"cursive"}>
                  Get The Best Laundry Service At Your{" "}
                  <Box as={"span"} color="#6759FF">
                    Door Step
                  </Box>
                </Heading>
              </Box>
              <Box width={"540px"} mt={"6"}>
                <Heading
                  color={"#010101"}
                  fontSize={"20px"}
                  fontWeight={"light"}
                  fontFamily={"cursive"}
                >
                  Book laundry service with our app in just few & easy steps
                </Heading>
              </Box>
              <Box mt={"8"} w={"540px"}>
                <Button
                  width={"50%"}
                  bg={"#6759FF"}
                  color={"white"}
                  fontSize={"18px"}
                  height={"50px"}
                >
                  {" "}
                  Get Started &rarr;
                </Button>
              </Box>
            </Box>
            <Box
              width={"660px"}
              height={"380px"}
              bg={"white"}
              borderRadius={"2vmax"}
              p={"4"}
            >
              <form width={"90%"} onSubmit={handleSubmit}>
                <Box display={"flex"}>
                  <InputGroup>
                    <Input
                      placeholder="Name"
                      mb={"3"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      size="md"
                      fontFamily={"cursive"}
                      fontSize={"14px"}
                      color={"#777777"}
                    />
                    <InputLeftElement pointerEvents={"none"}>
                      <User />
                    </InputLeftElement>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      placeholder="Phone Number"
                      mb={"3"}
                        value={phone}
                        type="number"
                      onChange={(e) => setPhone(e.target.value)}
                      fontFamily={"cursive"}
                      fontSize={"14px"}
                      color={"#777777"}
                    />
                    <InputLeftElement
                      pointerEvents={"none"}
                      children={<Phone />}
                    />
                  </InputGroup>
                </Box>
                <InputGroup>
                  <Input
                    placeholder="Shirt"
                    mb={"3"}
                    value={shirt}
                    onChange={(e) => setShirt(e.target.value)}
                    fontFamily={"cursive"}
                    fontSize={"14px"}
                    color={"#777777"}
                  />
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<Shirt />}
                  />
                </InputGroup>
                <InputGroup>
                  <Textarea
                    pl={"10"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    height={"170px"}
                    fontFamily={"cursive"}
                    fontSize={"14px"}
                    color={"#777777"}
                    mb={"3"}
                  />

                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<Address />}
                  />
                </InputGroup>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    bg={" #6759FF"}
                    color={"white"}
                    width={"50%"}
                    height={"50px"}
                    type="submit"
                  >
                    Book Service &rarr;
                  </Button>
                </Box>
              </form>
            </Box>
          </Flex>
        </Wrap>
      )}
    </>
  );
};

export default Topcontainer;
