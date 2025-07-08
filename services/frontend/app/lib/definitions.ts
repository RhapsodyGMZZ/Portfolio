export type MainPoint = {
    title: string;
    description_1: string;
    code_block_1?: string;
}

export type ProjectsPage = {
    "short-description": string;
    "description-img": string;
}

export type EntirePage = {
    "main-points": MainPoint[];
}

export type Project = {
    title: string;
    "projects-page": ProjectsPage;
    "entire-page": EntirePage;
    "URL" : string
}

export type jsonFile = Project[];