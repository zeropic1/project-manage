import {
    UploadLocalRepo,
    CoordinateWorkFlow,
    GitList,
    GithubList
} from './git'
import {
    OSList,
    MacList,
    Homebrew,
    Zsh
} from './os'
import Main from './Main'

export default [{
        path: "/",
        name: "Main",
        Component: Main
    },
    {
        path: "/git",
        name: "Git",
        Component: GitList
    },
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
    },
    {
        path: "/os",
        name: "OS",
        Component: OSList
    },
    {
        path: "/os/mac",
        name: "Mac",
        Component: MacList
    },
    {
        path: "/os/mac/homebrew",
        name: "Homebrew",
        Component: Homebrew
    },
    {
        path: "/os/mac/zsh",
        name: "Zsh",
        Component: Zsh
    }
];