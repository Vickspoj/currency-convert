// Import Chakra UI components: Box and Text
import { Box, Text } from '@chakra-ui/react';

// ConverterDisplay component displaying the currency conversion result
const ConverterDisplay = ({
  amount,
  currencyOne,
  currencyTwo,
  convertedAmount,
  date,
  time,
}) => {
  return (
    <Box textAlign="right">
      {/* Display the original amount and base currency */}
      <Text fontSize="lg" fontWeight="bold">
        {amount} {currencyOne}
      </Text>
      {/* Display the converted amount and target currency */}
      <Text fontSize="2xl" fontWeight="bold" color="purple.500">
        {convertedAmount} {currencyTwo}
      </Text>
      {/* Display information about the collected market rates */}
      <Text fontSize="xs" color="gray.500">
        Market rates collected - {date} {time}
      </Text>
    </Box>
  );
};

export default ConverterDisplay; // Export the ConverterDisplay component
