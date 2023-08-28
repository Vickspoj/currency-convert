// Import Chakra UI components: Avatar, Flex, and Select
import {  Flex, Select } from '@chakra-ui/react';


// ConverterOption component displaying an option to select a currency
const ConverterOption = ({
  symbol,
  currencyList,
  onCurrencyChange,
  currency,
}) => {

  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      {/* Currency selector using an unstyled Select element */}
      <Select
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {/* Iterate through the currency list and display options */}
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency} - {symbol[currency]}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default ConverterOption; // Export the ConverterOption component
