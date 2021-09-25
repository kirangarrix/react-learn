import React, {useState,useCallback,useMemo} from 'react';


function App() {


 function onChange(e){
    let files=e.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload=(e)=>{
      console.log(e.target.result);
    }
  }


  return (
    <div className="App">
        <h1>React file uploader</h1>
        <input type="file" name="file" onChange={(e)=>onChange(e)} />
    </div>
  );
}

export default App;
