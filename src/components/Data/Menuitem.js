import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    name: 'Feature',
    link: '/',

    subRoutes: [
      {
        name: 'Todo List',
        link: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        name: 'Revenue',
        link: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        name: 'Reminders',
        link: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        name: 'Planning',
        link: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    name: 'Company',
    link: '/',

    subRoutes: [
      {
        name: 'History',
        link: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        name: 'Our Team',
        link: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        name: 'Blog',
        link: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    name: 'Careers',
    link: '/',
  },
  {
    name: 'About',
    link: '/',
  }
]

