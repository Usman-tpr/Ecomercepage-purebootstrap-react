import React from 'react'
import img1 from './s1.jpg'
import img2 from './2.jpg'
import img3 from './s3.jpg'
import img4 from './4.jpg'
import d1 from './d1.jpg'
import d2 from './d2.jpg'
import d3 from './d3.jpg'
import d4 from './d4.jpg'
import h1 from './h1.jpg'
import h2 from './h2.jpg'
import h3 from './h3.jpg'
import h4 from './h4.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './4.png'
import b5 from './b5.png'
import b6 from './b6.png'

const More = () => {
  const brand=[
    {
      img:b2
    },
    {
      img:b3
    },
    {
      img:b4
    },
    {
      img:b5
    },
    {
      img:b6
    },
    {
      img:b2
    },
  
  ]
 const  moreproducts=[
    {  img:img1,
        price:'$200/-',
        des:'Sumsung A32',
      
    },
    {  img:img2,
      price:'$500/-',
      des:'Iphone 7',
    
  },
  {  img:img3,
    price:'$100/-',
    des:'Infinix 6',
    
},
{  img:img4,
  price:'$300/-',
  des:'Techno Comon 19'
},
{  img:d1,
  price:'$300/-',
  des:'100% Cotton',
  off:'-25% Off'
},
{  img:d2,
  price:'$300/-',
  des:'Imported from India',
  off:'-35% Off'
},
{  img:d3,
  price:'$300/-',
  des:'Imported From china',
  off:'-40% Off'
},
{  img:d4,
  price:'$300/-',
  des:'Pakistani Brand',
  off:'-15% Off'
},
{  img:h1,
  price:'$20/-',
  des:'Addidas size medium',
  off:'-15% Off'

},
{  img:h2,
  price:'$30/-',
  des:'Diesel size medium',
  off:'-15% Off'

},
{  img:h3,
  price:'$10/-',
  des:' PakistNI size medium',

},
{  img:h4,
  price:'$25/-',
  des:'Addidas size medium',
  off:'-15% Off'

},


  ]
  return (
    <>
  <div className='mt-5'>
  <h3 className='text-center bg-red divider bg-danger text-white p-2'>New Arrivals</h3>

  <div className="container mt-5">
    <div className="row">
     {moreproducts.map((items,index)=>
    
        <div className="col-sm-3 mt-5 text-center">
        <p className='bg-danger text-white'>{items.off}</p>
      <img style={{width:'200px',height:'200px'}}src={items.img} alt="" />
      <h6>{items.price}</h6>
      <p>{items.des}</p>
    </div>
  
     
     )}
    </div>
  </div>
  </div>
  <div className='text-center mt-5 text-danger'>
    <h2 >Supported Brands</h2>
    </div>
    <div className="container-fluid mt-5">
      <div className="row">
       {brand.map((items,index)=>
       <div className="col-4">
       <img src={items.img}/></div>
       )}
        </div>
    </div>
  


  
<section class="mb-4 container-fluid bg-dark text-white">

   
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
   
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

       
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              
                <div class="row">

               
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                   

                </div>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
               

               
                <div class="row">

                   
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
       
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p></p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p></p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>Usman.tpr@gmail.com</p>
                </li>
            </ul>
        </div>
   

    </div>

</section>





    <div className="container-fluid bg-dark text-white"> 
<div className="container">
<div className="row">
<div className="col-3 text-white">Usman Ali Buisness</div>
    <div className="col-3 text-white">03489324934</div>
    <div className="col-3 text-white">Ecomerce Website</div>
    <div className="col-3 text-white">Copyright 2033</div>
</div>
</div>
    </div>

    
    </>
  )
}

export default More 