import Hero from "../components/trending/Hero"
import UpcomingMovies from "../components/detailPage/UpcomingMovies"
import TopRated from "../components/topratedpage/TopRated"
import PopularSeries from "../components/seriespage/PopularSeries"


const Home = () => {
  return (
    <section>
        <Hero />
        <UpcomingMovies />
        <TopRated />
        <PopularSeries />
    </section>
  )
}

export default Home