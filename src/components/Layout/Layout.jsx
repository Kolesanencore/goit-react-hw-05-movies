import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Container } from 'components/MovieList/MovieList.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
