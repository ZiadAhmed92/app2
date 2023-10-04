import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../fadl.jpg";
const Home = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    check();
  }, []);
  console.log(value1);
  console.log(value2);
  function dataUser1(e) {
    
    setValue1(e.target.innerHTML);
  }
  function dataUser2(e) {
    setValue2(e.target.innerHTML);
  }

  function check() {
    if (value1 === "الاولى" && value2 === "ترم اول") {
      navigate("/first");
      setValue1("");
      setValue2("");
    } else if (value1 == "الاولى" && value2 === "ترم تانى") {
      navigate("/Second");
      setValue1("");
      setValue2("");
    }
     else if (value1 == "الثانية" && value2 === "ترم اول") {
     window.alert("لسا ي صاحبى مجهزناش سنة تانية ترم اول")
      setValue1("");
      setValue2("");
    }
     else if (value1 == "الثانية" && value2 === "ترم تانى") {
      window.alert("لسا ي صاحبى مجهزناش سنة تانية ترم تانى")
      setValue1("");
      setValue2("");
    }
     else if (value1 == "الثالثة" && value2 === "ترم اول") {
      window.alert("لسا ي صاحبى مجهزناش سنة تالتة ترم اول")
      setValue1("");
      setValue2("");
    }
     else if (value1 == "الثالثة" && value2 === "ترم تانى") {
      window.alert("لسا ي صاحبى مجهزناش سنة تالتة ترم تانى")
      setValue1("");
      setValue2("");
    }
     else if (value1 == "الرابعة" && value2 === "ترم اول") {
      window.alert("لسا ي صاحبى مجهزناش سنة رابعة ترم اول")
      setValue1("");
      setValue2("");
    }
     else if (value1 == "الرابعة" && value2 === "ترم تانى") {
      window.alert("لسا ي صاحبى مجهزناش سنة رابعة ترم تانى")
      setValue1("");
      setValue2("");
    }
  }

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className=" mahmo3  w-100 text-center py-2 d-none">
              <h1 className="text-white ">Autotronics programe</h1>
            </div>
            <h1 className="fadl mahmo mahmo3 text-white">
              {" "}
              Eng: Mahmoud Fadl{" "}
            </h1>
            <img src={img} alt="img" className="img w-100" />

            <div className="container-icon icon">
              <a
                href="https://www.facebook.com/profile.php?id=100084344058970&mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <i
                  className="fa-brands fa-square-facebook"
                  id="facebook"
                ></i>{" "}
              </a>
              <a href="https://wsend.co/201153721265" target="_blank">
                {" "}
                <i className="fa-brands fa-whatsapp" id="whats"></i>{" "}
              </a>
              <a
                href="https://twitter.com/fadl31100448?t=owYTaHxqVtyaWiyh8VmJJg&s=09"
                target="_blank"
              >
                <i className="fa-brands fa-twitter" id="twitter"></i>
              </a>
              <a
                href="https://instagram.com/mahmoudfadl821?igshid=NGExMmI2YTkyZg=="
                target="_blank"
              >
                <i className="fa-brands fa-instagram" id="instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6  rtf">
            <div className="w-100 text-center py-2">
              <h1 className="text-white mahmo2">Autotronics programe</h1>
            </div>
            <div>
              <h4 className="rtf my-4 text-white">اختر الفرقة :</h4>
              {/* <select onClick={dataUser1} className="form-select" aria-label="Default select example">
                
                    <option selected  value="5" className='rtf' disabled>اختر</option>
                    <option   value="1" className='rtf'>الاولى</option>
                    <option   value="2"className='rtf' disabled>الثانية </option>
                    <option   value="3"className='rtf'disabled >الثالثة </option>
                    <option   value="4"className='rtf'disabled>الرابعة </option>
                
                </select> */}
              <div className="dropdown">
                <button
                  type="button"
                  className="btn-width btn-home btn btn-primary dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                 <p className="px-3 d-inline"> الفرقة</p>
                </button>
                <ul className="dropdown-menu">
                  <li  className="select-value p-3" onClick={dataUser1}>
                    
                    الاولى
                    
                  </li>
                  <li className="select-value p-3" onClick={dataUser1}>
                    
                    الثانية
                    
                  </li>
                  <li className="select-value p-3" onClick={dataUser1}>
                    
                    الثالثة
                    
                  </li>
                  <li className="select-value p-3" onClick={dataUser1}>
                    
                    الرابعة
                    
                  </li>
                </ul>
              </div>

              <h4 className="rtf my-4 text-white"> اختر الترم :</h4>
              {/* <select
                onClick={dataUser2}
                className="form-select mt-3"
                aria-label="Default select example"
              >
                <option selected value="3" className="rtf" disabled>
                  اختر{" "}
                </option>
                <option value="1" className="rtf">
                  الترم الاول
                </option>
                <option value="2" className="rtf">
                  الترم التانى
                </option>
              </select> */}
               <div className="dropdown">
                <button
                  type="button"
                  className="btn-width btn-home btn btn-primary dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                 <p className="px-3 d-inline"> الترم</p>
                </button>
                <ul className="dropdown-menu">
                  <li  className="select-value p-3" onClick={dataUser2}>
                    
                    ترم اول
                    
                  </li>
                  <li className="select-value p-3" onClick={dataUser2}>
                    
                    ترم تانى
                    
                  </li>
                 
                </ul>
              </div>
            </div>

            <button onClick={check} className="btn btn-home rtf btn-width my-5">
              اذهب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
