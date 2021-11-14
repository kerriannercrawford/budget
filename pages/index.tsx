import type { NextPage } from 'next'
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@mui/material/Container';

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Welcome to your budget</h1>
      </Container>
    </Layout>
  )
}

export default Home;
