{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const REVERSEPROXY_URL = 'https://secret-beyond-79263.herokuapp.com/' // Custom reverse proxy\
const APPLE_PODCAST_URL = 'https://itunes.apple.com/'\
\
export const BASE_URL = String(REVERSEPROXY_URL + APPLE_PODCAST_URL)\
\
const HOME_SCREEN_PODCAST_COLLECTION_IDS = '278981407,863897795,1191775648,582272991,1200361736,1322200189,1379959217,998568017,1081244497,1062418176,1334878780,316045799,480486345,265307784,643055307,1057255460,1077418457,268213039,1258635512,169078375'\
\
export const HOMESCREEN_API_URL = String(`$\{BASE_URL\}lookup?id=$\{HOME_SCREEN_PODCAST_COLLECTION_IDS\}`)\
}