// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Add your own work experience here
const experiences = [
  {
    title: 'Lead Backend Developer',
    company: 'Softtech Pvt. Ltd.',
    date: '2022 - Present',
    description: [
      'Supervise a team of 100+ employees across all areas of the business, with approximately 60 team members daily',
      'Develop and facilitate daily storewide meetings, workshops, and team training & on-boarding',
      'Created and rolled out business training leading to +50%  business related connections, later being implemented market wide to all retail store',
    ],
    location: 'Kathmandu, Nepal',
    link: { url: 'http://gorkha.nagardemoapp.com', label: 'Softtech Pvt. Ltd.' },
    logo: null,
  },
  {
    title: 'Java Engineer',
    company: 'Infodevelopers Pvt. Ltd.',
    date: '2022 - Current',
    description: [
      'Provided technical support to customers, including troubleshooting, diagnosing, and repairing hardware and software issues',
      'Strong people skills and a knack for problem solving',
      'Maintain composure, provide empathy and customer focus while troubleshooting and solving technical issues',
    ],
    location: 'Sanepa, Lalitpur',
    link: { url: 'https://infodev.com.np/', label: 'Infodev' },
    logo: null,
  },
  {
    title: 'Java Developer',
    company: 'E-Digital Nepal',
    date: '2019 - 2021',
    description: [
      'Provided technical support to customers, including troubleshooting, diagnosing, and repairing hardware and software issues',
      'Strong people skills and a knack for problem solving',
      'Maintain composure, provide empathy and customer focus while troubleshooting and solving technical issues',
    ],
    location: 'Tinkune, Kathmandu',
    link: { url: 'https://edigitalnepal.com/', label: 'Digital Nepal' },
    logo: null,
  },
]

const Experience = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about">
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
    </div>
  );
}

export default Experience;
