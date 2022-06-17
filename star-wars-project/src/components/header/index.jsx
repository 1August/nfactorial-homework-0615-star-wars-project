import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import {useContext} from "react";
import {DefaultContext} from "../../Context";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = ({ fan }) => {
  const { themeColor, changeTheme } = useContext(DefaultContext);

  return (
    <header id={'header'}>
      <div className="container">
        <div className="links-layout">
          {swLinks.map((link) => (
              <a
                  key={link.name}
                  className="link"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
              >
                {link.component}
              </a>
          ))}
        </div>
        <StarWarsLogoSVG onClick={e => changeTheme(themeColor === '#000000' ?'#ffffff' : '#000000')}/>
        <div className="search-layout">
          <p>I am fan of: {fan}</p>
          <Autocomplete
              id="free-solo-demo"
              freeSolo
              renderInput={(params) => <TextField {...params} label="Search" />} options={[]}
          />
          <IconSearchSVG className="search-icon" />
        </div>
      </div>
    </header>
  );
};
