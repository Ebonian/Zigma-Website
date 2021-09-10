import Team from "../../images/team.svg";
import Support from "../../images/support.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Our Team",
  heading: "Meet The Zigma Team",
  description:
    "Let's get to know people who are running this app in the background for you. Believe or not, they're just students! Are you ready to meet them yet?",
  buttonLabel: "Explore",
  imgStart: false,
  img: Team,
  alt: "Team",
  dark: true,
  primary: true,
  darkText: false,
  route: "/about",
};

export const homeObjTwo = {
  id: "support",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Support",
  heading: "We want to hear your thoughts.",
  description:
    "Every voice counts.  Whether you have a question, a feedback, or even a suggestion, we want to hear them all and we would be really appreciated you.  This community would not get anywhere without help of everyone.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Support,
  alt: "Support",
  dark: false,
  primary: false,
  darkText: true,
  route: "/support",
};
