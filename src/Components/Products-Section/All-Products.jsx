import LeftProduct from "./Left-Product";
import RightProduct from "./Right-Product";

function AllProducts() {
  //        headings
  const heading1 = "Mad Scientist - Horror Survival Game";
  const heading2 = "Stunt Legends – Bike Stunt Game";
  const heading3 = "Prado Parking 3D";
  const heading4 = "Crazy Car Racing";
  const heading5 = "Carefort -Hospital Game";
  const heading6 = "The Caring Souls";
  const heading7 = "Video player";

  //       paragraphs
  const para1 =
    "Mad Scientist is an RPG thriller game of mystery, and puzzle. The character Ari arrives in the new town where an evil scientist is experimenting on all the living and the dead. Ari is given the responsibility of meddling with the scientist “Longshot” and bring the town back to its original peace. Unlike any other game in the market, Mad Scientist, is based on mind games- missions.";

  const para2 =
    "A stunt racing bike game of treacherous, and adventurous tracks where the graphics are artistically eye-pleasing, and leisurely enjoyable with three engaging, intriguing, and simulating modes like Casual, Extreme, and Contract with a multiplicity of fluctuating environments.";

  const para3 =
    "Parking simulator driving challenge, shift the gear and make the perfect car parking in the narrow spaces. Drivers, ready for a driving game venture? Terafort maintains its reputation of being the most popular Prado car parking games producer with its high quality and commitment to the players for multiplayer Suv car based games from all around the planet.";

  const para4 =
    "Crazy car racing is truly a crazy game, which has drag, crash and endless racing modes. The game is oozing with fun and utmost creativity. The game is set in a modern-day city, having trees, and skyscraper apartments. The color scheme used in this game is built to give you the refreshing and vibrant feels.";

  const para5 =
    "Build your dream hospital. CareFort introduces Dr. Alice for girls, a practicing doctor who is like a real surgeon doctor, passionate enough to take care of her patients in this pretend-play.";

  const para6 =
    "Caring Soul is a groundbreaking hospital role-playing game that allows users to perform surgeries on different parts of the body along with the proper practitioner’s guide under the tap of your fingers.";

  const para7 =
    "Build your dream hospital. CareFort introduces Dr. Alice for girls, a practicing doctor who is like a real surgeon doctor, passionate enough to take care of her patients in this pretend-play.";

  return (
    <>
      <div className="md:pl-[70px] md:pr-[70px]">
        <LeftProduct
          para={para1}
          heading={heading1}
          lgimg="images/product1.webp"
          smimg1="images/playstore.webp"
          smimg2="images/at-icon.webp"
        ></LeftProduct>
        <RightProduct
          para={para2}
          heading={heading2}
          lgimg="images/product2.webp"
          smimg1="images/playstore.webp"
          smimg2="images/at-icon.webp"
        ></RightProduct>
        <LeftProduct
          para={para3}
          heading={heading3}
          lgimg="images/product3.webp"
          smimg1="images/playstore.webp"
        ></LeftProduct>
        <RightProduct
          para={para4}
          heading={heading4}
          lgimg="images/product4.webp"
          smimg1="images/playstore.webp"
          smimg2="images/at-icon.webp"
        ></RightProduct>
        <LeftProduct
          para={para5}
          heading={heading5}
          lgimg="images/product5.webp"
          smimg1="images/playstore.webp"
        ></LeftProduct>
        <RightProduct
          para={para6}
          heading={heading6}
          lgimg="images/product6.webp"
          smimg1="images/playstore.webp"
        ></RightProduct>
        <LeftProduct
          para={para7}
          heading={heading7}
          lgimg="images/product7.png"
          smimg1="images/playstore.webp"
        ></LeftProduct>
      </div>
    </>
  );
}

export default AllProducts;
