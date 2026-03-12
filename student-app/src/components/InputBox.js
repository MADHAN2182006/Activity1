function InputBox({ setName }) {

 return(
  <div className="input-section">

   <input
    type="text"
    placeholder="Enter your name"
    className="input-box"
    onChange={(e)=>setName(e.target.value)}
   />

  </div>
 );

}

export default InputBox;