import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'
import 'animate.css'
import { TypeAnimation } from 'react-type-animation';

const poppins = Poppins({ weight: "400" })

export default function Home() {
  return (
    <main>
      <h1 className={poppins.className}>Hello</h1>
      <h1 className="animate__animated animate__bounce">An animated element</h1>
      <h1>Hello</h1>
      <TypeAnimation
        sequence={[
          'One', // Types 'One'
          1000, // Waits 1s
          'Two', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          'Two Three', // Types 'Three' without deleting 'Two'
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
    </main>
  )
}
