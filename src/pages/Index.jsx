import { Container, Text, VStack, Heading, Image, Tabs, TabList, TabPanels, Tab, TabPanel, Icon } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";
import FlightSearchForm from "../components/FlightSearchForm";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Travel Booking</Heading>
        <Text fontSize="xl" textAlign="center">Book your flights, hotels, and car rentals all in one place.</Text>
        <Tabs isFitted variant="enclosed" width="100%">
          <TabList mb="1em">
            <Tab><Icon as={FaPlane} mr={2} />Flights</Tab>
            <Tab><Icon as={FaHotel} mr={2} />Hotels</Tab>
            <Tab><Icon as={FaCar} mr={2} />Car Rentals</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FlightSearchForm />
            </TabPanel>
            <TabPanel>
              <Text>Hotel booking coming soon!</Text>
            </TabPanel>
            <TabPanel>
              <Text>Car rental booking coming soon!</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" boxSize="400px" objectFit="cover" />
      </VStack>
    </Container>
  );
};

export default Index;