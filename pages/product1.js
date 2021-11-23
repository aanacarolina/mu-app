import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


export default function Product1() {
  return (
    <>
         <Head>
          <title>Almondêga Veg&Tal</title>
        </Head>
       

      <h1>Produto 1</h1>
      <h2>
      
  <Image
    src="/images/almondega.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Almondêga"
  />

<section>
<p>Almondêga Veg e Tal.</p>
            <p>⭐⭐⭐⭐</p>
            <p>R$30,00</p>
    
      </section>
      
        <Link href="/">
          <a>Voltar para produtos</a>
        </Link>
      </h2>
    </>
  )
}

