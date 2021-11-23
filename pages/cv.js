import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


export default function Product1() {
  return (
    <>
         <Head>
          <title>CV Carol</title>
        </Head>
       

      <h1>CV Carol</h1>
      <h2>
      
  <Image
    src="/images/cv.png" // Route of the image file
    height={200} // Desired size with correct aspect ratio
    width={200} // Desired size with correct aspect ratio
    alt="Almondêga"
 

  />

<section>
        <p>[Your Self Introduction]</p>

        <p>[Your Self Introduction]</p>

         <p>[Your Self Introduction]</p>
    
      </section>
      <section>
        <p>OI
        Gosto de comer pizza</p>
         <p>que bom</p>
    
      </section>
      
        <Link href="/">
          <a>Voltar para produtos</a>
        </Link>
      </h2>
    </>
  )
}

