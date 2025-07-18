export const LINK_STYLE = "text-white bg-blue-500 rounded-lg p-2 w-2/3 text-center break-words my-5 hover:bg-blue-800";
// export const API_BASE_URL = "http://nicolas-legay.fr/api"
export const API_BASE_URL = "https://nicolas-legay.fr/api"
// export const API_BASE_URL = "http://localhost:8000/api"

export const CONTAINER = {
    animation: {
        transition: {
            staggerChildren: 0.35,
            ease:"easeInOut",
        },
    },
};

export const ITEM = {
    initial: {
        opacity: 0,
        y: -100
    },
    animation: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .6,
            ease:"easeInOut",
        },
    },
};

export const ITEM_PROJECT = {
    initial: {
        opacity: 0,
        y: -50
    },
    animation: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .6,
            ease:"easeInOut",
        },
    },
};
