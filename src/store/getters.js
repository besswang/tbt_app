// 二，用getters来获取state的状态，而不是直接使用state
const getters = {
  phone: state => state.user.login.phone,
  password: state => state.user.login.password,
  codeDisabled:state => state.user.code.codeDisabled,
  text:state => state.user.code.text,
  count:state => state.user.code.count,
  projectStage: (state) => {
    let n = state.project.detail.projectStage
    if ( n=== 0) {
      return '暂未公布';
    } else if (n === 1) {
      return '即将开始';
    } else if (n === 2) {
      return '进行中';
    } else if (n === 3) {
      return '预售中'
    } else if (n === 4) {
      return '已经结束'
    }
  },

  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs
}
export default getters

