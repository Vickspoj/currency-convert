// Import Chakra UI components: Box and Text
import { Box, Text } from '@chakra-ui/react';

// ConverterHeader component displaying the header of the currency conversion calculator
const ConverterHeader = () => {
  return (
    <Box
      textAlign="center"
      color="white"
      margin={{ base: '10', sm: '16' }}
      marginBottom="10"
    >
      {/* Display the title in bold with variable font size */}
      <Text fontWeight="bold" fontSize={{ base: '2xl', sm: '3xl' }}>
        Currency Converter by Victoria Padilla
      </Text>
      {/* Display a subtitle in light font and small size */}
      <Text fontWeight="light" fontSize="xs">
        Up to date FX rates
      </Text>
    </Box>
  );
};

export default ConverterHeader; // Export the ConverterHeader component
