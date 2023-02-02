import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import MenuItem from './MenuItem'

export default function Menu(props) {

  // Navigate
  let navigate = useNavigate();

  // Handle Menu Item Click
  const handleMenuItemClick = (id) => {
    console.log(id)
    Axios.get(`item/details?id=${id}`)
    .then(res => {
      console.log(res.data.item.name)
      let path = `/food/detail?id=${res.data.item._id}`
      navigate(path);
    })
    .catch(err => {
      console.log('Cannot Get Item Details')
      console.log(err)
    })
  }

  // Filtering and Mapping by Item Category
  const specialsItems = props.items.map((item, index) => (
    item.category === "Specials" ? (
      <div key={item._id}>
        <MenuItem itemClick={handleMenuItemClick} {...item}/>
      </div>
    ) : (
      <React.Fragment key={item._id}></React.Fragment>
    )
  ))

  const kyarabenItems = props.items.map((item, index) => (
    item.category === "Kyaraben" ? (
      <div key={item._id}>
        <MenuItem itemClick={handleMenuItemClick} {...item}/>
      </div>
    ) : (
      <React.Fragment key={item._id}></React.Fragment>
    )
  ))

  const drinksItems = props.items.map((item, index) => (
    item.category === "Drinks" ? (
      <div key={item._id}>
        <MenuItem itemClick={handleMenuItemClick} {...item}/>
      </div>
    ) : (
      <React.Fragment key={item._id}></React.Fragment>
    )
  ))
  
  return (
    <div>
      <div className='text-center text-4xl py-5 headerTitles'>
        <h1>Menu</h1>
      </div>

      <nav className='bg-slate-300 py-2 text-center flex justify-evenly' id='menuNav'>
        <Link to='/custombento/carbs' className='pl-px-10 hover:underline'>Custom Bento</Link>&nbsp;
        <a href='#Specials' className='hover:underline'>Specials</a>&nbsp;
        <a href='#Kyaraben' className='hover:underline'>Kyaraben</a>&nbsp;
        <a href='#Drinks' className='hover:underline'>Drinks</a>&nbsp;
      </nav>


      {/* Specials Category */}
      <div>
          <h1 className='text-5xl text-center py-4 bg-zinc-400 specialsHeader' id='Specials'>Specials</h1>
          <div className='flex flex-row justify-evenly my-10'>
            {specialsItems}
          </div>
      </div>

      {/* Kyaraben Category */}
      <div>
          <h1 className='text-5xl text-center py-4 bg-zinc-400' id='Kyaraben'>Kyaraben</h1>
          <div className='flex flex-row justify-evenly my-10'>
            {kyarabenItems}
          </div>
      </div>

      {/* Drinks Category */}
      <div></div>
      <div>
          <h1 className='text-5xl text-center py-4 bg-zinc-400' id='Drinks'>Drinks</h1>
          <div className='flex flex-row justify-evenly my-10'>
            {drinksItems}
          </div>
      </div>

    </div>
  )
}