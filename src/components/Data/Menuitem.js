import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Feature',
    path: '/feature',

    subNav: [
      {
        title: 'Todo List',
        path: '/todoLit',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Reminders',
        path: '/todoLit',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Planning',
        path: '/todoLit',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Company',
    path: '/reports',

    subNav: [
      {
        title: 'History',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Our Team',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Blog',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Careers',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'About',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  }
]

export const CompanyItem =[
    {
        title: 'History',
        path: '/history',
        cName: 'dropdown-link'
    },
    {
        title: 'Our Team',
        path: '/team',
        cName: 'dropdown-link'
    },
    {
        title: 'Blog',
        path: '/blog',
        cName: 'dropdown-link'
    }
]