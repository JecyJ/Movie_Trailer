import Hero from "../components/trending/Hero"
// import UpcomingMovies from "../components/detailPage/UpcomingMovies"
// import TopRated from "../components/topratedpage/TopRated"
// import PopularSeries from "../components/seriespage/PopularSeries"
import Rows from "../components/Rows"
import requests from "../Request"


const Home = () => {
  return (
    <section>
        <Hero />
        <Rows title="Upcoming" fetchURL={requests.requestUpcoming} />
        <Rows title="TopRated" fetchURL={requests.requestToprated} />
        <Rows title="Upcoming" fetchURL={requests.requestSeries} />        
    </section>
  )
}

export default Home

// <Rows title="Upcoming" fetchURL={requests.requestUpcoming} />

// <UpcomingMovies />
//         <TopRated />
//         <PopularSeries />