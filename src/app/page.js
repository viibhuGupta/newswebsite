import Image from 'next/image'

import Navbar from '@/Components/Navbar/Navbar'  
import Card from '@/Components/cards/Card';
import Card2nd from "@/Components/card2nd/card2nd"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Card/>
    <Card2nd/>

    </>
  )
}
