import ProductRight from "./Product-Right";
import ProductLeft from "./Product-Left";

function ProductIdeas() {
  const p1 =
    "CareFort is a care for life-patient-practitioner role-playing game that allows you to practice real hospital cases through the narrative character of Dr. Alice- who is breathing life into patients through her skillful hands.";

  const p2 =
    "Diagnose and operate the incoming cases through 911. Put your skills to the test. The Caring Souls are the role players who care to remedy the souls in pain.";

  const p3 =
    "Thrill yourself with unspoken secrets and mysteries in the mansion of Mad Scientist. Set foot in this RPG and rise against evil through the character of Ari. Save the town, and prank the prankster.";

  const p4 =
    "A stunt racing game set in the most intriguing and pleasing graphical landscapes and underground tunnels to thrill you with the adventurous challenges and the trickiest tracks.Either you make it, or you break it.";

  const p5 =
    "Start your engines, shift the gear, and move your wheelers. This game is an all-rounder making it the first and the best parking school game in virtual reality.";

  const p6 =
    "This player comes with both audio and video playing settings for your devices. Enjoy the clearest audio and the finest video up to 4K at the slight tap of your fingertips!";

  // headins

  const heading1 = "CareFort";
  const heading2 = "Caring Souls";
  const heading3 = "Mad Scientist";
  const heading4 = "Bike Stunt";
  const heading5 = "Prado Parking";
  const heading6 = "Video player";

  // sm-images links

  return (
    <>
      <div className="p-[20px] bg-gray-100">
        <div>
          <h1
            className="font-bold md:font-medium md:text-5xl text-center md:p-[70px] text-xl p-[10px]"
            data-aos="fade-down"
          >
            We love transforming product ideas into degital realities
          </h1>
        </div>

        {/* product 1 */}

        <ProductRight
          smimg="images/p1-s.webp"
          heading={heading1}
          para={p1}
          lgimg="images/p1.webp"
        ></ProductRight>

        {/* peoduct 2 */}

        <ProductLeft
          smimg="images/p2-s.webp"
          heading={heading2}
          para={p2}
          lgimg="images/p2.webp"
        ></ProductLeft>

        {/* product 3 */}

        <ProductRight
          smimg="images/p3-s.webp"
          heading={heading3}
          para={p3}
          lgimg="images/p3.webp"
        ></ProductRight>

        {/* peoduct 4 */}

        <ProductLeft
          smimg="images/p4-s.webp"
          heading={heading4}
          para={p4}
          lgimg="images/p4.webp"
        ></ProductLeft>

        {/* product 5 */}

        <ProductRight
          smimg="images/p5-s.webp"
          heading={heading5}
          para={p5}
          lgimg="images/p5.webp"
        ></ProductRight>

        {/* peoduct 6 */}

        <ProductLeft
          smimg="images/p6-s.webp"
          heading={heading6}
          para={p6}
          lgimg="images/p6.webp"
        ></ProductLeft>
      </div>
    </>
  );
}

export default ProductIdeas;
