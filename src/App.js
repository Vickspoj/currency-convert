// Import the Flex component from Chakra UI
import { Flex } from '@chakra-ui/react';
// Import the Converter component from the relative path './components/Converter'
import Converter from './components/Converter';


// App function that renders the main application
function App() {
  
  return (
    <>
      {/* Flex container to vertically center the Converter component */}
      <Flex
      bgGradient="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        height="100vh" // Container height equal to viewport height
        justifyContent="center" // Center the content horizontally
      >
        {/* Render the Converter component */}
        <Converter />
      </Flex>
    </>
  );
}

export default App; // Export the App function as the main component
