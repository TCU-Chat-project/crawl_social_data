import React from 'react';
import AppLayout from '@/components/Layout';

const HomePage = () => {
  return (
    <>
      <p>This is home page</p>
    </>
  );
};

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>;

export default HomePage;
