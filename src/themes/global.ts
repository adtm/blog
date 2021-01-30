import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: props => ({
    body: {
      color: mode('white', 'black')(props),
      bg: mode('black', 'white')(props),
    },
  }),
};
 

const theme = extendTheme({
  styles,
});

export default theme;