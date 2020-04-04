import React from 'react';
import Head from 'next/head';

const Index = ({ title, description }) => {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="2KGqPIZxsxBUb_-I-U39NPxAX7RFv5L1kLV4GGt7vdw"
      />
      <meta csharset="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        name="keywords"
        content="Mustafa,Alfar,Front-end,coding,programmer,programming,web,react,reactjs,portfolio"
      />
      <meta name="author" content="Mustafa Alfar" />
    </Head>
  );
};

export default Index;
