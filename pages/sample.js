import Head from 'next/head';
import Image from 'next/image';
import HomeIcon from '../images/HomeIcon';
import styles from '../styles/Sample.module.css';
import First from './api/First';

export default function Sample() {
  return (
    <div style={{ backgroundColor: 'grey' }}>
      <div>Something</div>
      <HomeIcon />
      <HomeIcon /> <HomeIcon />
      <HomeIcon /> <HomeIcon />
      <HomeIcon />
    </div>
  );
}
