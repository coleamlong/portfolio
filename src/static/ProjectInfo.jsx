import Music from "../assests/Music.jpg";
import Portfolio from "../assests/Portfolio.jpg";
import Jobs from "../assests/Jobs.jpg";

const ProjectInfo = [
    {
        id: 0,
        title: "GeoJobs",
        gitlab: "https://gitlab.com/sarthaksirotiya/cs373-idb",
        website: "https://www.geojobs.me/",
        image: Jobs,
        description:
            "A database visualization web application which allows users to match open careers with available housing in the fifty largest cites in the United States. I worked with a team to implement a multi-table SQL database, a Flask RESTful API, and a user interface in React. I specialized in structuring the front-end and fetching backend data using JavaScript's Axios.",
    },
    {
        id: 1,
        title: "Personal Website",
        github: "https://github.com/coleamlong/portfolio",
        image: Portfolio,
        description:
            "The website you are on right now! A bespoke portfolio website built from scratch with React and Bootstrap. The website is hosted using AWS's web hosting service.",
    },
    {
        id: 2,
        title: "RedditCrate",
        github: "https://github.com/coleamlong/RedditCrate",
        website: "https://coleamlong.github.io/RedditCrate",
        image: Music,
        description:
            "A full-stack web-application that automatically generates a Spotify playlist of unique music taken directly from the popular subreddit r/ListenToThis. Currently a work in progress, I am learning how to resourcefully leverage public RESTful APIs in order to provide a unique service.",
    },
];

export default ProjectInfo;
