// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';
import NotFound from './pages/NotFound';

import AdCampaign from './pages/AdCampaign'
import Login from './pages/Login'

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: AdCampaign,
    children: [
      {
        path: '/campaign',
        layout: HeaderAsideLayout,
        component: AdCampaign,
      },
    ],
  },{
    path:'/login',
    layout:Login,
  },
  {
    path: '*',
    layout: HeaderAsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
