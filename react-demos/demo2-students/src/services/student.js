// 域名：open.duyiedu.com
const appkey = "jiangling_1567671563091";
// 添加学生: 都不需要 ""
// https://open.duyiedu.com/api/student/addStudent?sNo=1112&name=ling&sex=1&birth=19900210&phone=18519660771&address=beijing&email=ling@qq.com&appkey=jiangling_1567671563091
// https://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=1&size=10
// package.json中添加: "proxy": "http://open.duyiedu.com", 然后重启项目
/**
 * 获取所有学生
 */
export async function getAllStudents(){
  return await fetch(`/api/student/findAll?appkey=${appkey}`)
    .then(resp => resp.json()).then(resp => resp.data);
}

/**
 * 获取分页数据
 * @param {*} page 
 * @param {*} limit 
 */
export async function getStudents(page = 1, limit = 10) {
  return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json()).then(resp => resp.data);
}

/**
 * 如果传递了key属性（key有值），则按照关键字和性别进行搜索
 * 如果key没有值，则对所有学生进行分页
 * @param {*} param0 
 */
export async function searchStudents(
  { page = 1, limit = 10, key = "", sex = -1 } = {}) {
    console.log(this)
  if (key) {
      //搜索
      const resp = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
          .then(resp => resp.json()).then(resp => resp.data);
      resp.datas = resp.searchList;
      delete resp.searchList;
      return resp;
  }
  else {
      //忽略性别，查询全部
      const resp = await getStudents(page, limit);
      resp.datas = resp.findByPage;
      delete resp.findByPage;
      return resp;
  }
}