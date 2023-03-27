export interface Game {
    id: number;
    background_image: string;
    name: string;
    released: string;
    metacritc_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Ratings>;
    screenshot: Array<Screenshots>;
    trailers: Array<Trailers>;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        name: string;
        slug: string;
    };
}

interface Publishers {
    name: string;
}

interface Ratings {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    image: string;
}

interface Trailers {
    data: {
        max: string;
    };
}











