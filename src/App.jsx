import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import DestopProduct from "/image-product-desktop.jpg";
import MobileProduct from "/image-product-mobile.jpg";

const App = () => {
  return (
    <>
      <main className="bg-creame h-screen w-full">
        <div className="container flex justify-center items-center h-screen border-2 mx-auto my-auto">
          <div className="md:max-w-[600px] md:h-[500px] max-w-[400px] rounded-lg bg-white">
            <div className="grid md:grid-cols-2 grid-rows-2 justify-between gap-2 items-center">
              <div>
                <img
                  src={DestopProduct}
                  alt=""
                  className="hidden md:block h-[500px] rounded-s-lg"
                />

                <img
                  src={MobileProduct}
                  alt=""
                  className="md:hidden w-[400px] h-[300px] rounded-t-lg"
                />
              </div>

              <div className="flex flex-col justify-between p-2 md:gap-4">
                <p className="font-monsterat text-darkGraishBlue tracking-widest font-medium mb-2">
                  PERFUME
                </p>

                <h1 className="text-3xl font-bold font-fraunces mb-2">
                  Gabrielle Essence Eau De Parfum
                </h1>

                <p className="text-base font-monsterat font-medium text-darkGraishBlue mb-4">
                  A floral, solar and voluptous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>

                <p className="text-3xl font-fraunces font-bold text-Cyan flex items-start gap-2 mb-3">
                  $149.99{" "}
                  <span className="text-sm text-darkGraishBlue !font-medium font-monsterat">
                    <s>169.99</s>
                  </span>
                </p>

                <div className="flex justify-center items-center py-3 px-4 bg-Cyan hover:text-darkCyan duration-75 text-sm font-bold text-white gap-2  rounded-lg">
                  <FaShoppingCart />
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
