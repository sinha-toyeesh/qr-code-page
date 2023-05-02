import Image from "next/image";
import { Outfit } from "next/font/google";
import imageAsset from "/public/images/image-qr-code.png";

const outfit_small = Outfit({
  weight: "400",
  subsets: ["latin"],
});

const outfit_large = Outfit({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="box3">
        <div className="box1">
          <Image
            src={imageAsset}
            alt="Italian Trulli"
            width="300"
            height="300"
            className="img-styling"
          />
          <div className={`${outfit_large.className} testBox1`}>
            Improve your front-end skills by building projects
          </div>
          <div className={`${outfit_small.className} testBox2`}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Toyeesh Sinha</a>.
        </div>
      </div>
    </div>
  );
}
