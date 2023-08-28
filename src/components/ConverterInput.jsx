// Import Chakra UI components: FormLabel and Input
import { FormLabel, Input } from '@chakra-ui/react';

// ConverterInput component displaying the input field for the amount to convert
const ConverterInput = ({ value, onAmountChange }) => {
  return (
    <>
      {/* Form label for the amount with bold style and purple color */}
      <FormLabel htmlFor="amount" fontWeight="bold" color="purple.500">
        Amount
      </FormLabel>
      {/* Numeric input field with large size */}
      <Input
        id="amount"
        size="lg"
        type="number"
        min={0}
        value={value}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </>
  );
};

export default ConverterInput; // Export the ConverterInput component
