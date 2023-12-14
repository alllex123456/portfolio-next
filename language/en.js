export default {
  label: 'en',
  titles: {
    capabilities: 'capabilities',
    work: 'selected work',
    about: 'about me',
    contact: 'contact me',
  },
  navigation: {
    links: [
      { label: 'capabilities', href: '#capabilities' },
      { label: 'work', href: '#work' },
      { label: 'about', href: '#about' },
      { label: 'contact', href: '#contact' },
    ],
  },
  buttons: {
    details: 'details',
    back: 'back',
    send: 'send',
    liveDemo: 'Live demo',
  },
  hero: {
    title: 'Passionate Web Developer Crafting Cutting-edge Solutions',
    cta: 'Check my capabilities',
  },
  design: {
    title: 'design',
    style: {
      title: 'style',
      content: [
        'Font pairing',
        'Color theory',
        'Composition, shape & form',
        'Contrast & symmetry concepts',
      ],
    },
    branding: {
      title: 'branding',
      content: [
        'Logo design',
        'Visual consistency',
        'Color palette creation',
        'Brand consistency & positioning',
      ],
    },
    ux: {
      title: 'ux',
      content: [
        'Persona development',
        'User journey',
        'Information architecture',
        'Prototyping & user testing',
      ],
    },
    tools: {
      title: 'tools',
      content: [
        'Figma: style guide, wireframing, prototyping',
        'Adobe Illustrator: vector graphics',
        'Adobe Photoshop: raster graphics',
      ],
    },
  },
  develop: {
    title: 'develop',
    frontend: {
      title: 'frontend',
      content: [
        'React with Next.js for full-stack solutions',
        'Plain HTML, CSS & JavaScript',
        'Style libraries: Tailwind CSS and Material UI',
      ],
    },
    backend: {
      title: 'backend',
      content: [
        'Node.js with Express',
        'RESTful API',
        'Authentication and Authorization',
      ],
    },
    database: {
      title: 'database',
      content: ['MongoDB', 'Mongoose', 'Prisma'],
    },
    tools: {
      title: 'tools',
      content: ['Visual Studio Code', 'Github', 'Postman', 'Lighthouse'],
    },
  },
  selectedWorkTitle: 'selected work',
  selectedwork: [
    {
      id: 'zent',
      title: 'Zent Freelance',
      subtitle: 'Software designed for professional translators',
      image: '/images/zent-dashboard.jpg',
      stack: ['React', 'Express', 'Mongoose'],
      highlights: 'highlights',
      features: [
        'order management',
        'client management',
        'invoicing',
        'email alerts',
        'accounting',
      ],
      details: [
        {
          title: 'expectations',
          image: '/images/zent-orders-list.jpg',
          content: [
            'A program was needed to organize orders and automate client management.',
            ,
            'It should have a database to store all user data.',
            'Should be able to generate PDF work statements, issue and manage invoices.',
            'Possibly, include email alerts.',
          ],
        },
        {
          title: 'logic',
          image: '/images/zent-user-profile.jpg',
          content: [
            "I've set up a MERN app with React on the front end and an Express API on the back end. ",
            'Implemented Material UI as my component styling library.',
            'Set up a MongoDB database using Mongoose.',
            'Further, a mail server service was chosen for setting up a custom mailing logic.',
          ],
        },
        {
          title: 'output',
          image: '/images/zent-invoice-page.jpg',
          content: [
            'Full client and order management.',
            'Accounting records generated based on the operational flow.',
            'Work statements generated based on orders with status “completed”.',
            'Invoicing based on work statement.',
            'Automated flow when issuing invoices and able to send them to client email as an attachment.',
            'Payment reminders via email.',
            'Full invoice management.',
          ],
        },
      ],
    },
  ],
  aboutme: {
    title: 'about me',
    image: '/images/aboutme-image.jpg',
    content: [
      'I am a self-taught programmer with a background in translation, currently based in Bucharest, Romania.',
      'My journey began when I recognized the potential to enhance my workflow through innovative tools. This drove me to embark on a learning path, starting with HTML and advanced CSS to optimize my personal website.',
      'The pursuit of efficiency led me to master JavaScript in under a year, enabling me to develop compact software solutions for recreational purposes.',
      'Then, I jumped into the realm of JavaScript frameworks, most notably React, which fueled my fascination with software design.',
      'As time progressed, my passion crystallized, and I found my true vocation lies in the conception and realization of impactful software solutions.',
      "Over the years, I have honed my skills by engaging with increasingly modern technologies, affirming my commitment to crafting programs that significantly enhance individuals' lives and professional endeavors.",
    ],
  },
  contactme: {
    title: 'contact me',
    labels: {
      email: 'your email...',
      name: 'your name...',
      message: 'your message...',
    },
    content: [
      'For a more comprehensive answer to your enquiries, please be specific about the type of project you are interested in: blog*website*software application',
      'Please note that all my solutions are custom and I use 100% code. I do not work with no-code, low-code, themes, content management systems or e-commerce platforms.',
      'Firm offers can only be made after further discussion.',
      'I am available and will reply asap Monday to Friday, Bucharest time.',
    ],
    formMessages: {
      errorEmail: 'The email address is not valid',
      errorName: 'The name should be at least two characters long',
      loading: 'Sending...',
      successSent: 'Thank you for contacting me. Will get back to you asap!',
      errorSent:
        'There was an error while sending your message. Please try again or contact me via e-mail.',
    },
  },
  footer: {
    linkedinLogo: '/logos/linkedin.svg',
    mailLogo: '/logos/mail.svg',
    phoneLogo: '/logos/phone.svg',
    githubLogo: '/logos/github.svg',
    myLinkedin: 'My Linkedin Profile',
  },
};
