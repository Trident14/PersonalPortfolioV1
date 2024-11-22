import React from "react";
import Header from './components/Header';
import Project from './components/Project';
import ispayMain from './assets/ispayMain.png';
import lanternquest from './assets/lanternquest.png';
import './Styles/App.css';
import image1 from "./assets/c.png";
import image2 from "./assets/code.png";
import image3 from "./assets/cpp.png";
import image4 from "./assets/docker.png";
import image5 from "./assets/git.png";
import image6 from "./assets/html.png";
import image7 from "./assets/js.png";
import image8 from "./assets/vs.png";
import image9 from "./assets/web.png";
import image10 from "./assets/java.png";
import image11 from "./assets/github.png";
import image12 from "./assets/react.png";


const App = () => {
    return (
        <div className='Main-div'>
            <Header />
            <div className="tag-line">
                <h3>Exploring New Frontiers in Development by transforming ideas into reality.</h3>
            </div>
            <div className='ProjectHolder'>
                <Project 
                    title="isPay App"
                    description="isPay, a user-friendly banking application created by leveraging the power of the MERN stack."
                    imageUrl={ispayMain}
                    altText="isPay App screenshot"
                    urlTo={"https://ispayapp.onrender.com/"}
                />
                <Project 
                    title="Lantern Quest"
                    description="Embark on an exhilarating top-down pixel art adventure in Lantern Quest. Navigate through a vibrant overworld to collect the magical lantern, then delve into the treacherous dark dungeon. "
                    imageUrl={lanternquest} // Replace with actual image URL
                    altText="Lantern Quest screenshot"
                    urlTo={"https://velociraptor10.itch.io/lantern-quest"} 
                    youtubeUrl={"https://www.youtube.com/watch?v=WJ5RDBA62-o"}
                />
                <div className="bentoGrid">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                    <img src={image7} alt="" />
                    <img src={image8} alt="" />
                    <img src={image9} alt="" />
                    <img src={image10} alt="" />
                    <img src={image11} alt="" />
                    <img src={image12} alt="" />
                </div>
            </div>
            

            <footer className="Footer-container">
                <p>© 2024 Inesh Sekar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
