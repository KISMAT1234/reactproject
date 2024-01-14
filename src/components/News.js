import {Link} from "react-router-dom";
function News(){
    return <>
    <h1>News</h1>
    <div className="flex">
        <div className="border">
            <p>people are suffering from starving </p>
            <button className=""><Link to="/news-details/1">Read More</Link></button>
        </div>

        <div className="border">
            <p>people are suffering from starving </p>
            <button className=""><Link to="/news-details/1">Read More</Link></button>
        </div>

        <div className="border">
            <p>people are suffering from starving </p>
            <button className=""><Link to="/news-details/1">Read More</Link></button>
        </div>
    </div>

    </>
}
export default News;
