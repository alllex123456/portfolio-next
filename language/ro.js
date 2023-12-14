export default {
  label: 'ro',
  titles: {
    capabilities: 'capabilități',
    work: 'proiect reprezentativ',
    about: 'despre mine',
    contact: 'contactează-mă',
  },
  navigation: {
    links: [
      { label: 'aptitudini', href: '#capabilities' },
      { label: 'proiecte', href: '#work' },
      { label: 'despre', href: '#about' },
      { label: 'contact', href: '#contact' },
    ],
  },
  buttons: {
    details: 'detalii',
    back: 'înapoi',
    send: 'trimite',
    liveDemo: 'Demo',
  },
  hero: {
    title: 'Dezvoltator web pasionat, dedicat să creeze soluții inovatoare',
    cta: 'Aptitudinile mele',
  },
  design: {
    title: 'design',
    style: {
      title: 'stil',
      content: [
        'Împerechere fonturi',
        'Teoria culorilor',
        'Compoziție, formă și expresie',
        'Concepte de contrast și simetrie',
      ],
    },
    branding: {
      title: 'branding',
      content: [
        'Logo design',
        'Coerență vizuală',
        'Crearea paletei cromatice',
        'Coerența și poziționarea brandului',
      ],
    },
    ux: {
      title: 'ux',
      content: [
        'Dezvoltare de personaj (conceptul <persona>)',
        'User journey',
        'Arhitectura informației',
        'Prototipuri și testare practică',
      ],
    },
    tools: {
      title: 'instrumente',
      content: [
        'Figma: ghid de stil, wireframing, prototipuri',
        'Adobe Illustrator: grafică vectorială',
        'Adobe Photoshop: grafică raster',
      ],
    },
  },
  develop: {
    title: 'dezvoltare',
    frontend: {
      title: 'frontend',
      content: [
        'React cu Next.js pentru soluții full-stack',
        'HTML, CSS & JavaScript ',
        'Biblioteci de stil: Tailwind CSS și Material UI',
      ],
    },
    backend: {
      title: 'backend',
      content: [
        'Node.js cu Express',
        'RESTful API',
        'Autentificare și autorizare',
      ],
    },
    database: {
      title: 'bază de date',
      content: ['MongoDB', 'Mongoose', 'Prisma'],
    },
    tools: {
      title: 'instrumente',
      content: ['Visual Studio Code', 'Github', 'Postman', 'Lighthouse'],
    },
  },
  selectedWorkTitle: 'proiect reprezentativ',
  selectedwork: [
    {
      id: 'zent',
      title: 'Zent Freelance',
      subtitle: 'Software conceput pentru traducătorii profesioniști',
      image: '/images/zent-dashboard.jpg',
      stack: ['React', 'Express', 'Mongoose'],
      highlights: 'Caracteristici centrale',
      features: [
        'management comenzi',
        'management clienți',
        'facturare',
        'alerte prin e-mail',
        'contabilitate',
      ],
      details: [
        {
          title: 'așteptări',
          image: '/images/zent-orders-list.jpg',
          content: [
            'Este necesar un program care să organizeze comenzile și să automatizeze gestionarea clienților.',
            'Acesta ar trebui să aibă o bază de date pentru a stoca toate datele utilizatorilor.',
            'Ar trebui să poată genera situații de lucrări în format PDF, să emită și să gestioneze facturi.',
            'Eventual, să includă alerte e-mail.',
          ],
        },
        {
          title: 'logică',
          image: '/images/zent-user-profile.jpg',
          content: [
            'Am configurat o aplicație MERN cu React pe frontend și un API Express pe backend. ',
            'Am implementat Material UI ca bibliotecă de stil pentru componente React.',
            'Am configurat o bază de date MongoDB folosind Mongoose.',
            'În continuare, am ales un serviciu de mail server pentru a configura o logică de corespondență personalizată.',
          ],
        },
        {
          title: 'rezultat',
          image: '/images/zent-invoice-page.jpg',
          content: [
            'Management complet pentru clienți și comenzi.',
            'Înregistrări contabile generate pe baza fluxului operațional.',
            'Situații de lucrări generate pe baza comenzilor cu stare „finalizat”.',
            'Facturare pe baza situațiilor de lucrări.',
            'Flux automatizat la emiterea facturilor și posibilitatea de a le trimite pe e-mailul clientului ca atașament.',
            'Alerte de plată prin e-mail.',
            'Gestionarea completă a facturilor.',
          ],
        },
      ],
    },
  ],
  aboutme: {
    title: 'despre mine',
    image: '/images/aboutme-image.jpg',
    content: [
      'Sunt un programator autodidact cu istoric în domeniul traducerilor, stabilit în prezent în București, România.',
      'Călătoria mea a început atunci când am recunoscut potențialul de a-mi îmbunătăți modul de lucru prin intermediul unor instrumente inovatoare. Acest lucru m-a determinat să învăț domeniul dezvoltării web, începând cu HTML și CSS avansat pentru a-mi optimiza site-ul personal.',
      'În căutarea eficienței, am reușit să stăpânesc JavaScript în mai puțin de un an, permițându-mi să dezvolt soluții software compacte în scopuri recreative.',
      'Apoi, am făcut saltul în domeniul framework-urilor JavaScript, în special React, care mi-a dus fascinația pentru proiectarea de software la un nou nivel.',
      'În timp, pasiunea mea s-a cristalizat și am descoperit că adevărata mea vocație constă în conceperea și realizarea de soluții software de impact.',
      'De-a lungul anilor, mi-am perfecționat abilitățile lucrând cu tehnologii tot mai moderne, afirmându-mi angajamentul de a concepe programe care să îmbunătățească semnificativ viața și eforturile profesionale ale oamenilor.',
    ],
  },
  contactme: {
    title: 'contact',
    labels: {
      email: 'e-mailul tău...',
      name: 'numele tău...',
      message: 'mesajul tău...',
    },
    content: [
      'Pentru un răspuns cuprinzător la solicitările tale, te rog să precizezi tipul de proiect de care ești interesat: blog*website*aplicație software',
      'Este important să menționez că toate soluțiile mele sunt personalizate și folosesc 100% cod. Nu lucrez cu no-code, low-code, sisteme de content management, teme sau platforme de e-commerce.',
      'Oferte ferme pot fi făcute doar după discuții suplimentare.',
      'Sunt disponibil și voi răspunde cât mai repede, de luni până vineri, ora Bucureștiului.',
    ],
    formMessages: {
      errorEmail: 'Adresa de e-mail introdusă nu este validă',
      errorName: 'Numele trebuie să conțină cel puțin două caractere',
      loading: 'Se trimite...',
      successSent: 'Îți mulțumesc pentru mesaj. Îți voi răspunde curând!',
      errorSent:
        'A survenit o problemă la trimiterea mesajului. Te rog să încerci din nou sau să mă contactezi pe adresa de e-mail.',
    },
  },
  footer: {
    linkedinLogo: '/logos/linkedin.svg',
    mailLogo: '/logos/mail.svg',
    phoneLogo: '/logos/phone.svg',
    githubLogo: '/logos/github.svg',
    myLinkedin: 'Profilul meu Linkedin',
  },
};
