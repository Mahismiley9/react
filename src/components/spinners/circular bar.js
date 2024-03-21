import React ,{ Component } from "react";
import { CirclesWithBar} from 'react-loader-spinner'

class CurcularSpinner extends Component{
    render(){
    return (
    <CirclesWithBar
        float="center"
        height="190"
        width="200"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )}
}
export default CurcularSpinner