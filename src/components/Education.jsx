// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Add your own work experience here
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

const Education = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about">
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

export default Education;
