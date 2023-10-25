import SavedShows from "../components/SavedShows"
import collection from "../images/collection.png"

const Account = () => {
  return (
    <section className="w-full h-full text-white">
      <img className="w-full h-[300px] md:h-[400px] object-cover  " src={collection} alt="/" />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </section>
  )
}

export default Account;