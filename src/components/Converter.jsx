// Import the 'useCurrency' hook from the relative path '../hooks/useCurrency'
import { useCurrency } from '../hooks/useCurrency';
// Import the 'RepeatIcon' icon from '@chakra-ui/icons'
import { RepeatIcon } from '@chakra-ui/icons';
// Import Chakra UI components: Text, Spinner, Box, Grid, and GridItem
import { Text, Spinner, Box, Grid, GridItem } from '@chakra-ui/react';

import Media from '../Social/socialMedia';
// Import custom components: ConverterHeader, ConverterOption, ConverterInput, and ConverterDisplay
import {
  ConverterHeader,
  ConverterOption,
  ConverterInput,
  ConverterDisplay,
} from './index';

// Converter component displaying a currency conversion calculator
const Converter = () => {
  // Destructure variables and functions from the 'useCurrency' hook
  const {
    amount,
    setAmount,
    currencyOne,
    setCurrencyOne,
    currencyTwo,
    setCurrencyTwo,
    symbolsData,
    isLoading,
    isError,
    convertedAmount,
    date,
    time,
    currencyList,
  } = useCurrency();

  // If there's an error, display a bold red message
  if (isError)
    return (
      <Text fontWeight="bold" fontSize="3xl" color="red" my="10">
        Something has gone wrong
      </Text>
    );

  // If loading, show a purple loading spinner
  if (isLoading)
    return (
      <Spinner
        margin="auto 0"
        size="xl"
        thickness="4px"
        speed="0.6s"
        color="purple.500"
        emptyColor="purple.200"
      />
    );

  // Render the interface of the currency conversion calculator
  return (
    <Box width={{ base: '90vw', sm: '65vw' }} margin="0 auto">
      <ConverterHeader /> {/* Header of the converter */}
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        padding={{ base: '6', sm: '10' }}
        gap="1rem"
        backgroundColor="white"
        borderRadius="lg"
      >
        {/* Section for selecting the base currency */}
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf="center"
          alignSelf="center"
        >
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </GridItem>

        {/* Icon for currency exchange (to swap currencies) */}
        <GridItem
          display={{ base: 'none', sm: 'block' }}
          colSpan={1}
          justifySelf="center"
          alignSelf="center"
        >
          <RepeatIcon boxSize="2rem" color="purple.300" />
        </GridItem>

        {/* Section for selecting the target currency */}
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf="center"
          alignSelf="center"
        >
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </GridItem>

        {/* Input field for the amount to convert */}
        <GridItem colSpan={2}>
          <ConverterInput value={amount} onAmountChange={setAmount} />
        </GridItem>

        {/* Section to display the conversion result */}
        <GridItem colSpan={3} justifySelf="right" alignSelf="right">
          <ConverterDisplay
            amount={amount}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
          />
        </GridItem>
      </Grid>
      <Text
        textAlign="center"
        marginTop="1.5rem"
        color="whiteAlpha.600"
        fontSize="sm"
      >
        <Media/>
      </Text>
    </Box>
  );
};

export default Converter; // Export the Converter component
