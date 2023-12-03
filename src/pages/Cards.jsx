
import { useGlobalContext } from '../contex'

export default function Cards() {
  const {products, deleteItem,   ediItem ,} = useGlobalContext();
  return (
    <div className='carsd_box'>
      {products.map((item) => {
        return(
          <div className='cards_item_box' key={item.id}>
            <h2 className='cards_name'>{item.name}</h2>
            <h2>{item.price}</h2>
            <button className='product_btn' onClick={() => deleteItem(item.id)}>delete</button>
            <button className='product_btn' onClick={() => ediItem(item.id) } >edit</button>
          </div>
        )
      })}
    </div>
  )
}
