import React from 'react';
import HomeMeSlides from '../public/images/HomeMeSlides.pdf';
import HangManSlides from '../public/images/Hangman.pdf';
import MeowBotSlides from '../public/images/MeowBot.pdf';
import ComingSoon from '../public/images/comingSoon.pdf';
import PdfHandler from './PdfHandler.js';
import './Projects.css';
const Projects = () => {

    const hangManRedirect = () => {
        window.open("https://hangman-jem.herokuapp.com/home") ||
            window.location.replace("https://hangman-jem.herokuapp.com/home")
    }

    const HomeMeDevPost = () => {
        window.open("https://devpost.com/software/homeme-u92h18") ||
            window.location.replace("https://devpost.com/software/homeme-u92h18")
    }

    const HomeMeGitHub = () => {
        window.open("https://github.com/Martje55555/HomeMeUpdated") ||
            window.location.replace("https://github.com/Martje55555/HomeMeUpdated")
    }

    const meowBotGitHub = () => {
        window.open("https://github.com/Martje55555/MeowBot") ||
            window.location.replace("https://github.com/Martje55555/MeowBot")
    }

    const meowBotAdd = () => {
        window.open("https://discord.com/oauth2/authorize?client_id=835357310540972052&scope=bot&permissions=2150945792") ||
            window.location.replace("https://discord.com/oauth2/authorize?client_id=835357310540972052&scope=bot&permissions=2150945792")
    }

    const chatAppGithub = () => {
        window.open("https://github.com/Martje55555/ReactChatApp") ||
            window.location.replace("https://github.com/Martje55555/ReactChatApp")
    }

    return (
        <div>
            <div className="ui sizer vertical segment">

            </div>

            <PdfHandler fileName={HomeMeSlides} />

            <center>
                <div className="ui card" style={{ marginBottom: '5%' }}>
                    <div className="content">
                        <div className="header">Home Me</div>
                        <div className="description">
                            <p style={{ fontSize: '15px' }}>
                                HomeMe was created as a project for
                                HackTX 2020 Hackathon (won 2nd place),
                                for the Wayfair: Hack for Housing
                                Inequality challenge. My team consisted
                                of two of my friends (Carlos Zarate &
                                Tyresse Lopez). Our goal was to create a
                                solution to support low income or
                                displaced families on finding and
                                securing housing or other vital resources
                                based on their given location and the
                                user's preference. We implemented this
                                app using a varitey of resources
                                including Flutter/Dart and the google
                                map api. The app still has much to be
                                added to until it is finished, but it
                                is something that I would like to get
                                done and have it out for anyone who
                                might find use for it.
                            </p>
                        </div>
                    </div>
                    <div className="ui buttons">
                        <button
                            className="ui black button"
                            onClick={() => HomeMeDevPost()}
                        >
                            DevPost
                        </button>
                        <button
                            className="ui grey button"
                            onClick={() => HomeMeGitHub()}
                        >
                            GitHub
                        </button>
                    </div>

                </div>
            </center>


            <PdfHandler fileName={HangManSlides} />
            <center>
                <div className="ui card" style={{ marginBottom: '5%' }}>
                    <div className="content">
                        <div className="header">Hang Man</div>
                        <div className="description">
                            <p style={{ fontSize: '15px' }}>
                                Simple Hangman Web App deployed with
                                Heroku, and written using Ruby and Sinatra
                                Framework. Start a new game by clicking on
                                the new game button, and start guessing!
                                Lower or upper case letters are accepted,
                                anything else is considered invalid. If
                                multiple letters are entered, it will only
                                accept the first letter. You have 7 wrong
                                attempts until you lose! Goodluck! :)
                            </p>
                        </div>
                    </div>
                    <div className="ui buttons">

                        <button className="ui green button"
                            onClick={() => hangManRedirect()}
                        >
                            Play Here!
                        </button>
                    </div>

                </div>
            </center>

            <PdfHandler fileName={MeowBotSlides} />

            <center>
                <div className="ui card" style={{ marginBottom: '5%' }}>
                    <div className="content">
                        <div className="header"> Meow Bot</div>
                        <div className="description">
                            <p style={{ fontSize: '15px' }}>
                                Simple Discord Bot created just for fun, initially was just for returning cute cat images or gifs. Adding more features soon as I keep learning about the discord.js node module.
                                <b>Add the bot to your Discord Server Below</b>
                            </p>
                        </div>
                    </div>
                    <div className="ui buttons">

                        <button className="ui grey button"
                            onClick={() => meowBotGitHub()}
                        >
                            GitHub
                        </button>
                        <button className="ui blue button"
                            onClick={() => meowBotAdd()}
                        >
                            Add Bot
                        </button>
                    </div>

                </div>
            </center>

            <PdfHandler fileName={ComingSoon} />

            <center>
                <div className="ui card" style={{ marginBottom: '5%' }}>
                    <div className="content">
                        <div className="header"> Meow Bot</div>
                        <div className="description">
                            <p style={{ fontSize: '15px' }}>
                                Simple Chat App created for fun and to learn more about
                                WebSockets. Created using React, Socket.io and Express. < br/>
                                <b>Link To Github Below</b>
                            </p>
                        </div>
                    </div>
                    <div className="ui buttons">

                        <button className="ui grey button"
                            onClick={() => chatAppGithub()}
                        >
                            GitHub
                        </button>
                        
                    </div>

                </div>
            </center>
            <br />
        </div >
    )
}

export default Projects;

