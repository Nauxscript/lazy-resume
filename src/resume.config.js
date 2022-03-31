module.exports = {
  baseInfo: {
    name: '汤遒之',
    name_en: 'Zhuoxuan Tang',
    post: '前端开发工程师',
    base: '广州',
    gender: '男',
    birth: '1996.04',
    university: '广东医科大学',
    major: '信息管理与信息系统',
    education: '本科',
    graduation: '毕业于 2018',
    blog: {
      text: 'Nauxscript',
      preText: 'Blog · ',
      value: 'https://Nauxscript.gitee.io'
    },
    gitee: {
      text: 'Nauxscript',
      preText: 'Gitee · ',
      value: 'https://gitee.com/Nauxscript'
    },
    github: {
      text: 'Nauxscript',
      preText: 'Github · ',
      value: ''
    },
    mail: {
      text: 'nauxscript@gmail.com',
      preText: '',
      value: 'nauxscript@gmail.com'
    },
    tel: {
      text: '153****1980 (8am - 8pm)',
      preText: '',
      value: '15384451980 (8am - 8pm)'
    },
  },
  workings: [{
    name: "广州放射云信息科技有限公司",
    time: "2018.04 - 至今",
    type: "工作",
    link: 'https://www.fangsheyun.com',
    projects: [{
      name: "全院PACS（医学影像系统）",
      time: "2018.07 - 至今",
      desc: require('./templates/desc_md/project_1.md')()
    }, {
      name: "约检查小程序项目",
      imgLink: './asset/img/mini_program.jpg',
      link: '',
      type: 'link',
      time: "2019.05 - 2019.11",
      desc: require('./templates/desc_md/project_2.md')()
    }, {
      name: "网页影像浏览器（Dicom Viewer）",
      time: "2018.12 - 2020.05",
      desc: require('./templates/desc_md/project_3.md')()
    }]
  }],
  internship: [{
    name: "广州创惠信息科技有限公司",
    time: "2017.11 - 2018.04",
    type: "实习",
    link: 'https://www.fangsheyun.com',
    projects: [{
      name: "LIS（实验室信息管理系统）",
      time: "实施工程师",
    }]
  }],
  skills: [{
    name: '前端框架',
    desc: '掌握 <strong>Vue2</strong> 及其全家桶，有实际使用、上线、维护经验；了解 <strong>Vue3</strong> 、<strong>React</strong>。'
  }, {
    name: '前端样式库',
    desc: '熟悉使用 <strong>ElementUI</strong>、<strong>Ant Design Vue</strong>、<strong>Layui</strong>，有相关使用、上线、维护经验。了解原子化样式库 <strong>TailwindCSS</strong>、小程序样式库 <strong>LinUI</strong>、<strong>Vant-Weapp</strong>。'
  }, {
    name: '小程序',
    desc: '掌握 <strong>原生微信小程序</strong> 开发，有实际使用、上线、维护经验；了解其 <strong>官方组件</strong>、<strong>API</strong> 使用。'
  }, {
    name: '预编译语言',
    desc: '了解 <strong>Typescript</strong>、<strong>Sass</strong>、<strong>Less</strong>、<strong>Stylus</strong>、<strong>EJS</strong>。'
  }, {
    name: '前端工具库',
    desc: '熟悉 <strong>jQuery</strong>、<strong>Lodash</strong>、<strong>Axios</strong>。'
  }],
  selfProjects: [{
    name: "Noah-ark",
    imgLink: '',
    link: 'http://nauxscript.gitee.io/noahs-ark',
    type: 'link',
    time: "",
    desc: require('./templates/desc_md/project_4.md')()
  }, {
    name: "Naux Resume",
    imgLink: '',
    link: 'https://gitee.com/Nauxscript/resume',
    type: 'link',
    time: "",
    desc: require('./templates/desc_md/project_5.md')()
  }]
}