import React from 'react'

const Products = () => {
  const Product=[
    {img:'https://ch.maje.com/dw/image/v2/AAON_PRD/on/demandware.static/-/Sites-maje-catalog-master-H13/default/dwa8c94c91/images/h13/Maje_MFPRO02726-0201_H_1.jpg?sw=750&q=80',
    card:'Women Dresses',
    title:'Imported'
  },
  {img:'https://asset1.cxnmarksandspencer.com/is/image/mands/DS_117e60cf071766098e16334a2853a49b_6?$Intl_PDP_Tab$',
  card:'Men Dresses',
  title:'German Collection'
  },
  {img:'https://cdn.shopify.com/s/files/1/0107/9820/2938/products/CLOVETECH7940_a0e40a7b-4527-43cc-b307-c93893129315_800x.jpg?v=1646350910',
  card:'Shoes',
  title:'Pakistani Brand'
  }

  ]
    
  return (
    <div className="container-fluid mt-5 ">
    <h1 className='d-flex justify-content-center divider text-white bg-danger '>Our Products</h1>
       <div className="container">
        <div className="row mt-5 justify-content-between text-center">
    {Product.map((items,index)=>
            <div className="col-sm-3  " key={index}>
            <div className="card " style={{width:'18rem'}}>
              <h4 className='text-danger'>{items.title}</h4>
    <img src={items.img} className="card-img-top " alt="..."/>
    <div className="card-body">
      <h4 className="card-title">{items.card}</h4> 
    
   
  </div>
</div>
          </div>)}
        </div>
       </div>
        </div>
   
  )
}

export default Products