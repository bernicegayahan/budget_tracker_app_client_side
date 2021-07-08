//import Head from 'next/head'
import Highlights from '../components/Highlights'
//import styles from '../styles/Home.module.css'
import View from '../components/View';
import Navbar from '../components/NavBar'

export default function Home() {
  return (
    <View title={"Budget Tracker App"}>
      <Highlights />
    </View>
  )
}
