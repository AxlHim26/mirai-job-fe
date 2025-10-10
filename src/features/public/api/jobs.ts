import { useQuery } from "@tanstack/react-query";
import { JobType } from "@/types/job";

export type PublicJobListingStatus = "Live" | "Draft" | "Closed" | "Paused";
export type PublicJobLevel =
  | "Entry Level"
  | "Mid Level"
  | "Senior Level"
  | "Director"
  | "VP or Above";
export type PublicJobCategory =
  | "Design"
  | "Sales"
  | "Marketing"
  | "Business"
  | "Human Resource"
  | "Finance"
  | "Engineering"
  | "Technology";

export interface PublicJobListing {
  id: string;
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  location: string;
  salaryRange: string;
  jobType: JobType;
  datePosted: string;
  applicants: number;
  capacity: number;
  tags: string[];
  description: string;
  // Additional fields for job detail page
  responsibilities: string[];
  whoYouAre: string[];
  niceToHave: string[];
  applyBefore: string;
  categories: string[];
  requiredSkills: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  companyDescription: string;
  companyGalleryImages: string[];
}

export interface PublicJobFilters {
  search?: string;
  jobType?: JobType;
  category?: PublicJobCategory;
  jobLevel?: PublicJobLevel;
  salaryRange?: string;
  dateRange?: {
    start?: string;
    end?: string;
  };
}

export interface PublicJobSort {
  field: "jobTitle" | "companyName" | "datePosted" | "applicants";
  direction: "asc" | "desc";
}

export interface PublicJobsResponse {
  jobs: PublicJobListing[];
  total: number;
}

// Helper function to add default fields for jobs
const addDefaultFields = (job: Partial<PublicJobListing>): PublicJobListing =>
  ({
    responsibilities: [
      "Work on assigned projects",
      "Collaborate with team members",
      "Meet project deadlines",
    ],
    whoYouAre: [
      "Passionate about your field",
      "Team player",
      "Detail-oriented",
    ],
    niceToHave: [
      "Previous experience",
      "Relevant skills",
      "Industry knowledge",
    ],
    applyBefore: "December 31, 2025",
    categories: job.tags || ["General"],
    requiredSkills: job.tags || ["General Skills"],
    benefits: [
      {
        title: "Health Insurance",
        description: "Comprehensive health coverage",
      },
      { title: "Flexible Schedule", description: "Work-life balance" },
      {
        title: "Professional Development",
        description: "Opportunities for growth",
      },
    ],
    companyDescription: `${job.companyName} is a forward-thinking company focused on innovation and excellence.`,
    companyGalleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center",
    ],
    ...job,
  }) as PublicJobListing;

const mockPublicJobListings: PublicJobListing[] = [
  addDefaultFields({
    id: "1",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Stripe",
    jobTitle: "Social Media Assistant",
    location: "Paris, France",
    salaryRange: "$75,000 - $80,000",
    jobType: "Fulltime",
    datePosted: "2024-07-24",
    applicants: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    description:
      "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
    responsibilities: [
      "Community engagement and moderation across all social media platforms",
      "Focus on social media content development and curation",
      "Marketing and strategy support for social media campaigns",
      "Monitor social media trends and competitor activities",
      "Collaborate with marketing team to align social media strategy with overall brand goals",
    ],
    whoYouAre: [
      "You get energy from people and are passionate about building communities",
      "You have a sense for beautiful spaces and understand what makes content engaging",
      "You are creative and can think outside the box for social media strategies",
      "You have excellent communication skills and can represent the brand authentically",
    ],
    niceToHave: [
      "Fluent in English",
      "Project management skills",
      "Copy editing skills",
      "Experience with social media analytics tools",
      "Graphic design skills",
    ],
    applyBefore: "July 15, 2025",
    categories: ["Marketing", "Design"],
    requiredSkills: [
      "Project Management",
      "Copywriting",
      "Social Media Marketing",
      "English",
      "Copy Editing",
    ],
    benefits: [
      {
        title: "Full Healthcare",
        description:
          "We believe in thriving communities and that starts with our team being happy and healthy.",
      },
      {
        title: "Unlimited Vacation",
        description:
          "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
      },
      {
        title: "Skill Development",
        description:
          "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
      },
      {
        title: "Team Summits",
        description:
          "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
      },
      {
        title: "Remote Working",
        description:
          "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
      },
      {
        title: "Commuter Benefits",
        description:
          "We're grateful for all the time and energy each team member puts into getting to work every day.",
      },
    ],
    companyDescription:
      "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.",
    companyGalleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center",
    ],
  }),
  addDefaultFields({
    id: "2",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "Dropbox",
    jobTitle: "Brand Designer",
    location: "San Francisco, USA",
    salaryRange: "$60,000 - $75,000",
    jobType: "Fulltime",
    datePosted: "2024-07-20",
    applicants: 2,
    capacity: 10,
    tags: ["Marketing", "Design"],
    description:
      "Join our dynamic team as a Brand Designer! You will be responsible for developing and implementing brand guidelines, creating visual assets, and ensuring brand consistency across all touchpoints.",
    responsibilities: [
      "Develop brand guidelines",
      "Create visual assets",
      "Ensure brand consistency",
    ],
    whoYouAre: ["Creative designer", "Brand-focused individual"],
    niceToHave: ["Design experience", "Brand knowledge"],
    applyBefore: "August 15, 2025",
    categories: ["Marketing", "Design"],
    requiredSkills: ["Design", "Branding", "Creativity"],
    benefits: [
      {
        title: "Health Insurance",
        description: "Comprehensive health coverage",
      },
      { title: "Flexible Schedule", description: "Work-life balance" },
    ],
    companyDescription:
      "Dropbox is a modern workspace designed to reduce busywork—so you can focus on the things that matter.",
    companyGalleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
    ],
  }),
  addDefaultFields({
    id: "3",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "Terraform",
    jobTitle: "Interactive Developer",
    location: "Hamburg, Germany",
    salaryRange: "$70,000 - $90,000",
    jobType: "Fulltime",
    datePosted: "2024-07-18",
    applicants: 8,
    capacity: 12,
    tags: ["Marketing", "Design"],
    description:
      "We are seeking a talented Interactive Developer to join our product team. You will be responsible for developing interactive web applications and user interfaces.",
  }),
  addDefaultFields({
    id: "4",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Revolut",
    jobTitle: "Email Marketing",
    location: "Madrid, Spain",
    salaryRange: "$50,000 - $65,000",
    jobType: "Fulltime",
    datePosted: "2024-07-15",
    applicants: 0,
    capacity: 10,
    tags: ["Marketing", "Design"],
    description:
      "Revolut is looking for a skilled Email Marketing specialist to build and maintain our email campaigns. You will be responsible for designing and implementing email marketing strategies.",
  }),
  addDefaultFields({
    id: "5",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Canva",
    jobTitle: "Lead Engineer",
    location: "Ankara, Turkey",
    salaryRange: "$80,000 - $100,000",
    jobType: "Fulltime",
    datePosted: "2024-07-12",
    applicants: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    description:
      "We are hiring a Lead Engineer to manage and optimize our engineering team. You will be responsible for leading technical projects and mentoring junior developers.",
  }),
  addDefaultFields({
    id: "6",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "ClassPass",
    jobTitle: "Product Designer",
    location: "Berlin, Germany",
    salaryRange: "$75,000 - $95,000",
    jobType: "Fulltime",
    datePosted: "2024-07-10",
    applicants: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    description:
      "ClassPass is looking for an experienced Product Designer to lead the design of new features for our fitness platform. You will be responsible for user research and interface design.",
  }),
  addDefaultFields({
    id: "7",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "Pitch",
    jobTitle: "Customer Manager",
    location: "Berlin, Germany",
    salaryRange: "$65,000 - $80,000",
    jobType: "Fulltime",
    datePosted: "2024-07-08",
    applicants: 5,
    capacity: 10,
    tags: ["Marketing", "Design"],
    description:
      "Pitch is seeking a talented Customer Manager to join our customer success team. You will be responsible for managing client relationships and ensuring customer satisfaction.",
  }),
  // Thêm nhiều jobs hơn để có đủ data cho pagination
  addDefaultFields({
    id: "8",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Shopify",
    jobTitle: "Frontend Developer",
    location: "Toronto, Canada",
    salaryRange: "$70,000 - $90,000",
    jobType: "Fulltime",
    datePosted: "2024-07-05",
    applicants: 12,
    capacity: 15,
    tags: ["Technology", "Engineering"],
    description:
      "Shopify is looking for a Frontend Developer to join our team. You will be responsible for building user-facing features and ensuring a great user experience.",
  }),
  addDefaultFields({
    id: "9",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Stripe",
    jobTitle: "Backend Engineer",
    location: "San Francisco, USA",
    salaryRange: "$90,000 - $120,000",
    jobType: "Fulltime",
    datePosted: "2024-07-03",
    applicants: 8,
    capacity: 12,
    tags: ["Technology", "Engineering"],
    description:
      "Stripe is seeking a Backend Engineer to help build and scale our payment infrastructure. You will work on high-impact systems that process billions of dollars.",
  }),
  addDefaultFields({
    id: "10",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "Airbnb",
    jobTitle: "UX Researcher",
    location: "San Francisco, USA",
    salaryRange: "$85,000 - $110,000",
    jobType: "Fulltime",
    datePosted: "2024-07-01",
    applicants: 15,
    capacity: 20,
    tags: ["Design", "Business"],
    description:
      "Airbnb is looking for a UX Researcher to help us understand our users better. You will conduct research to inform product decisions and improve user experience.",
  }),
  addDefaultFields({
    id: "11",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "Netflix",
    jobTitle: "Data Scientist",
    location: "Los Gatos, USA",
    salaryRange: "$100,000 - $130,000",
    jobType: "Fulltime",
    datePosted: "2024-06-28",
    applicants: 20,
    capacity: 25,
    tags: ["Technology", "Finance"],
    description:
      "Netflix is seeking a Data Scientist to help us make data-driven decisions. You will analyze large datasets and build models to improve our recommendation systems.",
  }),
  addDefaultFields({
    id: "12",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Spotify",
    jobTitle: "Product Manager",
    location: "Stockholm, Sweden",
    salaryRange: "$80,000 - $100,000",
    jobType: "Fulltime",
    datePosted: "2024-06-25",
    applicants: 18,
    capacity: 22,
    tags: ["Business", "Technology"],
    description:
      "Spotify is looking for a Product Manager to lead the development of new features. You will work with cross-functional teams to deliver products that users love.",
  }),
  addDefaultFields({
    id: "13",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Uber",
    jobTitle: "Mobile Developer",
    location: "San Francisco, USA",
    salaryRange: "$75,000 - $95,000",
    jobType: "Fulltime",
    datePosted: "2024-06-22",
    applicants: 10,
    capacity: 15,
    tags: ["Technology", "Engineering"],
    description:
      "Uber is seeking a Mobile Developer to help build our mobile applications. You will work on features that millions of users interact with daily.",
  }),
  addDefaultFields({
    id: "14",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "Twitter",
    jobTitle: "Content Strategist",
    location: "San Francisco, USA",
    salaryRange: "$60,000 - $80,000",
    jobType: "Fulltime",
    datePosted: "2024-06-20",
    applicants: 7,
    capacity: 12,
    tags: ["Marketing", "Business"],
    description:
      "Twitter is looking for a Content Strategist to help shape our content strategy. You will work on campaigns that engage our global audience.",
  }),
  addDefaultFields({
    id: "15",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "LinkedIn",
    jobTitle: "Sales Manager",
    location: "Sunnyvale, USA",
    salaryRange: "$70,000 - $90,000",
    jobType: "Fulltime",
    datePosted: "2024-06-18",
    applicants: 5,
    capacity: 10,
    tags: ["Sales", "Business"],
    description:
      "LinkedIn is seeking a Sales Manager to lead our sales team. You will be responsible for driving revenue growth and building relationships with clients.",
  }),
  addDefaultFields({
    id: "16",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Zoom",
    jobTitle: "DevOps Engineer",
    location: "San Jose, USA",
    salaryRange: "$85,000 - $105,000",
    jobType: "Fulltime",
    datePosted: "2024-06-15",
    applicants: 12,
    capacity: 18,
    tags: ["Technology", "Engineering"],
    description:
      "Zoom is looking for a DevOps Engineer to help scale our infrastructure. You will work on systems that support millions of video calls daily.",
  }),
  addDefaultFields({
    id: "17",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Slack",
    jobTitle: "Customer Success Manager",
    location: "San Francisco, USA",
    salaryRange: "$65,000 - $85,000",
    jobType: "Fulltime",
    datePosted: "2024-06-12",
    applicants: 8,
    capacity: 12,
    tags: ["Business", "Sales"],
    description:
      "Slack is seeking a Customer Success Manager to help our customers get the most value from our platform. You will work closely with enterprise clients.",
  }),
  addDefaultFields({
    id: "18",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "Pinterest",
    jobTitle: "Marketing Specialist",
    location: "San Francisco, USA",
    salaryRange: "$55,000 - $70,000",
    jobType: "Fulltime",
    datePosted: "2024-06-10",
    applicants: 15,
    capacity: 20,
    tags: ["Marketing", "Business"],
    description:
      "Pinterest is looking for a Marketing Specialist to help grow our user base. You will work on campaigns that inspire people to discover new ideas.",
  }),
  addDefaultFields({
    id: "19",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "GitHub",
    jobTitle: "Software Engineer",
    location: "San Francisco, USA",
    salaryRange: "$90,000 - $120,000",
    jobType: "Fulltime",
    datePosted: "2024-06-08",
    applicants: 25,
    capacity: 30,
    tags: ["Technology", "Engineering"],
    description:
      "GitHub is seeking a Software Engineer to help build the future of software development. You will work on tools that millions of developers use daily.",
  }),
  addDefaultFields({
    id: "20",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Figma",
    jobTitle: "Designer",
    location: "San Francisco, USA",
    salaryRange: "$70,000 - $90,000",
    jobType: "Fulltime",
    datePosted: "2024-06-05",
    applicants: 22,
    capacity: 28,
    tags: ["Design", "Technology"],
    description:
      "Figma is looking for a Designer to help shape the future of design tools. You will work on features that enable teams to collaborate on design.",
  }),
  addDefaultFields({
    id: "21",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Notion",
    jobTitle: "Product Designer",
    location: "San Francisco, USA",
    salaryRange: "$75,000 - $95,000",
    jobType: "Fulltime",
    datePosted: "2024-06-03",
    applicants: 18,
    capacity: 25,
    tags: ["Design", "Business"],
    description:
      "Notion is seeking a Product Designer to help build the all-in-one workspace. You will design features that help teams work more effectively.",
  }),
  addDefaultFields({
    id: "22",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "Linear",
    jobTitle: "Frontend Engineer",
    location: "San Francisco, USA",
    salaryRange: "$80,000 - $100,000",
    jobType: "Fulltime",
    datePosted: "2024-06-01",
    applicants: 14,
    capacity: 20,
    tags: ["Technology", "Engineering"],
    description:
      "Linear is looking for a Frontend Engineer to help build the future of issue tracking. You will work on a fast, beautiful interface for software teams.",
  }),
  addDefaultFields({
    id: "23",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "Vercel",
    jobTitle: "Developer Advocate",
    location: "San Francisco, USA",
    salaryRange: "$70,000 - $90,000",
    jobType: "Fulltime",
    datePosted: "2024-05-28",
    applicants: 16,
    capacity: 22,
    tags: ["Technology", "Marketing"],
    description:
      "Vercel is seeking a Developer Advocate to help developers build better web experiences. You will create content and engage with the developer community.",
  }),
  addDefaultFields({
    id: "24",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Supabase",
    jobTitle: "Backend Developer",
    location: "Remote",
    salaryRange: "$65,000 - $85,000",
    jobType: "Remote",
    datePosted: "2024-05-25",
    applicants: 20,
    capacity: 25,
    tags: ["Technology", "Engineering"],
    description:
      "Supabase is looking for a Backend Developer to help build the open source Firebase alternative. You will work on scalable backend infrastructure.",
  }),
  addDefaultFields({
    id: "25",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Railway",
    jobTitle: "Platform Engineer",
    location: "Remote",
    salaryRange: "$75,000 - $95,000",
    jobType: "Remote",
    datePosted: "2024-05-22",
    applicants: 12,
    capacity: 18,
    tags: ["Technology", "Engineering"],
    description:
      "Railway is seeking a Platform Engineer to help build the future of cloud infrastructure. You will work on tools that make deployment simple.",
  }),
  addDefaultFields({
    id: "26",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "PlanetScale",
    jobTitle: "Database Engineer",
    location: "Remote",
    salaryRange: "$85,000 - $105,000",
    jobType: "Remote",
    datePosted: "2024-05-20",
    applicants: 8,
    capacity: 12,
    tags: ["Technology", "Engineering"],
    description:
      "PlanetScale is looking for a Database Engineer to help build the future of databases. You will work on scalable database infrastructure.",
  }),
  addDefaultFields({
    id: "27",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "Clerk",
    jobTitle: "Security Engineer",
    location: "Remote",
    salaryRange: "$90,000 - $110,000",
    jobType: "Remote",
    datePosted: "2024-05-18",
    applicants: 6,
    capacity: 10,
    tags: ["Technology", "Engineering"],
    description:
      "Clerk is seeking a Security Engineer to help secure authentication systems. You will work on security features that protect millions of users.",
  }),
  addDefaultFields({
    id: "28",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "Resend",
    jobTitle: "Email Engineer",
    location: "Remote",
    salaryRange: "$70,000 - $90,000",
    jobType: "Remote",
    datePosted: "2024-05-15",
    applicants: 10,
    capacity: 15,
    tags: ["Technology", "Engineering"],
    description:
      "Resend is looking for an Email Engineer to help build the future of email delivery. You will work on systems that send millions of emails.",
  }),
  addDefaultFields({
    id: "29",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Upstash",
    jobTitle: "Redis Engineer",
    location: "Remote",
    salaryRange: "$75,000 - $95,000",
    jobType: "Remote",
    datePosted: "2024-05-12",
    applicants: 7,
    capacity: 12,
    tags: ["Technology", "Engineering"],
    description:
      "Upstash is seeking a Redis Engineer to help build serverless Redis. You will work on infrastructure that scales automatically.",
  }),
  addDefaultFields({
    id: "30",
    companyLogo:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center",
    companyName: "Temporal",
    jobTitle: "Workflow Engineer",
    location: "Remote",
    salaryRange: "$80,000 - $100,000",
    jobType: "Remote",
    datePosted: "2024-05-10",
    applicants: 9,
    capacity: 14,
    tags: ["Technology", "Engineering"],
    description:
      "Temporal is looking for a Workflow Engineer to help build reliable workflow systems. You will work on infrastructure that orchestrates complex processes.",
  }),
  addDefaultFields({
    id: "31",
    companyLogo:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
    companyName: "Fauna",
    jobTitle: "Database Developer",
    location: "Remote",
    salaryRange: "$70,000 - $90,000",
    jobType: "Remote",
    datePosted: "2024-05-08",
    applicants: 11,
    capacity: 16,
    tags: ["Technology", "Engineering"],
    description:
      "Fauna is seeking a Database Developer to help build the future of databases. You will work on distributed database systems.",
  }),
  addDefaultFields({
    id: "32",
    companyLogo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
    companyName: "CockroachDB",
    jobTitle: "Distributed Systems Engineer",
    location: "Remote",
    salaryRange: "$90,000 - $120,000",
    jobType: "Remote",
    datePosted: "2024-05-05",
    applicants: 5,
    capacity: 8,
    tags: ["Technology", "Engineering"],
    description:
      "CockroachDB is looking for a Distributed Systems Engineer to help build scalable database systems. You will work on complex distributed algorithms.",
  }),
  addDefaultFields({
    id: "33",
    companyLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    companyName: "Neon",
    jobTitle: "PostgreSQL Engineer",
    location: "Remote",
    salaryRange: "$75,000 - $95,000",
    jobType: "Remote",
    datePosted: "2024-05-03",
    applicants: 13,
    capacity: 18,
    tags: ["Technology", "Engineering"],
    description:
      "Neon is seeking a PostgreSQL Engineer to help build serverless PostgreSQL. You will work on database infrastructure that scales automatically.",
  }),
];

export const fetchPublicJobs = async (
  page: number = 1,
  limit: number = 10,
  filters?: PublicJobFilters,
  sort?: PublicJobSort
): Promise<PublicJobsResponse> => {
  const base = [...mockPublicJobListings];

  // Apply filters
  const filtered = base.filter((job) => {
    if (filters?.jobType && job.jobType !== filters.jobType) return false;

    // Category filter - check if any tag matches the category
    if (filters?.category) {
      const categoryMatch = job.tags.some(
        (tag) => tag.toLowerCase() === filters.category!.toLowerCase()
      );
      if (!categoryMatch) return false;
    }

    // Job level filter - more flexible matching
    if (filters?.jobLevel) {
      const jobTitle = job.jobTitle.toLowerCase();
      const jobLevel = filters.jobLevel.toLowerCase();

      if (jobLevel === "director") {
        // Match Director, Lead, Manager, Senior positions
        if (
          !jobTitle.includes("director") &&
          !jobTitle.includes("lead") &&
          !jobTitle.includes("manager") &&
          !jobTitle.includes("senior")
        )
          return false;
      } else if (jobLevel === "entry level") {
        // Match entry level positions
        if (
          jobTitle.includes("senior") ||
          jobTitle.includes("lead") ||
          jobTitle.includes("director") ||
          jobTitle.includes("manager")
        )
          return false;
      } else if (jobLevel === "senior level") {
        // Match senior positions
        if (
          !jobTitle.includes("senior") &&
          !jobTitle.includes("lead") &&
          !jobTitle.includes("director")
        )
          return false;
      }
    }

    // Salary range filter - more flexible matching
    if (filters?.salaryRange) {
      if (filters.salaryRange === "$3000 or above") {
        // Match high salary ranges (above $80k)
        if (
          !job.salaryRange.includes("$80,000") &&
          !job.salaryRange.includes("$90,000") &&
          !job.salaryRange.includes("$100,000") &&
          !job.salaryRange.includes("$110,000") &&
          !job.salaryRange.includes("$120,000") &&
          !job.salaryRange.includes("$130,000")
        )
          return false;
      } else if (filters.salaryRange === "$700-$1000") {
        // Match lower salary ranges
        if (
          !job.salaryRange.includes("$45,000") &&
          !job.salaryRange.includes("$50,000") &&
          !job.salaryRange.includes("$55,000") &&
          !job.salaryRange.includes("$60,000") &&
          !job.salaryRange.includes("$65,000") &&
          !job.salaryRange.includes("$70,000")
        )
          return false;
      }
    }

    return true;
  });

  // Apply search query
  const searched = filters?.search
    ? filtered.filter((a) => {
        const q = filters.search!.toLowerCase();
        return (
          a.companyName.toLowerCase().includes(q) ||
          a.jobTitle.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : filtered;

  // apply date range (inclusive)
  const ranged =
    filters?.dateRange?.start || filters?.dateRange?.end
      ? searched.filter((a) => {
          const ts = new Date(a.datePosted).getTime();
          const start = filters?.dateRange?.start
            ? new Date(filters.dateRange.start).getTime()
            : Number.NEGATIVE_INFINITY;
          const end = filters?.dateRange?.end
            ? new Date(filters.dateRange.end).getTime()
            : Number.POSITIVE_INFINITY;
          return ts >= start && ts <= end;
        })
      : searched;

  // Apply sort
  const sorted = sort
    ? [...ranged].sort((a, b) => {
        let aValue: string | number = "";
        let bValue: string | number = "";

        switch (sort.field) {
          case "jobTitle":
            aValue = a.jobTitle.toLowerCase();
            bValue = b.jobTitle.toLowerCase();
            break;
          case "companyName":
            aValue = a.companyName.toLowerCase();
            bValue = b.companyName.toLowerCase();
            break;
          case "datePosted":
            aValue = new Date(a.datePosted).getTime();
            bValue = new Date(b.datePosted).getTime();
            break;
          case "applicants":
            aValue = a.applicants;
            bValue = b.applicants;
            break;
          default:
            return 0;
        }

        if (aValue < bValue) return sort.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sort.direction === "asc" ? 1 : -1;
        return 0;
      })
    : ranged;

  const total = sorted.length;
  const startIdx = (page - 1) * limit;
  const jobs = sorted.slice(startIdx, startIdx + limit);

  // simulate latency for FE-only API
  await new Promise((r) => setTimeout(r, 200));

  return { jobs, total };
};

export const usePublicJobs = (
  page: number = 1,
  limit: number = 10,
  filters?: PublicJobFilters,
  sort?: PublicJobSort
) => {
  return useQuery<PublicJobsResponse>({
    queryKey: ["public-jobs", page, limit, filters, sort],
    queryFn: () => fetchPublicJobs(page, limit, filters, sort),
  });
};

export const fetchPublicJobById = async (
  id: string
): Promise<PublicJobListing | undefined> => {
  await new Promise((r) => setTimeout(r, 200));
  return mockPublicJobListings.find((job) => job.id === id);
};

export const usePublicJobById = (id: string) => {
  return useQuery<PublicJobListing | undefined>({
    queryKey: ["public-job", id],
    queryFn: () => fetchPublicJobById(id),
    enabled: !!id,
  });
};
