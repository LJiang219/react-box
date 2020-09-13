import React from 'react'
import Modal from "../Modal";

/**
 * show: 是否显示蒙层
 * @param {*} props 
 */
export default function Loading(props) {
  return (
    <div>
      {props.show && <Modal>
        <div style={{
          color: "#fff",
          fontSize: "3em"
        }}>加载中...</div>
        </Modal>}
    </div>
  )
}
