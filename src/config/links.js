import Projects from '@/components/Projects'

export const SHORTCUT_LINKS = [[{
  icon: '/images/glossary.png',
  link: '/content/projets-jeagdb',
  text: 'glossary'
}, {
  icon: '/images/projects.png',
  text: 'projects',
  component: Projects
}], [{
  icon: '/images/shrek.png',
  text: 'sprites slicer',
  link: '/sprite-slicer',
}]
]

export const BOTTOM_BAR_LINKS = [{
  icon: '/images/linkedin.png',
  link: 'https://www.linkedin.com/in/jeanne-gardebois',
  text: 'Linkedin',
  width: 24,
  height: 24
}, {
  icon: '/images/github.png',
  link: 'https://github.com/jeagdb',
  text: 'Github',
  width: 24,
  height: 24
}, {
  icon: '/images/shutdown.png',
  text: 'Shut Down...',
  divider: true
}]