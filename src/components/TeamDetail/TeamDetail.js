import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
//import { } from '@fontawesome/free-solid-svg-icons';
import femaleImage from "../../Photo/female.png";
import maleImage from "../../Photo/male.png";
import TwitterLogo from '../../Icon/Twitter.png';
import FacebookLogo from '../../Icon/Facebook.png';
import YoutubeLogo from '../../Icon/YouTube.png';
//import bannerImage from "../../Photo/159000955_289758125901032_3727333242678077915_n.jpg"
import './TeamDetail.css'
import FoundedLogo from "../../Icon/found 1.png";
import SportTypeLogo from "../../Icon/football (1) 1.png";
import FlagLogo from "../../Icon/flag (1) 1.png";
import GenderLogo from "../../Icon/male-gender-sign 1.png";
//import TeamDetailFooter from '../TeamDetailFotter/TeamDetailFooter';


const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teams, setTeams] = useState([]);
    const {
        strTeam,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strDescriptionEN,
        strStadiumDescription,
        strTwitter,
        strFacebook,
        strYoutube


    } = teams;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams[0]))
    }, [idTeam])

    let gender = strGender && strGender.toLowerCase();

    return (
        <div className="teamDetail">

            <div className=" position-relative bannerStyle">
                <div className="background-image">
                    <h1><img className="position-absolute top-0 start-0" className="strTeamBadge" style={{ width: "300px" }}
                        src={teams.strTeamBadge} alt="" />
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex flex-row bd-highlight mb-3 teamDetailText">
                    <div className="col-md-9">
                        <h1>{teams.strTeam}</h1>
                        <h3> <img className="logoStyle" src={FoundedLogo} alt="" />  Founded:{teams.intFormedYear}</h3>
                        <h3> <img className="logoStyle" src={FlagLogo} alt="" /> Country:{teams.strCountry}</h3>
                        <h3> <img className="logoStyle" src={SportTypeLogo} alt="" /> Sport Type: Football</h3>
                        <h3><img className="logoStyle" src={GenderLogo} alt="" /> Gender:{teams.strGender}</h3>
                    </div>
                    <div className="col-md-3 teamImage">
                        {
                            gender && gender === "strGender" ? (
                                <img style={{ width: "300px" }} src={femaleImage} alt="" />

                            ) : (

                                <img style={{ width: "300px" }} src={maleImage} alt="" />
                            )
                        }

                    </div>

                </div>
            </div>

            <div className="teamDescriptionStyle">
                <h1>Team Description</h1>
                <p>{strDescriptionEN}</p>

                <br />
                <h1>Stadium Description</h1>
                <p>{strStadiumDescription}</p>
            </div>
            <div className="socialLogoStyle mt-5">
                <a href={strTwitter}><FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faTwitterSquare} className="mx-3" alt="" /></a>
                <a href={strFacebook}><FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faFacebook} className="mx-3" alt="" /></a>
                <a href={strYoutube}><FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faYoutubeSquare} classNAme="mx-3" alt="" /></a>
            </div>
        </div>

    );

};

export default TeamDetail;