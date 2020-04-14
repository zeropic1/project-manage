export const stepData = {
    steps1: {
        stepList: [
            "查看当前使用的shell",
            "查看安装的shell",
            "使用brew更新zsh",
            "切换为zsh",
        ],
        contentList: [
            "echo $SHELL",
            'cat /etc/shells',
            "brew install zsh",
            "chsh -s /bin/zsh",
        ]
    },
    steps2: {
        stepList: [
            "下载安装oh-my-zsh",
            {
                title: "Step2.1 设置主题",
                subTitle: "查看自带的主题,对于自带主题的样式和呈现效果,可以前往 Oh My Zsh 的官方Wiki(https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)查看"
            },
            {
                title: "Step2.2 设置主题",
                subTitle: "自带主题推荐ys"
            },
            {
                title: "Step3.1 配置插件",
                subTitle: "查看自带的插件,对于自带插件的功能及使用,可以前往 Oh My Zsh 的官方Wiki(https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins)查看"
            },
            {
                title: "Step3.2 配置插件",
                subTitle: ""
            },
        ],
        contentList: [
            'sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"',
            "ls ~/.oh-my-zsh/themes",
            "打开配置文件:vim ~/.zshrc \n 修改配置文件:ZSH_THEME=你想要的主题，默认为robbyrussell \n 让配置文件生效:source ~/.zshrc",
            "ls ~/.oh-my-zsh/plugins",
            "打开配置文件:vim ~/.zshrc \n 修改配置文件:plugins={... 你想要添加的插件名} \n 让配置文件生效:source ~/.zshrc"
        ]
    }
}