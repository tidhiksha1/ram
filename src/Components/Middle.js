import React from "react";
import bank from "./Images/bank.png";
import color from "./Images/color.png";

function Middle() {
  return (
    <div className="container-fluid">
   
      <h4>Add Money</h4>

      <p>
        <span className="span">Accounts/</span> Add Money
      </p>
       <div class="row">
          <div className="col-md-6 col-lg-6 col-6">
            <div class="card">
              <div class="card-body">
                <p>How would you like to add money?</p>
                <p  className="pp" >
                  +<span>add debit or credit card  </span>
                </p>
                <p>
                  <img src={bank} width={35} height={35} />{" "}
                  <span>Transfer to your payvoo account</span>
                </p>
              </div>
              <div className="ss">
               <div class="card"> 
                  <p>Card Number  <span ><i class="bi bi-info-circle" style={{marginLeft:"350px"}}></i></span>   </p>    
                   <div class="card-body"> 
                    <p className="lll">*****************6547 </p>  
                      <p>Expresso Bank Limited
                      <span>
                        <img src={color} /></span>
                    </p>
                  </div> 
                 </div> 
              </div>
              <div>
                <div class ="card">
                  <div class="card-body">
                    <p>Card Number      <i class="bi bi-info-circle" style={{marginLeft:"350px"}}></i></p>   
                    <p  className="mmm">*****************6942</p>
                    <p>
                      Trailer Bank Limited
                      <span>
                        <img src={color} />
                      </span>
                    </p>
                   </div> 
                </div>
              </div>
              <div>
                <div class="card">
                  <div class="card-body">
                    <p>Card Number   <i class="bi bi-info-circle" style={{marginLeft:"350px"}}></i>  </p>
                    <p className="nnn">*****************9872</p>
                    <p>
                      Yugestasto bank
                      <span>
                        <img src={color} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          <div className="col-2 md-6 col-lg-6 col-6">
           <p> ezdrgxfhmnbj</p>
            </div>  
        </div>
     </div>
 
  </div>
 
 
  );
}
export default Middle;
