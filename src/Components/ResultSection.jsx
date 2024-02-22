import React, {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import "../Styles/ResultSection.scss";
import "../Styles/Misc.scss";
import { ThemeContext } from "../App";
import { searchContext } from "../App";
import { SkeletonTheme } from "react-loading-skeleton";
import useFetch from "../Hook/useFetch";
import ResultCards from "./ResultCards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const NotFound = lazy(() => import("./NotFound"));

const ResultSection = () => {
  const { darkMode } = useContext(ThemeContext);
  const { searchIt } = useContext(searchContext);
  const { data, loading } = useFetch(searchIt);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  let pageIndex = [];
  const lastIndex = postPerPage * currentPage;
  const firstIndex = lastIndex - postPerPage;
  const totalPages = Math.ceil(data.length / postPerPage);
  const currentPageData = data.slice(firstIndex, lastIndex);

  for (let i = 1; i <= totalPages; i++) {
    pageIndex.push(i);
  }

  useLayoutEffect(() => {
    const width = window.innerWidth;
    if (width > 1260) {
      const numOfCardsInRow = Math.floor((width - 200) / 360);
      const numOfCardsInCol = 4;
      const ppp = numOfCardsInRow * numOfCardsInCol;
      setPostPerPage(ppp);
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const handlePageinationLower = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handlePageinationHigher = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div
      className={`ResultSection ${darkMode ? "darkContainer" : "lightContainer"
        }`}
    >
      <h1>{searchIt.name ? searchIt.name : "Random"}</h1>
      <div className="results">
        <SkeletonTheme
          baseColor={!darkMode ? "#eaeaf4" : "#202020"}
          highlightColor={!darkMode ? "white" : "#444"}
        >
          {loading ? (
            new Array(10).fill("").map((a, i) => <ResultCards key={i} />)
          ) : data.length > 0 ? (
            currentPageData.map((item, i) => (
              <ResultCards
                key={i}
                name={item.API}
                auth={item.Auth}
                Cors={item.Cors}
                desc={item.Description}
                https={item.HTTPS}
                link={item.Link}
              />
            ))
          ) : (
            <Suspense>
              <NotFound />
            </Suspense>
          )}
        </SkeletonTheme>
      </div>
      {
          data.length !== 0 && (
            <div className="paginationDiv">
              <FaAngleLeft onClick={handlePageinationLower} />
              {pageIndex.map((i) => (
                <div
                  className={`box ${currentPage === i && "glow"}`}
                  key={i}
                  onClick={() => setCurrentPage(i)}
                ></div>
              ))}
              <FaAngleRight onClick={handlePageinationHigher} />
            </div>
          )
        }
    </div>
  );
};

export default ResultSection;
