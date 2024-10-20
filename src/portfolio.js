const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Smith',
  role: 'Front End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1Vnk6zEa8r_HxJuzFZC39HhrM6pEH0XS_/view?usp=drive_link',
  social: {
    linkedin: 'https://linkedin.com/in/shreyambika-hegde-42b169256',
    github: 'https://github.com/ShreyambikaHegde',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
  {
    name: 'Plant disease detection',
    
    sourceCode: 'https://github.com/ShreyambikaHegde/PlantDiseaseNew.git',
    livePreview: 'https://github.com/ShreyambikaHegde/PlantDiseaseNew.git',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  
  'React',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shreyambika500@gmail.com',
}

export { header, about, projects, skills, contact }
