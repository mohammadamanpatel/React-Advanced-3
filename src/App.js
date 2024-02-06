import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import Home from './components/Home';
import TagPage from './components/TagPage'
import CategoryPage from './components/categoryPage'
import BlogPage from './components/BlogPage'
function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("ffff");
  useEffect(() => {
    const page = searchParams.get('page') ?? 1;
    if (location.pathname.includes('tags')) {
      const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchBlogPosts(Number(page), tag)
    }
    if (location.pathname.includes('categories')) {
      const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchBlogPosts(Number(page), null, category)
    }
    fetchBlogPosts(Number(page));
  }, [location.pathname, location.search]);
  //location.search is for page number here page number is changing or adding
  //Location.pathname is for tags and category because here url pathname is changing
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog/:blogId' element={<BlogPage></BlogPage>}></Route>
        <Route path='/tags/:tag' element={<TagPage></TagPage>}></Route>
        <Route path='/categories/:category' element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
