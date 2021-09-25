import React from "react";
import { childNode, Imovie } from "../interface/interface";
import MovieItem from "./MovieItem";
import SearchBar from "./Utilities/SearchBar";
import Sorting from "./Utilities/Sorting";

const Home = ({ props }: childNode): JSX.Element => {
    const [newMovieList, setNewMovieList] = React.useState<Imovie[]>([]);

    React.useEffect(() => {
        setNewMovieList(props?.movieList || []);
    }, [props?.movieList]);

    return (
        <div>
            <div data-test="component-home">
                <h2 className="card-title">Top Comedy Movie</h2>
                <div className="homeGrid">
                    <div>
                        <SearchBar
                            movieList={props?.movieList}
                            setNewMovieList={setNewMovieList}
                        />
                        <Sorting
                            newMovieList={newMovieList}
                            setNewMovieList={setNewMovieList}
                        />
                    </div>
                    <div>
                        {newMovieList.length > 0 ? (
                            newMovieList?.map((movie: Imovie, idx: number) => (
                                <MovieItem key={idx} movie={movie} />
                            ))
                        ) : (
                            <div style={{ width: "60vw", height: "60vh" }}>
                                Sorry, no searching result, please try again.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
