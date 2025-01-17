const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Create a user
    const user = await prisma.user.create({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@trust-cv.de",
        password: "password",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        firstName: "Max",
        lastName: "Mustermann",
        email: "max@trust-cv.de",
        password: "password",
      },
    });

    const tuBerlin = await prisma.company.create({
      data: {
        name: `Technical University of Berlin`, // replace with real company name
        email: `info@tu-berlin.de`,
        logo: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 235.92 80.7" style="enable-background:new 0 0 235.92 80.7" width="146" height="50" xml:space="preserve"><style>.st1{fill:#c50e1f}</style><path id="XMLID_191_" class="st1" d="M75.81 80.7c6.28 0 10.79-1.86 14.29-4.21 3.27-2.19 5.8-4.78 7.74-8.12 2.51-4.32 2.78-8.33 2.99-10.66 0-.02 4.67-48.4 4.67-48.4H82.7c-.01 0-6.9 71.39-6.89 71.39z"/><path id="XMLID_190_" class="st1" d="m53.86 22.73-3.45 35.8c-.58 7.83 2.36 11.85 4.18 13.97 3.34 3.87 9.47 6.91 16.56 8.18l6.6-68.51c.21-3.25-.73-6.09-2.9-8.57C72.32.71 68.57.05 67.02.05L10.46.06C6.28.06 0 4.11 0 11.11c0 8.65 7.69 11.62 10.34 11.62 1.35.01 43.52 0 43.52 0z"/><path id="XMLID_189_" class="st1" d="m44.53 71.41 4.24-44.02-22.84-.05s-3.72 38.32-4.26 44.02l22.86.05z"/><g id="XMLID_127_"><path id="XMLID_187_" class="st1" d="M119.73 11.16v11.67h-2.18V11.16h-3.7V9.31h9.61v1.84h-3.73z"/><path id="XMLID_185_" class="st1" d="M126.36 22.83V9.31h7.13v1.82h-4.95v3.84h4.7v1.78h-4.7v4.2h4.95v1.86h-7.13z"/><path id="XMLID_183_" class="st1" d="M143.02 22.99c-4.52 0-6.19-2.92-6.19-6.53 0-4.2 2.12-7.27 6.67-7.27 1 0 2.04.16 2.98.38l-.24 2c-.98-.3-1.94-.46-2.92-.46-2.82 0-4.1 2.16-4.1 4.98 0 3.14 1.34 4.92 4.28 4.92.92 0 2.1-.26 2.84-.62l.26 1.94c-1.02.42-2.28.66-3.58.66z"/><path id="XMLID_181_" class="st1" d="M158.99 22.83v-6.07h-6.39v6.07h-2.18V9.31h2.18v5.59h6.39V9.31h2.16v13.51h-2.16z"/><path id="XMLID_179_" class="st1" d="m174.01 22.83-4.62-7.69c-.6-.98-1.08-1.94-1.5-2.84.08 1.32.12 4.06.12 5.99v4.54h-2.12V9.31h2.86l4.46 7.37c.6 1 1.14 2.08 1.64 3.06-.08-1.54-.14-4.44-.14-6.43v-4h2.12v13.51h-2.82z"/><path id="XMLID_177_" class="st1" d="M181.56 22.83V9.31h2.18v13.51h-2.18z"/><path id="XMLID_175_" class="st1" d="M190.47 23.03c-.98 0-1.94-.12-2.72-.32l.12-2.06c.76.28 1.82.5 2.8.5 1.48 0 2.68-.62 2.68-2.08 0-2.84-5.91-1.64-5.91-6.01 0-2.32 1.82-3.94 4.96-3.94.8 0 1.62.1 2.44.24l-.12 1.94c-.78-.24-1.64-.38-2.44-.38-1.68 0-2.54.78-2.54 1.9 0 2.7 5.9 1.7 5.9 5.93.01 2.48-1.95 4.28-5.17 4.28z"/><path id="XMLID_173_" class="st1" d="M204.85 22.99c-4.52 0-6.19-2.92-6.19-6.53 0-4.2 2.12-7.27 6.67-7.27 1 0 2.04.16 2.98.38l-.24 2c-.98-.3-1.94-.46-2.92-.46-2.82 0-4.1 2.16-4.1 4.98 0 3.14 1.34 4.92 4.28 4.92.92 0 2.1-.26 2.84-.62l.26 1.94c-1.02.42-2.28.66-3.58.66z"/><path id="XMLID_171_" class="st1" d="M220.82 22.83v-6.07h-6.39v6.07h-2.18V9.31h2.18v5.59h6.39V9.31h2.16v13.51h-2.16z"/><path id="XMLID_169_" class="st1" d="M227.71 22.83V9.31h7.13v1.82h-4.95v3.84h4.7v1.78h-4.7v4.2h4.95v1.86h-7.13z"/><path id="XMLID_167_" class="st1" d="M120.21 47.29c-4.24 0-5.15-2.32-5.15-4.8v-8.91h2.18v8.75c0 1.8.6 3.16 3.1 3.16 2.2 0 3.2-.92 3.2-3.44v-8.47h2.14v8.31c.01 3.6-1.93 5.4-5.47 5.4z"/><path id="XMLID_165_" class="st1" d="m138.25 47.09-4.62-7.69c-.6-.98-1.08-1.94-1.5-2.84.08 1.32.12 4.06.12 5.99v4.54h-2.12V33.58h2.86l4.46 7.37c.6 1 1.14 2.08 1.64 3.06-.08-1.54-.14-4.44-.14-6.43v-4h2.12v13.51h-2.82z"/><path id="XMLID_163_" class="st1" d="M145.6 47.09V33.58h2.18v13.51h-2.18z"/><path id="XMLID_161_" class="st1" d="M157.79 47.09h-2.48l-4.8-13.51h2.4l2.84 8.33c.28.78.6 1.74.86 2.74h.02c.24-.94.48-1.78.88-2.88l2.9-8.19h2.24l-4.86 13.51z"/><path id="XMLID_159_" class="st1" d="M165.38 47.09V33.58h7.13v1.82h-4.95v3.84h4.7v1.78h-4.7v4.2h4.95v1.86h-7.13z"/><path id="XMLID_156_" class="st1" d="m182.84 47.09-4.2-5.85h-.1v5.85h-2.18V33.58c.98-.06 2.1-.08 3.62-.08 2.8 0 4.72.98 4.72 3.66 0 2.16-1.62 3.54-3.82 3.78.38.48.8 1 1.14 1.44l3.56 4.7h-2.74zm-3.16-11.81c-.42 0-.82.02-1.14.04v4.28c.2.02.58.04 1.06.04 1.76 0 2.82-.9 2.82-2.24 0-1.48-.92-2.12-2.74-2.12z"/><path id="XMLID_154_" class="st1" d="M190.87 47.29c-.98 0-1.94-.12-2.72-.32l.12-2.06c.76.28 1.82.5 2.8.5 1.48 0 2.68-.62 2.68-2.08 0-2.84-5.91-1.64-5.91-6.01 0-2.32 1.82-3.94 4.96-3.94.8 0 1.62.1 2.44.24l-.12 1.94c-.78-.24-1.64-.38-2.44-.38-1.68 0-2.54.78-2.54 1.9 0 2.7 5.9 1.7 5.9 5.93.02 2.48-1.95 4.28-5.17 4.28z"/><path id="XMLID_152_" class="st1" d="M199.56 47.09V33.58h2.18v13.51h-2.18z"/><path id="XMLID_150_" class="st1" d="M210.47 35.42v11.67h-2.18V35.42h-3.7v-1.84h9.61v1.84h-3.73z"/><path id="XMLID_145_" class="st1" d="m223.91 47.09-1.04-2.98h-5.47l-1.04 2.98h-2.2L219 33.58h2.42l4.9 13.51h-2.41zm-5.69-14.67c-.68 0-1.2-.54-1.2-1.22 0-.66.52-1.2 1.2-1.2s1.22.54 1.22 1.2c0 .67-.54 1.22-1.22 1.22zm2.52 5.7c-.26-.7-.44-1.34-.6-2.08h-.04a15.9 15.9 0 0 1-.62 2.14l-1.52 4.18h4.32l-1.54-4.24zm1.43-5.7c-.68 0-1.22-.54-1.22-1.22 0-.66.54-1.2 1.22-1.2.66 0 1.2.54 1.2 1.2 0 .67-.54 1.22-1.2 1.22z"/><path id="XMLID_143_" class="st1" d="M232.2 35.42v11.67h-2.18V35.42h-3.7v-1.84h9.61v1.84h-3.73z"/><path id="XMLID_139_" class="st1" d="M118.75 71.41c-.82 0-2.18-.04-3.68-.06V57.84c1.06-.02 2.6-.06 4.24-.06 2.94 0 4.46 1.2 4.46 3.28 0 1.38-.92 2.6-2.3 3.08v.04c1.76.34 2.58 1.68 2.58 3.08 0 1.77-1.16 4.15-5.3 4.15zm.2-11.89c-.6 0-1.18.02-1.7.04v4c.36.02.7.02 1.16.02 2.02 0 3.08-.82 3.08-2.18 0-1.1-.62-1.88-2.54-1.88zm-.48 5.69c-.22 0-.92 0-1.22.02v4.3c.34.06.88.1 1.58.1 1.98 0 2.92-.96 2.92-2.32 0-1.54-1.38-2.1-3.28-2.1z"/><path id="XMLID_137_" class="st1" d="M127.72 71.35V57.84h7.13v1.82h-4.95v3.84h4.7v1.78h-4.7v4.2h4.95v1.86h-7.13z"/><path id="XMLID_134_" class="st1" d="m145.18 71.35-4.2-5.85h-.1v5.85h-2.18V57.84c.98-.06 2.1-.08 3.62-.08 2.8 0 4.72.98 4.72 3.66 0 2.16-1.62 3.54-3.82 3.78.38.48.8 1 1.14 1.44l3.56 4.7h-2.74zm-3.17-11.81c-.42 0-.82.02-1.14.04v4.28c.2.02.58.04 1.06.04 1.76 0 2.82-.9 2.82-2.24.01-1.48-.91-2.12-2.74-2.12z"/><path id="XMLID_132_" class="st1" d="M151.06 71.35V57.84h2.18v11.61h4.65v1.9h-6.83z"/><path id="XMLID_130_" class="st1" d="M160.62 71.35V57.84h2.18v13.51h-2.18z"/><path id="XMLID_128_" class="st1" d="m175.45 71.35-4.62-7.69c-.6-.98-1.08-1.94-1.5-2.84.08 1.32.12 4.06.12 5.98v4.54h-2.12v-13.5h2.86l4.46 7.37c.6 1 1.14 2.08 1.64 3.06-.08-1.54-.14-4.44-.14-6.43v-4h2.12v13.51h-2.82z"/></g></svg>`,
        password: "password",
      },
    });

    // Create 10 jobs
    const jobs = await Promise.all(
      [
        {
          jobTitle: "System Manager (m/w/d) Microsoft Exchange",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "We are looking for a dedicated System Manager to maintain and improve our Microsoft Exchange infrastructure. The ideal candidate has experience in managing large-scale Exchange environments and is familiar with PowerShell scripting.",
          requirements: [
            "Experience in managing Microsoft Exchange environments",
            "Familiarity with PowerShell scripting",
            "Strong problem-solving skills",
            "Good communication and teamwork skills",
          ],
        },
        {
          jobTitle: "Research Assistant in Computer Science",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "The Computer Science department at TU Berlin is seeking a motivated Research Assistant to support our research projects. The candidate should have a strong background in computer science, excellent programming skills, and a desire to contribute to cutting-edge research.",
          requirements: [
            "Master's degree in Computer Science or a related field",
            "Excellent programming skills in at least one language",
            "Familiarity with research methods and tools",
            "Good communication and teamwork skills",
          ],
        },
        {
          jobTitle: "IT Specialist for System Integration",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "TU Berlin is looking for an IT Specialist for System Integration to join our team. The candidate should have experience in integrating complex IT systems, a good understanding of network and security concepts, and strong problem-solving skills.",
          requirements: [
            "Bachelor's degree in Computer Science or a related field",
            "Experience in integrating IT systems and applications",
            "Familiarity with network and security protocols",
            "Strong problem-solving and communication skills",
          ],
        },
        {
          jobTitle: "Lecturer in Mathematics",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "The Mathematics department at TU Berlin is seeking a Lecturer to teach undergraduate and graduate courses. The candidate should have a PhD in Mathematics, a strong record of research, and a passion for teaching and mentoring students.",
          requirements: [
            "PhD in Mathematics or a related field",
            "Strong record of research and publications",
            "Experience in teaching and mentoring students",
            "Good communication and interpersonal skills",
          ],
        },
        {
          jobTitle: "PhD Position in Electrical Engineering",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "The Electrical Engineering department at TU Berlin is offering a PhD position in the field of power electronics. The candidate should have a Master's degree in Electrical Engineering or a related field, a strong background in power electronics, and a desire to pursue a research career.",
          requirements: [
            "Master's degree in Electrical Engineering or a related field",
            "Strong background in power electronics and control systems",
            "Experience in simulation and experimental work",
            "Good communication and teamwork skills",
          ],
        },
        {
          jobTitle: "Administrative Assistant",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "TU Berlin is looking for an Administrative Assistant to support our administrative tasks. The candidate should have excellent organizational and communication skills, a good understanding of MS Office, and a desire to work in a dynamic and international environment.",
          requirements: [
            "High school diploma or equivalent",
            "Excellent organizational and communication skills",
            "Proficiency in MS Office and other office software",
            "Ability to work in a fast-paced and international environment",
          ],
        },
        {
          jobTitle: "Postdoctoral Researcher in Physics",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "The Physics department at TU Berlin is offering a Postdoctoral Researcher position in the field of condensed matter physics. The candidate should have a PhD in Physics, a strong record of research, and a desire to pursue a research career in academia or industry.",
          requirements: [
            "PhD in Physics or a related field",
            "Strong record of research and publications in condensed matter physics",
            "Experience in experimental or theoretical work",
            "Good communication and teamwork skills",
          ],
        },
        {
          jobTitle: "Student Assistant in Mechanical Engineering",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "The Mechanical Engineering department at TU Berlin is seeking a Student Assistant to support our research and teaching activities. The candidate should be enrolled in a Mechanical Engineering or related program, have excellent programming and CAD skills, and a desire to contribute to our projects.",
          requirements: [
            "Enrollment in a Mechanical Engineering or related program",
            "Excellent programming skills in at least one language",
            "Proficiency in CAD and simulation software",
            "Good communication and teamwork skills",
          ],
        },
        {
          jobTitle: "Professorship in Chemistry",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "The Chemistry department at TU Berlin is offering a Professorship in the field of organic chemistry. The candidate should have a PhD in Chemistry, a strong record of research and teaching, and a desire to lead and inspire a team of researchers and students.",
          requirements: [
            "PhD in Chemistry or a related field",
            "Strong record of research and publications in organic chemistry",
            "Experience in teaching and mentoring students",
            "Ability to lead and inspire a team of researchers and students",
          ],
        },
        {
          jobTitle: "Project Manager in Civil Engineering",
          location: "Berlin",
          companyName: "TU Berlin",
          description:
            "TU Berlin is looking for a Project Manager in Civil Engineering to manage and coordinate our construction projects. The candidate should have a Master's degree in Civil Engineering or a related field, experience in project management, and a desire to contribute to our sustainable and innovative projects.",
          requirements: [
            "Master's degree in Civil Engineering or a related field",
            "Experience in project management and coordination",
            "Familiarity with sustainable and innovative construction methods",
            "Good communication and leadership skills",
          ],
        },
      ].map(async (e) => {
        const company = await prisma.company.findFirst({
          where: {
            email: "info@tu-berlin.de",
          },
        });
        return await prisma.job.create({
          data: {
            position: e.jobTitle,
            description: e.description,
            requirements: e.requirements,
            location: e.location,
            companyId: company.id,
          },
        });
      }),
    );

    // Create a CV
    const personalInfo = {
      firstName: "John",
      lastName: "Doe",
      dob: "01/01/1990",
      nationality: "American",
      image:
        "https://images.squarespace-cdn.com/content/v1/6091c3e4f5f6071721c43f77/1683711745725-O1R2JQOY9II73V828PYS/Midjourney+Headshot.jpg",
      gender: "Male",
      aboutMe: "A software engineer with 5 years of experience",
      email: "johndoe@example.com",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
    };

    const workExperience = {
      position: "Software Engineer",
      employer: "Previous Company",
      from: "01/01/1990",
      to: "01/01/1995",
      city: "Anytown",
      country: "USA",
      summary: "Worked on various software projects",
    };

    const education = {
      title: "Bachelor of Science in Computer Science",
      institutionName: "University of Anytown",
      website: "www.university.edu",
      from: "01/01/1990",
      to: "01/01/2000",
      city: "Anytown",
      country: "USA",
    };

    const resumeFormData = {
      personalInfo,
      workExperiences: [workExperience],
      educations: [education],
    };

    const cv = await prisma.cV.create({
      data: {
        file_name: "John Doe's Resume",
        cv: JSON.stringify(resumeFormData),
        userId: user.id,
      },
    });

    // Create a job application
    const jobApplication = await prisma.jobApplication.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        job: {
          connect: {
            id: jobs[0].id, // connect to the first job for simplicity
          },
        },
        cv: {
          connect: {
            id: cv.id,
          },
        },
      },
    });

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
