import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import mark from '../sectionTwo/assets/success.svg';
import first from '../sectionTwo/assets/first.svg';
import { useGlobalContext } from '../../context/context';
import axios from 'axios'


function Uploaded() {
    const [success, setSuccess] = useState(false);
  const { file, setFile } = useGlobalContext()
    const Navigate = useNavigate();
    const clickHandler = () => {
      
    axios({
      url: 'server_url/v1/upload',
      method: "POST",
      headers: {'Content-Type' : 'application/pdf'},
      body: file
    }).then(res=>{
      console.log(res)
      Navigate("/upload-data");

    }).catch(err=>{
      console.log(err)
      alert("You imported the wrong file")

    })

  }
    const changeHandler = (e) => {
      setFile(e.target.files);
    
    };

    
  return (
    <div>
        <main className='flex flex-col items-center justify-center'>
            <img className='h-[0] md:h-[80px] w-[0] md:w-[80px] ' src={mark} alt="" />
            <img
                src={first}
                className="w-[67px] md:w-[0] h-[67px] md:h-[0]"
                alt=""
              />
            <h2 className='text-primaryMain mb-4 mt-5 font-semibold text-[24px] '>Your CV has Been Uploaded</h2>
            <p className='text-textBody mb-4 text-[16px] '>Proceed to customize your cover letter</p>
            <div className="a grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <button onClick={clickHandler} className='text-[16px] bg-primaryMain font-semibold rounded-md text-textWhite px-[15px] md:px-[12px] py-[8px]'>Generate Cover Letter</button>
            <button className='text-[16px] text-primaryMain font-semibold rounded-md border-[1.5px] border-primaryMain bg-textWhite px-[15px] md:px-[12px] py-[8px]'>Change Uploaded File</button>
            </div>
            
        </main>
        <form method="post" name="myFile" action="/upload" encType="multipart/form-data">
              <input
                style={{ opacity: "0" }}
                // style={{ background: "red" }}
                type="file"
                accept="application/pdf"
                onChange={changeHandler}
                className="upload_file absolute cursor-pointer  md:left-[55%] left-[20%] bottom-[20%] md:bottom-[25%] w-[60%] md:w-[40%] h-[8%] md-[10%] "
                id="upload_button"
                
              />
              </form>

    </div>
  )

}
export default Uploaded