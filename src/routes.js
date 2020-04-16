import {
    UploadLocalRepo,
    CoordinateWorkFlow,
    GithubList
} from './git'
import {
    MacList,
    Homebrew,
    Zsh
} from './os'
import {
    PublishList,
    PublishReact
} from './npm'
import Main from './Main'

export const sideRoutes = [{
  name: "Git",
  menus: [
    {
      path: "/git/github",
      name: "Github",
    }
  ]
},{
  name: "OS",
  menus: [
    {
      path: "/os/mac",
      name: "Mac",
    },
  ]
},{
  name: "Npm",
  menus: [
    {
      path: "/npm/publish",
      name: "Publish",
    },
  ]
}
]

export default [{
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/git/github",
        name: "Github",
        component: GithubList
    },
    {
        path: "/git/github/uploadLocalRepo",
        name: "UploadLocalRepo",
        component: UploadLocalRepo
    },
    {
        path: "/git/github/coordinateWorkFlow",
        name: "CoordinateWorkFlow",
        component: CoordinateWorkFlow
    },
    {
        path: "/os/mac",
        name: "Mac",
        component: MacList
    },
    {
        path: "/os/mac/homebrew",
        name: "Homebrew",
        component: Homebrew
    },
    {
        path: "/os/mac/zsh",
        name: "Zsh",
        component: Zsh
    },
    {
        path: "/npm/publish",
        name: "Publish",
        component: PublishList
    },
    {
        path: "/npm/publish/react",
        name: "PublishReact",
        component: PublishReact
    }
];