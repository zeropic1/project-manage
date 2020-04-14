export const stepData = {
    steps1: {
        stepList: [
            "获取install文件",
            "更改brew_install文件中的链接资源，将原有的链接资源替换成中科大的镜像资源",
            "运行修改了的brew_install安装Homebrew",
            "出现Homebrew-core无法下载到本地",
            "使用中科大镜像下载Homebrew-core",
            "把Homebrew-core的镜像地址也设置为中科院的国内镜像",
            "应用生效"
        ],
        contentList: [
            "curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install >> brew_install 如果下下来的文件报错可以换中科大镜像 curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install >> brew_install",
            'BREW_REPO = "https://github.com/Homebrew/brew".freeze 替换为 BREW_REPO = "https://mirrors.ustc.edu.cn/brew.git".freeze"',
            "/usr/bin/ruby ~/brew_install",
            require("./imgs/Homebrew-core-fail.jpg"),
            "git clone git://mirrors.ustc.edu.cn/homebrew-core.git//usr/local/Homebrew/Library/Taps/homebrew/homebrew-core --depth=1",
            'cd "$(brew --repo)" \n git remote set-url origin https://mirrors.ustc.edu.cn/brew.git \n cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core" \n git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git',
            "brew update"
        ]
    },
    steps2: {
        stepList: [
            "替换中科大镜像源",
            "应用生效",
            "安装"
        ],
        contentList: [
            'cd "$(brew --repo)/Library/Taps/homebrew/homebrew-cask" \n git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git',
            "brew update",
            "brew install caskroom/cask/brew-cask"
        ]
    }
}