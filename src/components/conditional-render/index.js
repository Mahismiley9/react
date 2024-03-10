const ConditionalRender=()=>{
    let arryOfObjects=[
        {
            name:"kiran",
            marks:60
        },
        {
            name:"sandeep",
            marks:50
        },
        {
            name:"keerthi",
            marks:93
        },
        {
            name:"mahesh",
            marks:99
        }
    ]
    
    return(
    <div>
        <h2>hello students </h2>
        {
            arryOfObjects.map((eachObject)=>{
                const {marks,name}=eachObject
                return(
                    <div>
                        <h2>{eachObject.name}</h2>
                        <h3>Marks obtained {eachObject.marks}</h3>
                        { 
                    marks>85 ? <h4>Secured A+ grade </h4>: marks >80 ? <h5>Secured A grade</h5>: marks >40 ? <h5>pass</h5>:<h5>Better luck next time, ur near</h5>}
                        <div style={{width:"30%",height:4,backgroundColor:"hotpink"}}></div>
                   
                    
                    </div>
                  

                )
            })
        }
            
        </div>
    )
}
export default ConditionalRender