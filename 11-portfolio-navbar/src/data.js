import React from 'react';
import {
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
  FaSoundcloud,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/resume',
    text: 'resume',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaGithubAlt />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaSoundcloud />,
  },
];
