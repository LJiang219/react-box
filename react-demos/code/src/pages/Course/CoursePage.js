import React from 'react'
import CourseList from "../../components/CourseList";
import { courseList} from "../../datas/courses";

export default function Courses(props) {
  // const list = courseList;

  // list.map(item => ({...item, checkVal:false}))
  courseList.map(item => {
    item.checkVal=false
  })
  // console.log('list', list)
  return (
    <div>
      <CourseList courseList={courseList} />
    </div>
  )
}
