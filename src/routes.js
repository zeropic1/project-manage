import {
  UploadLocalRepo,
  CoordinateWorkFlow,
  GitList,
  GithubList
} from './git'
import Main from './Main'

export default [
  { path: "/", name: "Main", Component: Main },
  { path: "/git", name: "Git", Component: GitList },
  {
    path: "/git/github",
    name: "Github",
    Component: GithubList
  },
  {
    path: "/git/github/uploadLocalRepo",
    name: "UploadLocalRepo",
    Component: UploadLocalRepo
  },
  {
    path: "/git/github/coordinateWorkFlow",
    name: "CoordinateWorkFlow",
    Component: CoordinateWorkFlow
  }
];
