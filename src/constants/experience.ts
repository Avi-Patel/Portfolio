import { getDurationString } from "@/utils/getYears";

import { Experience } from "@/components/experienceCard/types";

export const experiences: Experience[] = [
  {
    role: "Lead Product Engineer",
    company: "Sprinklr",
    duration: getDurationString("June 2025"),
    from: "June 2024",
    to: "Present",
    majorProjects: [
      {
        id: "SURVEYS",
        project: "CFM-App",
        description: [
          "Own and lead end-to-end development of a major CFM product feature — from system design to delivery — while actively collaborating with PMs and designers to ensure a seamless user experience, maintainable architecture, and alignment with roadmap goals.",
        ],
      },
    ],
    others: [
      "Led peer code reviews for 3-4 peer developers, improving code quality and reducing bugs by 30%.",
      "Mentored and managed a summer intern for an AI Scrum Agent project; oversaw design, implementation and delivery aligned with stakeholder expectations.",
    ],
    skills: ["ReactJs", "NextJs", "Typescript", "Webpack", "GraphQL", "Jest"],
  },
  {
    role: "Senior Product Engineer",
    company: "Sprinklr",
    duration: getDurationString("01 June 2024"),
    from: "June 2024",
    to: "June 2025",
    majorProjects: [
      {
        id: "SURVEYS",
        project: "CFM-App",
        description: [
          "Developed Customer Feedback Management App from scratch",
          "Collaboration & Product Reach - Partnered with Mobile and Backend teams to enable mulƟ-platform survey distribution (In-App, Web, Conversational.",
        ],
      },
      {
        id: "CHANNEL_TEMPLATES",
        project: "Channel Templates Migration",
        description: [
          "Migrated channel templates to monorepo, enhancing maintainability and team velocity.",
        ],
      },
    ],
    others: [
      "Acquired foundational knowledge in Jenkins, Docker and Kubernetes.",
      "Reviewed pull requests and mentored new joiners.",
    ],
    skills: ["ReactJs", "NextJs", "Typescript", "Webpack", "GraphQL", "Jest"],
  },
  {
    role: "Product Engineer",
    company: "Sprinklr",
    duration: "3 years",
    from: "June 2021",
    to: "June 2024",
    majorProjects: [
      {
        id: "CXM",
        project: "CXM-lite app",
        description: [
          "Got onboarded in an ongoing project. In the beginning I solved many bugs. Got exposure to code base and code patterns.",
          "I implemented some new features which gave me experience of writing things from scratch and debugging.",
        ],
      },
      {
        id: "ASSET_MANAGER",
        project: "Assets Manager",
        description: [
          "I was part of the few people who implemented Asset Manager. Asset Manager is just like google drive and a module of CXM-lite app. Added all the functionality related to the folder and many more in this module.",
        ],
      },
      {
        id: "SPACEWEB_CHARTS",
        project: "Spaceweb Charts",
        description: [
          "Contributed to the sprinklr's charting library by implementing/revamping many features like Legends, Data Labels, Notes, collision detection, Annotations, slanted axes tick and Keyboard Accessibility for screen readers.",
          "Implemented new charts like Stacked Area Chart, Trending/Fading Word Cloud, HeatMap Chart, Click HeatMap Chart, Stacked column support to Multi Axes chart and Smart Cluster Chart to the library. Solved challenging problems while implementing these charts.",
          "I take pride in contributing to the project which now used in sprinklr's platform everywhere for data visualization.",
        ],
      },
      {
        id: "REPORTING",
        project: "Reporting",
        description: [
          "Added many new requirement and features to the reporting widgets",
        ],
      },
      {
        id: "FILTERS",
        project: "Filters",
        description: [
          "Contributed to the filters modules which are now used in Sprinklr's every module wherever there is need of filter bar",
        ],
      },
      {
        id: "MEDIA_INSIGHTS",
        project: "Media Insights",
        description: [],
      },
    ],
    skills: ["ReactJs", "NextJs", "Typescript", "Webpack", "GraphQL", "Jest"],
  },
  {
    role: "Product Engineering Intern",
    company: "Sprinklr",
    duration: "6 months",
    from: "Jan 2021",
    to: "June 2021",
    majorProjects: [{ id: "TODO_APP", project: "ToDo App" }],
  },
  {
    role: "Summer Intern",
    company: "DAIICT",
    duration: "2 months",
    from: "June 2020",
    to: "Aug 2020",
    majorProjects: [
      {
        id: "TODO_APP",
        project: "Intelligent Tour Assistant,",
        description: [
          "We made a Intelligent Tour Assistant, a Travel planner using Technologies like python, Django, JS, MongoDB, HTML, CSS, etc.",
        ],
      },
    ],
  },
];
