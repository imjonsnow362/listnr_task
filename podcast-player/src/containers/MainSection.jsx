{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react'\
import \{\
  Switch,\
  Route\
\} from 'react-router-dom'\
\
import HomeScreen from '../screens/HomeScreen'\
import SearchScreen from '../screens/SearchScreen'\
import PodcastDetailsScreen from '../screens/PodcastDetailsScreen'\
import GenreListScreen from '../screens/GenreListScreen'\
\
const MainSection = () => \{\
  return (\
    <>\
      <main className=" player-section pl-0 md:pl-60  min-h-screen min-w-full">\
        <Switch>\
          <Route exact path="/" component=\{HomeScreen\}></Route>\
          <Route exact path="/Search" component=\{SearchScreen\}></Route>\
          <Route exact path="/podcast/:collectionId" render=\{(props) => (<PodcastDetailsScreen \{...props\} />)\} />\
          <Route exact path="/genre/:genreId" component=\{GenreListScreen\}></Route>\
        </Switch>\
      </main>\
    </>\
  )\
\}\
\
export default MainSection\
}