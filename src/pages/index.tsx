import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import NavBar from '@/components/NavBar';


const inter = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <NavBar  />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='font-bold' >Leron T</h1>
      </main>
    </>
  );
}
