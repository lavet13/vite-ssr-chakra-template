import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Header: FC = () => {
  return (
    <>
      <Heading>THIS is Header!</Heading>
      <Outlet />
    </>
  );
};

export default Header;
