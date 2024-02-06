import { Header } from "./Header";
import Blogs  from "./Blogs";
import Pagination from "./Pagination";
function Home(){
    return (
        <div>
            <Header />
            <div>
                <Blogs />
                <Pagination />
            </div>
        </div>
      )
}
export default Home;