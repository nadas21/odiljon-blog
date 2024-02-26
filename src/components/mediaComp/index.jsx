import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./media.css";

export const MediaComp = () => {
  const [pic, setpic] = useState([]);
  const [page ,setpage] = useState(9)
  const [next, setnext] =useState(false)
  useEffect(() => {
    fetch(import.meta.env.VITE_APP_BASE_URL + `/img?page=1&limit=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setpic(data.results)
        if(!data.next){
          setnext(true)
        }
        else{
          setnext(false)
        }
      });
  }, [page]);
  const increment = () => {
    setpage(page + 9)
  }
  return (
    <section className="media">
      <div className="container">
        <div className="media-inner">
          <h2 className="media-title">Rasmlar</h2>
          <ul className="media-list">
          {
            pic.length ? pic.map((img) =>(
              <li className="media-item">
              <img src={img.img} alt="img" className="media-img" />
            </li>
            )):   <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
          }
          </ul>
          <button disabled={next} className={next ? "media-btn-extra" : "media-btn" }onClick={increment}>Yana ko'rish</button>
        </div>
      </div>
    </section>
  );
};
