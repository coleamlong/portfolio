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
      "A four month long, full-stack, CI/CD project to build a database visualization app similar to the popular film database IMDB.",
  },
  {
    id: 1,
    title: "Personal Website",
    github: "https://github.com/coleamlong/portfolio",
    image: Portfolio,
    description: "A bespoke portfolio website built with React and CSS.",
  },
  {
    id: 2,
    title: "RedditCrate",
    github: "https://github.com/coleamlong/RedditCrate",
    website: "https://coleamlong.github.io/RedditCrate",
    image: Music,
    description:
      "A full-stack web-application that automatically generates a Spotify playlist of unique music taken directly from the popular subreddit r/ListenToThis.",
  },
];

export default ProjectInfo;
