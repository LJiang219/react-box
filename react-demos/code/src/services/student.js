// 域名：open.duyiedu.com
const appkey = "jiangling_1567671563091";
//https://open.duyiedu.com/api/student/findAll?appkey=jiangling_1567671563091
//https://open.duyiedu.com/api/student/findByPage?page=1&size=5&appkey=jiangling_1567671563091
//https://open.duyiedu.com/api/student/addStudent?sNo="0001"&name="Anna"&sex="femail"&birth="19900210"&phone="18519660770"&address="shanghai"&email="anna@163.com"&appkey=jiangling_1567671563091

/**
 * 获取所有学生
 */
export async function getAllStudents() {
  return await fetch("/api/student/findAll?appkey=" + appkey)
    .then(resp => resp.json()).then(resp => resp.data);
}

/**
 * 获取分页数据
 * @param {*} page 
 * @param {*} limit 
 */
export async function getStudents(page = 1, limit = 10) {
  return await fetch(`/api/student/findByPage?appkey=${appkey}$page=${page}$size=${limit}`)
    .then(resp => resp.json()).then(resp => resp.data)
}