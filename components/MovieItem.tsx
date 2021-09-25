import React from "react";
import { Imovie } from "../interface/interface";

type MovieItemProps = { key: number; movie: Imovie };

const MovieItem = ({ movie }: MovieItemProps): JSX.Element => {
    return (
        <div>
            <div data-test="component-movieItem" className="movieItem">
                <div className="itemImg">
                    <img
                        className="max-h-full"
                        alt={movie?.title + " poster"}
                        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    />
                </div>
                <div className="movieInfo">
                    <h2 className="title">
                        {movie?.title}{" "}
                        <h3
                            className={`${
                                movie?.vote_average >= 8
                                    ? "text-green-700"
                                    : movie?.vote_average >= 5
                                    ? "text-green-400"
                                    : "text-red-500"
                            }`}
                        >
                            {movie?.vote_average}
                        </h3>
                    </h2>
                    <h3>
                        {movie?.overview.length > 150
                            ? movie?.overview.substring(0, 150) + "..."
                            : movie?.overview}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;
