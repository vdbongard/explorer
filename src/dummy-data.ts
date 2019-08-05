import { Node } from './App';

export const favoritesFolder = [
  {
    name: 'Favorites',
  },
  {
    name: 'Desktop',
    icon: '',
  },
  {
    name: 'Downloads',
    icon: '',
  },
  {
    name: 'Documents',
    icon: '',
  },
  {
    name: 'Pictures',
    icon: '',
  },
  {
    name: 'Music',
    icon: '',
  },
  {
    name: 'Videos',
    icon: '',
  },
];

export const thisPCFolder = [
  {
    name: 'Locations',
  },
  {
    name: 'This PC',
    icon: '',
  },
  {
    name: '8TB HDD',
    icon: '',
  },
  {
    name: 'OneDrive',
    icon: '',
  },
];

export const fileSystem: Node[] = [
  {
    name: 'This PC',
    type: 'folder',
    nodes: [
      {
        type: 'folder',
        name: 'Desktop',
        nodes: [{ type: 'folder', name: 'Games' }, { type: 'file', name: 'background.jpg' }],
      },
      {
        type: 'folder',
        name: 'Downloads',
        nodes: [
          {
            type: 'folder',
            name: 'Pdfs',
            nodes: [{ type: 'file', name: '1.pdf' }, { type: 'file', name: '2.pdf' }],
          },
          { type: 'file', name: 'logo.png' },
          { type: 'file', name: 'sunset.png' },
        ],
      },
      { type: 'folder', name: 'Documents' },
      { type: 'folder', name: 'Pictures' },
      { type: 'folder', name: 'Music' },
      { type: 'folder', name: 'Videos' },
    ],
  },
];
