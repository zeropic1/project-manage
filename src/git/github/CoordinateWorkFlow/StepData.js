export const data = {
    steps1: {
        stepList: [
            "Fork项目'cl9/react-hooks-demo'到自己的GitHub上",
            "开发时将自己GitHub上刚fork的项目'zeropic1/react-hooks-demo'clone到本地",
            "修改提交代码到本地",
            "关联Fork项目的源",
            "同步Fork项目的更新",
            "合并完后推送到远程仓库"
        ],
        contentList: [
            require("./imgs/fork.jpg"),
            "git clone https://github.com/zeropic1/react-hooks-demo.git",
            "git add . \n git commit -m 'First commit' \n",
            "git remote add upstream https://github.com/cl9/react-hooks-demo.git",
            "git pull upstream YOUR-FROK-REPO-BRANCH-NAME",
            "git push"
        ]
    },
    steps2: {
        stepList: [
            "在自己的GitHub上找到Fork的项目'zeropic1/react-hooks-demo',新建Pull Request",
            "选择被Fork的项目(base)'cl9/react-hooks-demo'的分支",
            "选择Fork到自己的Github项目上(head)'zeropic1/react-hooks-demo'的分支",
            "点击Create pull request创建一个Pull Request",
        ],
        contentList: [
            require("./imgs/pull-request.png"),
            require("./imgs/choose-base-fork-and-branch.png"),
            require("./imgs/choose-head-fork-compare-branch.png"),
            "被Fork的项目的作者会收到Github的通知",
        ]
    },
}