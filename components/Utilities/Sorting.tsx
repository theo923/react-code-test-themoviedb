import React from "react";
import { Imovie } from "../../interface/interface";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

type SortingProps = {
    newMovieList: Imovie[];
    setNewMovieList: React.Dispatch<React.SetStateAction<Imovie[]>>;
};

const Sorting = ({
    newMovieList,
    setNewMovieList,
}: SortingProps): JSX.Element => {
    const [ratingSort, setRatingSort] = React.useState<number>(0);

    React.useEffect(() => {
        let SortedList = [...newMovieList];
        if (ratingSort) {
            switch (ratingSort) {
                case 0:
                    SortedList.sort();
                    break;
                case 1:
                    SortedList.sort(
                        (a: Imovie, b: Imovie) =>
                            a?.vote_average - b?.vote_average
                    );
                    break;
                case 2:
                    SortedList.sort(
                        (a: Imovie, b: Imovie) =>
                            b?.vote_average - a?.vote_average
                    );
                    break;
                default:
                    null;
            }
        }
        setNewMovieList(SortedList);
    }, [ratingSort, setNewMovieList]);

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        const { name } = e.currentTarget;
        name === "ratingSort"
            ? setRatingSort(ratingSort === 0 ? 1 : ratingSort === 1 ? 2 : 0)
            : null;
    };

    return (
        <div>
            <div data-test="component-sorting">
                <div className="p-10 card bg-base-200">
                    <div className="form-control">
                        <label className="label">
                            <button
                                name="ratingSort"
                                className="stringNicon"
                                onClick={(
                                    e: React.MouseEvent<
                                        HTMLButtonElement,
                                        MouseEvent
                                    >
                                ) => handleClick(e)}
                            >
                                Rating Sort{" "}
                                {ratingSort === 0 ? (
                                    <BsDot size="25px" />
                                ) : ratingSort === 1 ? (
                                    <HiSortAscending size="25px" />
                                ) : (
                                    <HiSortDescending size="25px" />
                                )}
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sorting;
