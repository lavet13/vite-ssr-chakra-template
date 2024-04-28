import { Box, Button, Img, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import '../test.css';

const Home: FC = () => {
  return (
    <Box>
      <Box>
        <a href='https://vitejs.dev' target='_blank'>
          <Img
            src='/vite.svg'
            sx={{
              h: '6em',
              p: '1.5em',
              willChange: 'filter',
              _hover: {
                filter: `drop-shadow(0 0 2em #646cffaa)`,
              },
            }}
            alt='Vite logo'
          />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <Img
            src={reactLogo}
            sx={{
              h: '6em',
              p: '1.5em',
              willChange: 'filter',
              _hover: {
                filter: `drop-shadow(0 0 2em #61dafbaa)`,
              },
            }}
            alt='React logo'
          />
        </a>
      </Box>
      <h1>Vite + React + TS + SSR</h1>
      <Counter />
      <Text>
        Click on the Vite and React logos to learn more
      </Text>
      <Text>
        Go to different pages:
        <Button variant="link" as={RouterLink} to="/not-found">Not Found!</Button>
      </Text>
    </Box>
  );
};

export default Home;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='card'>
      <Button variant="outline" onClick={() => setCount(count => count + 1)}>
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
