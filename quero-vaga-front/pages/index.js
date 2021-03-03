import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ message }) {
  return (
    <div className={styles.container}>
      Message from Back: { JSON.stringify(message) }
    </div>
  )
}

export async function getServerSideProps() {
  const url = `http://${process.env.QUERO_VAGA_BACK_HOST}:${process.env.QUERO_VAGA_BACK_PORT}/`;
  console.info('Fetching', url);
  const res = await fetch(url);
  const message = await res.json();
  console.info('Received', message);
  return {
    props: {
      message
    }
  }
}
