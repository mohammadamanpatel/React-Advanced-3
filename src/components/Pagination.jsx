import { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

function Pagination() {
    const { page, changePage, totalPage } = useContext(AppContext);
    console.log("totalPages", totalPage);
    console.log("page", page);
    return (
        <div>
            <div>
                {
                page > 1 &&
                    <button onClick={() => changePage(page - 1)}>Previous</button>
                }
                {
                page < totalPage &&
                    <button onClick={() => changePage(page + 1)}>Next</button>
                }
                <p> page {page} of {totalPage}</p>
            </div>
        </div>
    )
}

export default Pagination;
