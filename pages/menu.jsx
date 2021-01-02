import Head from "next/head";
import FoodList from "../components/menu/food-list";
import Navbar from "../components/navbar";
import "../styles/menu.module.scss";

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Menu - Pycha Micha</title>
      </Head>
      <Navbar color="white" />
      <FoodList />
      <div className="container">
        <div>
          <p className="redcol">asda</p>
        </div>
      </div>
    </div>
  );
}
