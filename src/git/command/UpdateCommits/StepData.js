export const stepData = {
  steps1: {
    stepList: ['修改本地最近一次提交的消息', '在vim中修改提交消息'],
    contentList: ['git commit --amend', require('./imgs/git-commit-amend.png')]
  },
  steps2: {
    stepList: [
      '修改本地最近一次提交的消息',
      '在vim中修改提交消息',
      '使用push --force命令强制推送旧提交'
    ],
    contentList: [
      'git commit --amend',
      require('./imgs/git-commit-amend.png'),
      'git push --force'
    ]
  },
  steps3: {
    stepList: [
      '查看远程仓库的commits记录',
      {
        title: 'Step2 选择要合并的commits',
        subTitle: '例如我想统一修改第四次提交和第五次提交的消息'
      },
      '将vim中的第四次和五次提交前面的参数pick改为r,表示这个commit 消息会被改变',
      '保存后会出现两次commit message的vim界面,可以在此分别修改第四次和第五次commits的消息',
      '使用push --force命令强制推送旧提交'
    ],
    contentList: [
      require('./imgs/git-commit-history.png'),
      'git rebase -i HEAD~2',
      require('./imgs/rebase-update-commits.png'),
      require('./imgs/rebase-vim-update-commit-message.png'),
      'git push --force'
    ]
  }
}
