import {
  UploadLocalRepo,
  CoordinateWorkFlow,
  GithubList,
  CommandList,
  UpdateCommits,
  CombineCommits,
} from './git'
import { MacList, Homebrew, Zsh } from './os'
import { PublishList, PublishReact } from './npm'
import { HttpList, OverView } from './network'
import Main from './Main'

export default [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/git/github',
    name: 'Github',
    component: GithubList,
  },
  {
    path: '/git/github/uploadLocalRepo',
    name: 'UploadLocalRepo',
    component: UploadLocalRepo,
  },
  {
    path: '/git/github/coordinateWorkFlow',
    name: 'CoordinateWorkFlow',
    component: CoordinateWorkFlow,
  },
  {
    path: '/git/command',
    name: 'Git Common Command',
    component: CommandList,
  },
  {
    path: '/git/command/updateCommits',
    name: 'UpdateCommits',
    component: UpdateCommits,
  },
  {
    path: '/git/command/combineCommits',
    name: 'CombineCommits',
    component: CombineCommits,
  },
  {
    path: '/os/mac',
    name: 'Mac',
    component: MacList,
  },
  {
    path: '/os/mac/homebrew',
    name: 'Homebrew',
    component: Homebrew,
  },
  {
    path: '/os/mac/zsh',
    name: 'Zsh',
    component: Zsh,
  },
  {
    path: '/npm/publish',
    name: 'Publish',
    component: PublishList,
  },
  {
    path: '/npm/publish/react',
    name: 'PublishReact',
    component: PublishReact,
  },
  {
    path: '/network/http',
    name: 'HTTP',
    component: HttpList,
  },
  {
    path: '/network/http/overview',
    name: 'OverView',
    component: OverView,
  },
]
