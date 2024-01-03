import Music from "../assests/Music.png";
import Portfolio from "../assests/Portfolio.jpg";
import Jobs from "../assests/Jobs.png";
import Mixer from "../assests/Mixer.jpg";

const ProjectInfo = [
    {
        id: 0,
        title: "Audio Plugin Library",
        github: "https://github.com/coleamlong/GainSlider",
        image: Mixer,
        description:
            "An ongoing project where I am experimenting with multichannel signal procesing techniques to build and array of audio plugins including a gain controller, plate reverb, delay, and digital synthesizer.",
    },
    {
        id: 1,
        title: "Spotify Song Suggestor",
        github: "https://github.com/coleamlong/SpotifyPlaylist",
        website: "https://spotify-playlist.coleamlong.com",
        image: Music,
        description:
            'A compact web-app that generates a custom Spotify playlist of undiscovered music from a specific set of "seed" songs. I implemented Spotify OAuth, enabling users to sign in with their own accounts and get personalized results based on their listening history.',
    },
    {
        id: 2,
        title: "Personal Website",
        github: "https://github.com/coleamlong/portfolio",
        image: Portfolio,
        description:
            "The website you are on right now! A bespoke portfolio website built from scratch with React and Bootstrap.",
    },
    {
        id: 3,
        title: "GeoJobs",
        github: "https://github.com/coleamlong/GeoJobs",
        website: "https://geojobs.coleamlong.com",
        image: Jobs,
        description:
            "A database visualization web-app which allows jobseekers to match open careers with ideal housing in the fifty largest cites in the United States. I worked with a team to implement a multi-table SQL database, a custom Flask RESTful API, and a sleek user interface in React. I specialized in structuring the front-end and fetching backend data using JavaScript's Axios.",
    },
];

export default ProjectInfo;
