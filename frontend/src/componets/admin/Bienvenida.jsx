import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";


import { Footer } from "../footer/Footer";
import { FaBed, FaCalendarAlt, FaConciergeBell, FaUser } from "react-icons/fa";

export const Bienvenida = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      backgroundImage="url('/img/fondoAdmin.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
    >
      <Flex
        p={20}
        justifyContent={"center"}
        w={"100%"}
        h={"50px"}
        bg="primary.500"
      >
        <Image src="/icons/LogoAdmin.svg" alt="Oceano Hotel" h="30px" />
      </Flex>
      <Text fontSize="2xl"
       fontWeight="bold" 
       color="black"
       textAlign={'center'}
       pb={10}
       mt={10}
       >
        Bienvenido
      </Text>

      <VStack
        spacing={8}
        justify="center"
        bg="rgba(255,255,255,0.7)"
        borderRadius="3xl"
        mx={5}
        mb={20}
        p={10}
      >
        <SimpleGrid columns={2} spacing={4} width="100%">
          {[
            { icon: FaBed, text: "Habitaciones" },
            { icon: FaCalendarAlt, text: "Reservas" },
            { icon: FaConciergeBell, text: "Servicios" },
            { icon: FaUser, text: "Perfil" },
          ].map((item, index) => (
            <Button
              key={index}
              leftIcon={<item.icon />}
              bg="primary.500"
              color="white"
              size="lg"
              height="100px"
              fontSize="md"
              borderRadius="xl"
              _hover={{ bg: "blue.700" }}
            >
              {item.text}
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
      <Footer/>
    </Box>
  );
};
