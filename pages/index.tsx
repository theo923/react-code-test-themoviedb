import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import axios, { AxiosResponse } from "axios";
import { Imovie, childNode } from "../interface/interface";

const App: NextPage = (props: childNode): JSX.Element => {
    return (
        <div data-theme="wireframe">
            <Layout>
                <Home props={props} />
            </Layout>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    let page: number = 1;
    let fetch: Array<Imovie[]> = [];
    while (page <= 10) {
        const comedy: Imovie[] = await axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_ACCESS_KEY}&with_genres=35&page=${page}`
            )
            .then((res: AxiosResponse) => res.data.results);
        fetch.push(comedy);
        page++;
    }
    const movieList: Imovie[] = fetch.reduce(
        (accu: Imovie[], item: Imovie[]) => (accu.push(...item), accu),
        []
    );
    return {
        props: {
            movieList,
        },
    };
};

export default App;
