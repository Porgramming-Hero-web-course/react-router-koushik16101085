import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import femaleImage from "../../Photo/female.png";
import maleImage from "../../Photo/male.png";
import './TeamDetail.css'
import FoundedLogo from "../../Icon/found 1.png";
import SportTypeLogo from "../../Icon/football (1) 1.png";
import FlagLogo from "../../Icon/flag (1) 1.png";
import GenderLogo from "../../Icon/male-gender-sign 1.png";


const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teams, setTeams] = useState([]);
    const {
        strGender,
        strDescriptionEN,
        strStadiumDescription,
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
                <div className="StadiumBackground-image">
                    <h1><img className="position-absolute top-0 start-0" className="strTeamBadge" style={{ width: "300px" }}
                        src={teams.strTeamBadge} alt="" />
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="d-flex justify-content-around mx-5 mb-3 teamDetailHistory">
                    <div className="col-md-9 mt-4">
                        <h1>{teams.strTeam}</h1>
                        <h5> <img className="logoStyle" src={FoundedLogo} alt="" />  Founded:{teams.intFormedYear}</h5>
                        <h5> <img className="logoStyle" src={FlagLogo} alt="" /> Country:{teams.strCountry}</h5>
                        <h5> <img className="logoStyle" src={SportTypeLogo} alt="" /> Sport Type: Football</h5>
                        <h5><img className="logoStyle" src={GenderLogo} alt="" /> Gender:{teams.strGender}</h5>
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

            <div className="teamDescriptionStyle mx-5">
                <h1 style={{ color: 'navy' }}>English Premier League Team Description</h1>
                <p style={{ textAlign: 'left' }} className="mx-5">{strDescriptionEN}</p>
                <br />
                <h1 style={{ color: 'navy' }}>English Premier League Stadium Description</h1>
                <p style={{ textAlign: 'left'}} className="mx-5">{strStadiumDescription}</p>
            </div>
            <div className="socialLogoStyle mt-5">
                <a href={"https://" + teams.strTwitter} target="blank"><FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faTwitterSquare} className="mx-3" alt="" /></a>
                <a href={"https://" + teams.strFacebook} target="blank"><FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faFacebook} className="mx-3" alt="" /></a>
                <a href={"https://" + teams.strYoutube} target="blank"><FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faYoutubeSquare} classNAme="mx-3" alt="" /></a>
            </div>
        </div>

    );

};

export default TeamDetail;