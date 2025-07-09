type Details = {
    description : string;
    image?: string;
    image_alt?: string;
}
type MainPoint = {
    id: number;
    title: string;
    details: Details[];
}

type ProjectsPage = {
    short_description: string;
    description_img: string;
    description_img_alt: string;
}

type EntirePage = {
    main_points: MainPoint[];
}

type ProjectStyle = {
    color_code: string;
    color_code_hover: string;
}

type Project = {
    id : number;
    title: string;
    github_link:string;
    projects_page: ProjectsPage;
    entire_page: EntirePage;
    style: ProjectStyle;
}

export type jsonFile = Project[];