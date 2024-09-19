import Hero from "../components/Hero"
import Products from "../components/Products"
import WhatOurClientsSay from "../components/WhatOurClientsSay"
import WhatWeOffer from "../components/WhatWeOffer"


const Home = () => {
  return (
    <div className="">
      <Hero/>
      <WhatWeOffer/>
      <Products/>
      <WhatOurClientsSay/>
    </div>
  )
}

export default Home