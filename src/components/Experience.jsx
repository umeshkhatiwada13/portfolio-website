// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Add your own work experience here
const experiences = [
  {
    title: 'Lead Backend Developer',
    company: 'Softtech Pvt. Ltd.',
    date: 'August 2022 - Present',
    description: [
      'Responsible for Designing Backend Architecture and proper functioning of the system',
      'Communicate with Client and Project Manager to convert their requirement to new features in the system',
      'Design, Develop and Deploy the required backend logic and communicate with Frontend Engineer for its implementation',
    ],
    location: 'Kathmandu, Nepal',
    link: { url: 'http://gorkha.nagardemoapp.com', label: 'Softtech Pvt. Ltd.' },
    logo: null,
  },
  {
    title: 'Java Engineer',
    company: 'Infodevelopers Pvt. Ltd.',
    date: 'Febraury 2022 - Present',
    description: [
      'Performing System Analysis and Design, Development, and Unit Testing in both Monolithic and Microservice architecture',
      'Mentoring and Teaching Junior developers and assigning them task based on their capabilities',
      'Reponsible for Deploying applications to Server,log tracing and Debugging',
    ],
    location: 'Sanepa, Lalitpur',
    link: { url: 'https://infodev.com.np/', label: 'Infodev' },
    logo: null,
  },
  {
    title: 'Junior Java Developer',
    company: 'E-Digital Nepal',
    date: 'January 2019 - January 2022',
    description: [
      'Worked as Full stack Java Developer, developing system for Data storing and Complex report generating using SQL, Java and JSP with jQuery',
      'Collaborated in a team-based, Agile environment to accomplish objectives by deadlines',
      'Participated in performance analysis, design, development, and testing',
    ],
    location: 'Tinkune, Kathmandu',
    link: { url: 'https://edigitalnepal.com/', label: 'Digital Nepal' },
    logo: null,
  },
]

const educationArray = [
  {
    schoolName: 'Trivubhan University',
    degree: 'Bachelor of Computer Science',
    description:
      'Graduated with 77% and with Distinction in last 2 semesters. Developed Library Management System for College Library  and Completed Internship in E-Digital Nepal as Java Developer Intern.',
    startDate: '2016',
    endDate: '2020',
    typeofDegree: 'Bachelor Degree',
  },
  {
    schoolName: 'Banepa NIST HSS',
    degree: 'Intermediate',
    description:
      'Completed Science High school degree with 70% with Math as Major Subject',
    startDate: '2014',
    endDate: '2016',
    typeofDegree: 'Bootcamp',
  },
]


const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white experience">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 list-none">
          {experiences.map((exp, index) => (
            <div key={index}>
              <p className="text-sm text-primaryText-600 dark:text-primaryText-400">
                {exp.date}
              </p>
              <h2 className="mt-1 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <div className="text-lg">{exp.title}</div>
                <a rel="noreferrer" target='_blank' href={exp.link.url}>
                  <div className="text-blue-500">{exp.company}</div>
                </a>
              </h2>
              <div>
                {exp.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
                    {item}
                  </li>
                ))}
              </div>
              {/* <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <div className="flex-none w-6 h-6" />
                <span className="ml-2">{exp.link.label}</span>
              </p> */}
            </div>
          ))}

        </ul>
      </div>


      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 list-none">
          {educationArray.map((edu, index) => (
            <>
              <div key={index}>
                <p className="text-sm text-primaryText-600 dark:text-primaryText-400">
                  {edu.startDate} - {edu.endDate}
                </p>
                <h2 className="mt-1 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                  <div className="text-lg">{edu.degree}</div>
                  <div className="text-blue-500">{edu.company}</div>
                </h2>
                <p className="text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                  {edu.schoolName}
                </p>
                <p className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400">
                  {edu.description}
                </p>
              </div>
            </>
          ))}

        </ul>
      </div>


    </div>
  );
}

export default Experience;
