import React, {useEffect} from "react";
import { useRouter } from "next/router";
import Food from "./food";
import { getMedia } from "../../api/media";
import { convertId } from "../../helpers/convert-string-to-id";
import Image from "next/image";


const FoodList = ({ foodList }) => {
  const router = useRouter();

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0);
    }

    const element = document.getElementById(router.query?.message?.toString());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.query]);

  return (
    <div className="food-list__container">
      {foodList.map((y) => {
        return (
          <div className="flex food-list" id={convertId(y.name)} key={y.name}>
            <div className="food-list__category__text-container">
              <div className="food-list__category__title"> {y.name}</div>
              <div className="food-list__category__desc">
                {y.dishes.map((x) => {
                  return (
                    <div key={x.name}>
                      <Food
                        name={x.name}
                        description={x.description}
                        price={x.price}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="food-list__img">
              {y.img && <Image src={getMedia(y.img)} objectFit={"cover"} className="food-list__img img" layout='fill' alt={y.name} />}

            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FoodList;
