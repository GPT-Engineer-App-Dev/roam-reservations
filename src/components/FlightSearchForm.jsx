import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const FlightSearchForm = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for flights:', { departure, arrival, departureDate, returnDate });
    // Here you would typically call an API or update app state
  };

  return (
    <Box as="form" onSubmit={handleSearch} width="100%" maxWidth="500px" margin="auto">
      <VStack spacing={4}>
        <HStack width="100%" spacing={4}>
          <FormControl isRequired>
            <FormLabel>From</FormLabel>
            <Input
              placeholder="Departure City"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>To</FormLabel>
            <Input
              placeholder="Arrival City"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
          </FormControl>
        </HStack>
        <HStack width="100%" spacing={4}>
          <FormControl isRequired>
            <FormLabel>Departure Date</FormLabel>
            <Input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Return Date</FormLabel>
            <Input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </FormControl>
        </HStack>
        <Button type="submit" colorScheme="teal" leftIcon={<FaSearch />} width="100%">
          Search Flights
        </Button>
      </VStack>
    </Box>
  );
};

export default FlightSearchForm;