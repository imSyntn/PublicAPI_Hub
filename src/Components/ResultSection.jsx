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

  const [filteredData, setFilteredData] = useState(false)
  const [filter, setFilter] = useState({
    AUTH: 'all',
    CORS: 'all',
    HTTPS: 'all'
  })

  let pageIndex = [];
  const lastIndex = postPerPage * currentPage;
  const firstIndex = lastIndex - postPerPage;

  const totalPages = Math.ceil((filteredData.length || data.length) / postPerPage);
  const currentPageData = (filteredData || data).slice(firstIndex, lastIndex);

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
    setFilteredData(false)
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  // useEffect(() => {
  //   setFilteredData(false)
  // }, [searchIt]);

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

  const filterArr = [{
    name: "AUTH",
    options: ['All', 'No Auth', 'API Key', 'OAuth'],
    changeEvent: (e) => setFilter((prev) => ({ ...prev, AUTH: e.target.value }))
  }, {
    name: 'CORS',
    options: ['All', 'Yes', 'No', 'Unknown'],
    changeEvent: (e) => setFilter((prev) => ({ ...prev, CORS: e.target.value }))
  }, {
    name: 'HTTPS',
    options: ['All', 'True', 'False'],
    changeEvent: (e) => setFilter((prev) => ({ ...prev, HTTPS: e.target.value }))
  }]

  const filteredResult = (AUTH, CORS, HTTPS) => {
    return data.filter(item => {
      const authfilter = (AUTH !== 'all') ? item.Auth.toLowerCase() == AUTH : true;
      const corsfilter = (CORS !== 'all') ? item.Cors.toLowerCase() == CORS : true;
      const httpsfilter = (HTTPS !== 'all') ? item.HTTPS == (HTTPS === 'true') : true;

      return authfilter && corsfilter && httpsfilter
    })

  }

  useEffect(() => {
    if (filter.AUTH === 'all' && filter.CORS === 'all' && filter.HTTPS === 'all') {
      setFilteredData(false)
    } else {
      let newData = filteredResult(filter.AUTH.replace(" ", '').toLowerCase(), filter.CORS.toLowerCase(), filter.HTTPS.toLowerCase())
      setFilteredData(newData)
    }
  }, [filter])

  return (
    <div
      className={`ResultSection ${darkMode ? "darkContainer" : "lightContainer"
        }`}
    >
      <div className="name-filter">
        <h1>{searchIt.name ? searchIt.name : "Random"}</h1>
        <div className="filterDiv">
          {
            filterArr.map((item, i) => (

              <div className="filterSelect" key={i}>
                <label htmlFor={item.name}>{item.name}:</label>
                <select name={item.name} value={item.val} id={item.name} onChange={item.changeEvent}>
                  {
                    item.options.map((set, j) => <option key={j} value={set}>{set}</option>)
                  }

                </select>
              </div>
            ))
          }
        </div>
      </div>
      <div className="results">
        <SkeletonTheme
          baseColor={!darkMode ? "#eaeaf4" : "#202020"}
          highlightColor={!darkMode ? "white" : "#444"}
        >
          {loading ? (
            new Array(10).fill("").map((a, i) => <ResultCards key={i} />)
          ) : data.length > 0 ? (
            // filteredData.length>0 ? (
            //   currentPageData.map((item, i) => (
            //     <ResultCards
            //       key={i}
            //       name={item.API}
            //       auth={item.Auth}
            //       Cors={item.Cors}
            //       desc={item.Description}
            //       https={item.HTTPS}
            //       link={item.Link}
            //     />
            //   ))
            // ) : (
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
            // )
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
