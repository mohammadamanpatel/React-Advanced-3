import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import BlogDetails from "./BlogDetails";
 function Blogs() {
    const { posts, loading } = useContext(AppContext);
    console.log("posts are ",posts);
    return (
        <div>
            {
                loading ? (<div>Loading</div>) :
                    posts.length === 0 ? (<div className="">
                        <p className="">No Post Found</p>
                    </div>) : (posts.map((post) => (
                        <BlogDetails key={post.id} post={post}></BlogDetails>
                    )))
            }
        </div>
    )
}
export default Blogs;