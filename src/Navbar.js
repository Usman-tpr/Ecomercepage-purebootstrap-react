import React from "react";

const Navbar = () => {
  return (
 <><nav class="navbar navbar-expand-lg text-danger">
 <div class="container">
   <a className="navbar-brand lead" href="#"><h1 className="text-danger">Ecommerce</h1></a>
   <div className="">
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse text-danger" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-danger">
       <li class="nav-item">
         <a class="nav-link active text-danger " aria-current="page" href="#"  ><strong>Home</strong></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#"><strong>About US</strong></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#"><strong>Contact Us</strong></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#"><strong>New Products</strong></a>
       </li>
      
     
     </ul>
   
   </div>
   </div>
 </div>
</nav></>
  );
};

export default Navbar;
