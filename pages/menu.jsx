import Head from "next/head";
import FoodList from '../components/menu/food-list';
import Navbar from "../components/navbar";
import "../styles/menu.module.scss";

export default function Menu() {
  return (
    <div>
      <Navbar />
      
        <Head>
          <title>Menu - Pycha Micha</title>
        </Head>
        <FoodList/>
        <div className="container">
        <div>
          <p className="redcol">asda</p>
        </div>
      </div>
    </div>
  );
}
