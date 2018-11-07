// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    path: '/',
    name: '广告计划',
    icon: 'el-icon-menu',
    children: [
      {
        path: 'campaign',
        name: '计划管理',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
