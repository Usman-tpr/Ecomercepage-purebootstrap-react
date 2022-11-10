import React from 'react'
import myimage from './shop.jpg'

const Hero = () => {
  return (
    <div>
        <div className=" mt-2 bg-light">
            <div className="row d-flex flex-row" style={{width:"100%"}}>
            <div className="col-4"><img className='w-80 h-60' src="https://assets.designhill.com/resize_img.php?atyp=st_page_file&pth=ft_bt_tiwhili_org||BT23074||two_image_with_heading_info_link_image2_img&flp=1641549248-130972946261d80dc0a68d03-39459501.png" alt="" />

         
             </div>
             <div className="col-4">  <h6>Spring Collection</h6><h1>Get up to 30% Off New Arrivals</h1> <button className='btn btn-danger'>Shop</button>
             
             
             </div>
             <div className="col-sm-2"><img style={{width:'400px',height:'400px'}} src={myimage} alt=""  /></div>
            </div>
        </div>
    </div>
  )
}

export default Hero