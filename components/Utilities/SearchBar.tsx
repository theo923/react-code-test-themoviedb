import React from "react";
import { Imovie } from "../../interface/interface";

type SearchBarProps = {
    movieList: Imovie[] | undefined;
    setNewMovieList: React.Dispatch<React.SetStateAction<Imovie[]>>;
};

const SearchBar = ({
    movieList,
    setNewMovieList,
}: SearchBarProps): JSX.Element => {
    const [search, setSearch] = React.useState<string>("");

    React.useEffect(() => {
        setNewMovieList(
            movieList?.filter((movie: Imovie) =>
                movie?.title.toLowerCase().includes(search.toLowerCase())
            ) || []
        );
    }, [search, movieList, setNewMovieList]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        name === "search" ? setSearch(value) : null;
    };

    return (
        <div>
            <div data-test="component-searchBar">
                <div className="p-10 card bg-base-200">
                    <div className="form-control">
                        <label className="label">Seach Movies</label>
                        <input
                            name="search"
                            type="text"
                            placeholder="example: Luca"
                            className="input"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => handleChange(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
