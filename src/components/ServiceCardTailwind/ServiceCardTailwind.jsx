function ServiceCardTailwind() {
  return (
    <div>
      <body class="bg-pale_orange flex justify-center">
        <main class="bg-white w-full max-w-xs m-10 p-3 md:grid md:grid-cols-2 md:max-w-3xl md:gap-4 md:p-5 bg-mobile bg-no-repeat bg-bottom md:bg-desktop shadow-[5px_5px_0px_orange]">
          <img
            src="orange.jpg"
            alt="orange with stem and leaf on a white-gray background"
          />
          <section>
            <h1 class="font-title font-bold text-2xl md:text-3xl">
              A single orange
            </h1>
            <p class="font-title text-md md:text-xl">with stem and leaf</p>
            <h2 class="text-5xl font-light my-3">
              $1<span class="text-lg">.35</span>
            </h2>
            <p class="font-light text-gray-500">
              Experience a burst of sunshine in every bite with this
              hand-picked, sun-drenched jewel of the citrus world.
            </p>
            <section class="flex items-center my-4">
              <button class="bg-gradient-to-b from-light_orange to-orange text-white uppercase pt-2 pb-1 px-4 flex-grow hover:bg-gradient-to-t md:flex-none">
                Add to Cart
              </button>
              <svg
                class="fill-orange ml-2 transition-transform hover:scale-125 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </section>

            <h3 class="uppercase font-light text-lg">Features</h3>
            <ul class="list-disc marker:text-orange text-sm text-gray-600 font-light">
              <li class="ml-3 pl-2">
                <span class="font-medium">Nature's candy</span>: A symphony of
                sweet and tangy notes
              </li>
              <li class="ml-3 pl-2">
                <span class="font-medium">Vibrant hue</span>: A visual feast for
                the eyes
              </li>
              <li class="ml-3 pl-2">
                <span class="font-medium">Invigorating aroma</span>: A sensory
                delight
              </li>
              <li class="ml-3 pl-2">
                <span class="font-medium">Nutrient-rich</span>: Bursting with
                Vitamin C
              </li>
              <li class="ml-3 pl-2">
                <span class="font-medium">Perfect for</span>: snacking, juicing,
                or culinary creations
              </li>
            </ul>
          </section>
        </main>
      </body>
    </div>
  );
}

export default ServiceCardTailwind;
