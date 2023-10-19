import Hero from "../components/trending/Hero"
import Rows from "../components/Rows"
import requests from "../Request"


const Home = () => {
  return (
    <section>
        <Hero />
        <Rows rowId = "1" title="Upcoming" fetchURL={requests.requestUpcoming} route="/movies" />
        <Rows rowId = "2" title="TopRated" fetchURL={requests.requestToprated} route="/toprated" />
        <Rows rowId = "3" title="Upcoming" fetchURL={requests.requestSeries} route="/series" />        
    </section>
  )
}

export default Home;