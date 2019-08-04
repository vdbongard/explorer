import { Node } from './App';

export const favoritesFolder = [
  {
    name: 'Favorites',
  },
  {
    name: 'Desktop',
    icon: '',
  },
  {
    name: 'Downloads',
    icon: '',
  },
  {
    name: 'Documents',
    icon: '',
  },
  {
    name: 'Images',
    icon: '',
  },
  {
    name: 'Music',
    icon: '',
  },
];

export const thisPCFolder = [
  {
    name: 'This PC',
  },
  {
    name: 'Desktop',
    icon: '',
  },
  {
    name: 'Downloads',
    icon: '',
  },
  {
    name: 'Documents',
    icon: '',
  },
  {
    name: 'Images',
    icon: '',
  },
  {
    name: 'Music',
    icon: '',
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
      { type: 'folder', name: 'Images' },
      { type: 'folder', name: 'Music' },
    ],
  },
];
