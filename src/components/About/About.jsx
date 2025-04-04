import React from "react";
import Divider from "../Divider/Divider";

function About() {
  return (
    <>
      <Divider />
      <div
        id="about"
        className="flex flex-col mt-12 md:flex-row mb-8 ml-8 md:ml-0"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center mb-8 md:mb-0">
          <img
            className="about-img object-cover w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2"
            src="assets/Images/chris at pop up.jpeg"
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-4 sm:px-8 md:pr-34 h-auto md:h-full">
          <div className="top-bio-banner w-full mb-4"></div>

          <div className="flex flex-col items-center justify-center text-ss_purple text-xl sm:p-6 text-center">
            {/* Title */}
            <div className="flex flex-col items-center justify-center text-ss_purple text-4xl text-center mb-6">
              <h2 className="mt-12 sm:mt-24">Lore...</h2>
            </div>

            {/* Paragraphs */}
            <section className="mb-6">
              <p className="text-ss_purple text-lg text-center">
                Yep, That's me. You're probably wondering how I got here... Well
                It all started about 12 years ago in the back of a pizza shop in
                Nowhere, Colorado. Well...That's where I started cooking at
                least, but it was never my plan to end up in this industry. I
                always thought I would be a designer of some sort, most likely
                an architect.
              </p>
            </section>

            <section className="mb-6">
              <p className="text-ss_purple text-lg text-center">
                So that is what took me to attend School at Arizona State
                University. It was while studying architorture there that I
                realized I would rather be poor in a kitchen than be poor in a
                studio. So I started cooking at real restaurants, not just
                slinging pizzas out of my mothers Honda Civic. This took me from
                Phoenix to California and Mexico back to Colorado and finally to
                my place of residence today, Austin, TX.
              </p>
            </section>

            <section>
              <p className="text-ss_purple text-lg text-center">
                Along the way I fell in love with a subgenre of chef culture,
                that being the cult of really high end and beautiful kitchen
                knives. Hours of research and hours spent talking to other knife
                shop owners has led me to this place today. The still poor owner
                of a tiny, online sharpening and kitchen knife (and other
                cooking and dining things) shop. Welcome!
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
