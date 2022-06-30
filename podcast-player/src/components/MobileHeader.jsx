{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // This component will only show on mobile sized viewports\
import React from 'react'\
import \{ Link, NavLink \} from 'react-router-dom'\
\
import logo from '../img/logo.svg'\
import home_logo from '../img/home_icon.svg'\
import search_icon from '../img/search_icon_white.svg'\
\
const MobileHeader = () => \{\
  return (\
    <div className="block md:hidden w-full text-white bg-gray-900">\
      <div className="flex flex-row ">\
        <div className="flex flex-row py-4">\
          <img src=\{logo\} alt='logo' />\
          <Link\
            className="text-2xl text-white lg:text-3xl hover:text-gray-100"\
            to="/">\
            pplayer\
              </Link>\
        </div>\
        <div className="text-left pt-3">\
          <NavLink \
							className="flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800" \
							activeClassName="bg-gray-800" exact to="/">\
            <img src=\{home_logo\} alt='home_icon' />\
            <span className="ml-4">Home</span>\
          </NavLink>\
        </div>\
        <div className="text-left pt-3">\
          <div>\
            <NavLink className="flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800" \
											activeClassName="bg-gray-800" exact to="/search">\
              <img src=\{search_icon\} alt='search_icon' />\
              <span className="ml-4">Search</span>\
            </NavLink>\
          </div>\
        </div>\
        <div className="mt-3 flex flex-col">\
          <a href="//add link to your github repo" \
							className="mx-2 text-sm text-gray-600 hover:text-gray-500" \
							aria-label="GitHub">\
            Github\
          </a>\
\
          <a href="//add link to your twitter" \
							className="mx-2 text-sm text-gray-600 hover:text-gray-500"\
	            aria-label="Twitter">\
            Twitter\
          </a>\
        </div>\
      </div>\
    </div>\
  )\
\}\
\
export default MobileHeader\
}