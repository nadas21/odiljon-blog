import "./news.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import dateFormat, { masks } from "dateformat";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const News = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      import.meta.env.VITE_APP_BASE_URL + `/posts?page=${pageCount}&limit=9`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.results);
        setPage(data.next ? false : true);
      })
      .catch((err) => console.log(err.message));
  }, [pageCount]);

  function handlePrev() {
    setPageCount((count) => count - 1);
  }

  function handleNext() {
    setPageCount((count) => count + 1);
  }

  return (
    <section className="news">
      <div className="container">
        <div className="news-inner">
          <div className="news-box">
            <h2 className="news-box-home-title">Yangiliklar</h2>
            <input
              type="text"
              className="news-box-input"
              placeholder="qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="news-list">
            {posts.length ? (
              posts
                .filter((found) => {
                  return search.toLowerCase() === ""
                    ? found
                    : found.title.includes(search);
                })
                .map((item, index) => (
                  <li className="news-item" key={index}>
                    <img src={item.img} alt="img" className="news-img" />
                    <div className="card-box">
                      <h4 className="card-title">
                        {item.title ? item.title.slice(0, 100) : item.title}...
                      </h4>
                      <p className="card-text">
                        {item.text ? item.text.slice(0, 100) : item.text}...
                      </p>
                      <div className="card-bottom">
                        <p className="card-time">
                          {dateFormat(item.createdAt)}
                        </p>
                        <NavLink to={`/single/${item.id}`}>
                          <button className="card-btn">
                            ko'proq
                            <FaArrowCircleRight className="card-arrow" />
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </li>
                ))
            ) : (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
          </ul>
          <ul className="card-bottom-list">
            <li className="card-bottom-item">
              <button
                className={pageCount === 1 ? "card-page-unactive" : "card-page"}
                onClick={handlePrev}
                disabled={pageCount === 1 ? true : false}
              >
                <GiPreviousButton />
              </button>
            </li>
            {/* <li className="card-bottom-item">
              <button className="card-page">1</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">2</button>
            </li>
            <li className="card-bottom-item">
              <button className="card-page">3</button>
            </li> */}
            <li className="card-bottom-item">
              <button
                className={page ? "card-page-unactive" : "card-page"}
                onClick={handleNext}
                disabled={page}
              >
                <GiNextButton />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
