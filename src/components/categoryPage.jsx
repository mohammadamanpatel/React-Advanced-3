import { useLocation, useNavigate } from "react-router-dom"
import Blogs  from "./Blogs";
import Pagination from "./Pagination";
import { Header } from "./Header";
function CategoryPage() {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div>
            <Header />
            <div>
                <div>
                    <button onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blogs On <span>#{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}
export default CategoryPage