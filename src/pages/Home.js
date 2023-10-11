import Hero from "../components/trending/Hero"
import Rows from "../components/Rows"
import requests from "../Request"


const Home = () => {
  return (
    <section>
        <Hero />
        <Rows title="Upcoming" fetchURL={requests.requestUpcoming} route="/movies" />
        <Rows title="TopRated" fetchURL={requests.requestToprated} route="/toprated" />
        <Rows title="Upcoming" fetchURL={requests.requestSeries} route="/series" />        
    </section>
  )
}

export default Home;