/* eslint-disable react/prop-types */

import { useGlobalContext } from "../contex"


export default function Service( { id,image, title,price,amount}) {
  const {inc, dic} = useGlobalContext();
  return (
    <div className="service_box">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>{amount}</h4>
      <button className="service_btn" onClick={() => inc(id)}>inc</button>
      <button className="service_btn" onClick={() => dic(id)}>dic</button>
    </div>
  )
}
