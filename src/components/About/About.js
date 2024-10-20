import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import photo from '../../assets/photo.jpg';

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>Shreyambika Hegde.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A learner.</h2>}
      <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
      <img src={photo} alt='Profile' className='about__image' /> 
      </div>
      <p className='about__desc'>I am a Information science engineering student studying in JSSATE Bangalore.I am interested in app development.I am a cyber security enthuasiast.</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
            resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
             
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
