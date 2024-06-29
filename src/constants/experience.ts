import { getYears } from "@/utils/getYears";

import { Experience } from "@/components/experienceCard/types";

export const experiences: Experience[] = [
  {
    role: "Senior Product Engineer",
    company: "Sprinklr",
    years: `${getYears("01 June 2024")}`,
    majorProjects: [
      {
        id: "SURVEYS",
        project: "Surveys",
        description: [
          "I was a part of a very big project which taught me lot of things. Surveys app is basically a app which allows you to create surveys and distribute them.",
          "I added major features from scratch like MCQ with images question and many other questions, Translation builder, Conversational Survey, Survey using AI, Distributions, Respondent view of the survey, Controlling Logics and many more.",
        ],
      },
    ],
    isCurrent: true,
  },
  {
    role: "Product Engineer",
    company: "Sprinklr",
    years: "3",
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
        id: "SURVEYS",
        project: "Surveys",
        description: [
          "I was a part of a very big project which taught me lot of things. Surveys app is basically a app which allows you to create surveys and distribute them.",
          "I added major features from scratch like MCQ with images question and many other questions, Translation builder, Conversational Survey, Survey using AI, Respondent view of the survey, Controlling Logics and many more.",
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
    isCurrent: false,
  },
  {
    role: "Product Engineering Intern",
    company: "Sprinklr",
    years: "0.5",
    majorProjects: [{ id: "TODO_APP", project: "ToDo App" }],
  },
];
