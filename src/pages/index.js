import * as React from "react"
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Description from "../components/description";
import Team from "../components/team";
import Partner from "../components/partner";
import Social from "../components/social";
import Footer from "../components/footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../assets/style/index.scss"

library.add(fab, faEnvelope)

// markup
const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Description />
      <Team />
      <Partner />
      <Social />
      <Footer />
    </>
  )
}

export default IndexPage
