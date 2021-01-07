import Head from "next/head";
import FoodList from "../components/menu/food-list";
import Navbar from "../components/navbar";
import "../styles/menu.module.scss";
import {getAllPosts} from '../api/api.js' ;


export default function Menu({ allPosts: { edges } }) {
  console.log(edges);
  return (
    <div>
      <Head>
        <title>Menu - Pycha Micha</title>
      </Head>
      <Navbar color="white" />
      <FoodList foodList={edges}/>
      <div className="container">
        <div>
          <p className="redcol">asda</p>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}
