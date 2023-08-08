import Link from 'next/link'
import styled from 'styled-components'
import { get, map } from 'lodash'
import { Button, Frame, Separator, Avatar } from 'react95'

const PROJECTS = [{
  date: '2022-2023',
  tags: ['javascript', 'next'],
  link: 'https://github.com/jeagdb/jeagdb.github.io',
  title: 'Portfolio',
  preview: 'images/portfolio.png',
  external: true,
  description: 'Website serving as a portfolio, built with Next.js and hosted on GitHub Pages, featuring links to GitHub, LinkedIn, CV, and various small projects.'
}, {
  date: '2023',
  tags: ['javascript', 'next'],
  link: '/game',
  title: 'Sprite Slicer',
  preview: '',
  description: 'Small application to slice and visualize sprites from spritesheet'
}, {
  date: '2023',
  tags: ['ansible', 'docker'],
  link: 'https://github.com/jeagdb/homeserver',
  title: 'Home Server',
  preview: 'images/home-server.jpg',
  external: true,
  description: 'Home server setup using Ansible with each service running in a Docker container in order to ensures streamlined deployment, easy scalability, and isolated environments for each service.'
}, {
  date: '2020',
  tags: ['javascript', 'node', 'pug'],
  link: 'https://github.com/jeagdb/spotifyrics',
  title: 'Spotifyrics',
  preview: '/images/spotifyrics.png',
  external: true,
  description: 'Server-rendered application using Pug to generate views, interfacing Spotify\'s API to fetch user playlists and provides song lyrics from Genius'
}]

const Container = styled.div`
  width: 100%;
  max-height: 400px;
  max-width: 800px;
  overflow: auto;
`
const StyledFrame = styled(Frame)`
  padding: 8px;
  width: 100%;
`
const Inline = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  align-items: center;
`
const SpaceBetween = styled(Inline)`
  gap: 16px;
  justify-content: space-between;
`
const Title = styled.span`
  font-weight: 600;
`
const Date = styled.span`
  font-size: 14px;
`
const Tag = styled.div`
  font-size: 12px;
  font-style: italic;
`
const Preview = styled(Avatar)`
  min-width: 300px;
`
const BottomButton = styled.div`
  flex: 1;
  align-self: self-end;
`
const Description = styled.span`
  font-size: 20px;
`

const Projects = () => {
  return (
    <Container>
      {map(PROJECTS, ({ title, date, link, tags, external, preview, description }) => {
        return (
          <StyledFrame>
            <SpaceBetween>
              <Title>{title}</Title>
              <Date>{date}</Date>
            </SpaceBetween>
            <Separator />
            <Inline>
              {map(tags, tag => <Tag key={tag}>{tag}</Tag>)}
            </Inline>
            <StyledFrame>
              <SpaceBetween>
                <Preview
                  src={preview}
                  alt={description}
                  size={300}
                  style={{ objectFit: 'cover'}}
                  square={true} />
                <Description>{description}</Description>
                <BottomButton>
                  {external &&
                    <a href={link} target='_blank' rel='noreferrer' >
                      <Button>Voir</Button>
                    </a>}
                  {!external &&
                    <Link href={link} target='_blank' >
                      <Button>Voir</Button>
                    </Link>}
                </BottomButton>
              </SpaceBetween>
            </StyledFrame>
          </StyledFrame>
        )
      })}
    </Container>
  )
}

export default Projects