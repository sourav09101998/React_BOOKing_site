import React,{ useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

function Loader() {
    let [loading, setLoading] = useState(true);
  return (
    <div className="sweet-loading text-center" style={{marginTop:'210px'}}>
      
      <PulseLoader color='#36d7b7' loading={loading} css='' size={50} />
    </div>
  )
}

export default Loader