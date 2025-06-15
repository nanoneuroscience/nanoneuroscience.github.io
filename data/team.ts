export type TeamMember = {
  name: string;
  title: string;
  photo: string;
  bio: string;
  section: 'Scientific Team' | 'Management Team' | 'Business Advisory Board';
};

export const team: TeamMember[] = [
  // Scientific Team
  {
    name: 'Dr. Zois Syrgiannis',
    title: 'Organic and Materials Chemistry Expert',
    photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    section: 'Scientific Team',
    bio: `With extensive experience in organic synthesis and advanced materials science, Dr. Syrgiannis is the architect behind our proprietary nanostructures. His expertise fuels the design of stable, high-performance nanocarriers — the foundation of our groundbreaking therapies. From molecular assembly to drug delivery optimization, he’s redefining what’s possible in ocular nanomedicine.

Research Associate & Senior Research Associate (2018 - 2024) – Northwestern University, Department of Chemistry & Center for Regenerative Nanomedicine, Evanston, IL, USA
Postdoctoral Fellow, Research Associate & Assistant Professor (2011 - 2018) - University of Trieste, Trieste, Italy
Ph.D. in Nanomaterials & Chemistry (2010) - Friedrich Alexander University of Erlangen, Nuremberg, Erlangen, Germany
M.Sc. in Materials & Polymers (2006) - University of Ioannina, Ioannina, Greece
B.Sc. in Chemistry (2003) - University of Ioannina, Ioannina, Greece`,
  },
  {
    name: 'Dr. Matias Alvarez-Saavedra',
    title: 'Expert in Neurobiology, Molecular Biology, and Human Genetics',
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
    section: 'Scientific Team',
    bio: `Dr. Alvarez-Saavedra brings advanced expertise in neurodegenerative diseases and cellular biology. His work deciphers the intricate pathways of cell survival and bioenergetics — key to our approach in protecting and restoring vision. With years of cutting-edge research in human molecular genetics and developmental neurobiology, he ensures our therapies target glaucoma at its biological roots.

Senior Research Associate (2021-2024) – Northwestern University, Center for Regenerative Nanomedicine, Chicago, IL, USA
Assistant Professor (2017-2019) – Pontificia Universidad Cátolica de Chile, Department of Cellular & Molecular Biology, Santiago, Chile
Pew Latin American Postdoctoral Fellow (2015-2017) – Department of Biochemistry & Molecular Pharmacology, New York University, NY, USA
Pew Latin American Postdoctoral Fellow (2014-2015) – Diabetes Center, University of California, San Francisco, CA, USA
Ph.D. in Human Molecular Genetics (2013) – University of Ottawa, Cellular & Molecular Medicine Department, Faculty of Medicine, Ottawa, Ontario, Canada
M.Sc. in RNA Biochemistry (2010) – University of Ottawa, Biochemistry, Microbiology & Immunology Department, Faculty of Medicine, Ottawa, Ontario, Canada
Research Assistant (2006 - 2008) - Centro de Estudios Científicos (CECS), Valdivia, Chile
B.Sc. in Molecular Biology (2005) – Montclair State University, Montclair, NJ, USA`,
  },
  // Management Team
  {
    name: 'Dr. Athanasios Papamichos',
    title: 'Co-Founder & Chairman, Healthcare Management Strategist',
    photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    section: 'Management Team',
    bio: `With over 30 years of experience in healthcare management and operations, Dr. Athanasios Papamichos has a proven track record in leading large-scale healthcare initiatives. His expertise ensures that NanoNeurosciences effectively bridges the gap between biotech breakthroughs and real-world healthcare solutions. As a senior healthcare executive, his expertise spans complex healthcare management, large-scale performance transformations, and operational excellence. He has held leadership positions in both public and private healthcare companies, such as CEO of Accurate Health Auditing & Consulting from 2014 to 2025, General Manager of Strategy & Development at Athens Medical Group from 2007 to 2009, President & CEO of Health Units S.A. from 2005 to 2007, and Founding Member & General Director of Medecins Sans Frontieres (Doctors without Borders) from 1990 to 2004.

Academic Background
• Ph.D. in Health Services Organization (2009) – University of Peloponnese, Greece
• M.Sc. in Health Policy Planning & Financing (1999) – London School of Economics, UK
• B.Sc. Occupational Therapy (1990) – Technological Education Institute of Athens, Greece`,
  },
  {
    name: 'George P. Diantzikis',
    title: 'Co-Founder & CFO, Sales & Marketing Expert',
    photo: 'https://randomuser.me/api/portraits/men/14.jpg',
    section: 'Management Team',
    bio: `George P. Diantzikis ensures our life-changing technology reaches the patients and healthcare providers who need it most. With extensive experience in sales, marketing, and commercial strategy, he drives awareness, adoption, and accessibility of NanoNeurosciences’ innovations, ensuring they become global solutions. Mr. Diantzikis was the Founding Partner & Board Member of Alean Management Group Inc. from 2023 to present, and Chief Operating Officer of POS Enterprises from 2016 to 2022. Mr. Diantzikis also led sales and marketing at ANTENNA Group from 2008 to 2015 and served as sales and marketing manager at Retail@Link SA (now Entersoft SA) from 2003 to 2008.

Academic Background
• M.Sc. in Management (2002) – University of Surrey, Guilford, UK
• B.Sc. in Business Administration (1999) – University of La Verne, Athens, Greece`,
  },
  // Business Advisory Board
  {
    name: 'Gerhard Bauer, M.D.',
    title: 'Cell & Gene Therapy Industry Pioneer & GMP Expert',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    section: 'Business Advisory Board',
    bio: `Innovator in the pharmaceutical industry since the 1990s, when he was inspired by personal experiences to pursue a different type of medicine. He began his time at Johns Hopkins University where he was part of the team that developed the first stem cell gene therapy for HIV. Later in the 90s, he went on to pioneer and commercialize a stem cell gene therapy for HIV and ADA SCID “bubble boy disease” at the University of Southern California Children's Hospital in Los Angeles, California, USA. In 2002, Bauer moved to set up a new GMP laboratory at Washington University in St. Louis. In 2006, he returned to California as Professor at UC Davis at the Department of Cell Therapy & Hematology/Oncology and, in parallel, opened the largest academic GMP facility in Northern California. Today he is a global expert advisor on cell and gene therapies. Upon retiring from his professorship, he saw a great opportunity to continue working to decentralize and democratize medical innovation. He is committed and leading towards the inflection point of making cell & gene therapies and other advanced medicines a reality for every community.`,
  },
  {
    name: 'Gregory Roumeliotis, M.Sc.',
    title: 'Precision Medicine GTM Strategist, Health Technology Assessment, Omics Integration, Cell & Gene Therapies Manufacturing',
    photo: 'https://randomuser.me/api/portraits/men/16.jpg',
    section: 'Business Advisory Board',
    bio: `With over 25 years’ experience in health care management and consultancy, Greg has undertaken a wide range of assignments in the public and private health care sectors in the US, Europe, MENA, Baltics, LATAM & APAC. He has experience in strategic planning, functional, marketing and communication planning. Has a substantial track record in managing stakeholders, payers, doctors, designing and executing healthcare marketing plans and selling healthcare services to private and public HMOs. He has expertise in the establishment and development of primary care centers and the design and application of architected sales solutions for hospital networks.

As of early 2000s, Greg has been a pioneer in the establishment and development of biobanking and cell therapy preclinical services starting from the EU - MENA region and continuously contributes in the formulation of a sustainable and ethical policy and regulatory framework for this innovative industry.

Based on this network and platform, as of 2013 accomplished a step further towards advancing precision medicine, disease prevention and affordable consumer health care. He contributed and managed the creation and development of Genoma; a Swiss company in proteomics and genomics for predictive medicine with the first genetic platform for clinical diagnostics in Europe utilizing the latest NGS technologies.

Over the past 10 years further paved his career into precision medicine initiatives, digital and connected health. Relocated to the US and served as the Director of Global Strategic Partnerships at Veritas Genetics, The Genome Company. Next step was moving into the lab and cloud agnostic world; today he serves as VP of Global Business Development at Orgenesis Inc., helping to bring advanced personalized cell and gene therapies (CGTs) therapies to market effectively, with Orgenesis's unique point-of-care platform.`,
  },
  {
    name: 'Dan Heuertz, B.A.',
    title: 'Expert EOS Implementer, Founder & CEO of Hirize, Inc.',
    photo: 'https://randomuser.me/api/portraits/men/17.jpg',
    section: 'Business Advisory Board',
    bio: `Expert EOS (Entrepreneurial Operating System) Implementer. Founder & CEO of Hirize, Inc. Extensive experience in developing early-stage entrepreneurial companies. Former Global Chair of Emerging Programs for EO, Entrepreneurs Organization.

Founder of Hirize Inc. formally The Preferred Group; a Business Development, Management and Consulting Firm located in Palatine, Illinois a suburb of Chicago. Diverse experience in: Hospitality Management, Real Estate Development, Franchising, Group Purchasing, Merchant Services and Professional Services. Expert EOS (Entrepreneurial Operating System) Implementer. Over 50 clients served in a broad range of industries: Technology, Real Estate, Construction, BPO, Engineering, Marketing Services, and Logistics. Professional Global Facilitator of Executive Retreats and Board of Directors Meetings US, Canada, EU, India, China, Panama, Greece, Mexico, France, Qatar and the Philippines. EO, Entrepreneurs Organization member since 2000; President of the Chicago Chapter. Chaired the Global Leadership Conference held in Chicago with over 700+ global entrepreneurs in attendance. Iowa State University Bachelor’s Degree in Speech Communications with an emphasis in Public Relations. Certificate in Emotional Intelligence from University of Illinois, Chicago. Entrepreneurial Master’s Certificate from MIT.`,
  },
];
