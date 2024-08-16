import Description from "../../Description"
import Hero from "../../Hero"
import List from "../../List"
import ListCard from "../../ListCard"
import ListOffers from "../../ListOffers"


const Home = () => {
    return (
        <>
            <Hero />
            <ListOffers />
            <Description />
            <List />
            <ListCard />
        </>
    )
}

export default Home