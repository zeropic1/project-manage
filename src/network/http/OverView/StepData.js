export const stepData = {
  steps1: {
    stepList: [
      '查看远程仓库的commits记录',
      {
        title: 'Step2 选择要合并的commits',
        subTitle: '例如我想将第二次提交和第三次提交合并为一个提交'
      },
      '将vim中的第三次提交前面的参数pick改为s,表示这个commit 会被合并到前一个 commit',
      '保存后会出现一个commit message的vim界面,可以在此修改合并commits的消息',
      '推送到远程仓库'
    ],
    contentList: [
      require('./imgs/commits-history.png'),
      'git rebase -i HEAD~2',
      require('./imgs/rebase-combination-commits.png'),
      require('./imgs/rebase-combination-commits-message.png'),
      'git push --force'
    ]
  }
}
