import React  from 'react'


export default function About(Props) {
    let myStyle ={
        color: Props.mode==='dark'?'white':'#042743',
        backgroundColor:Props.mode==='dark'?'rgb(36 74 104)':'white',
        border:'2px solid',
        borderColor:Props.mode==='dark'?'white':'black',
    }
//   const [myStyle, setmyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   })




//   const [btntext, setBtnText] = useState("Enable dark props.mode")

//   const toggleStyle = ()=>{
//     if (myStyle.color === 'black') {
//         setmyStyle({
//             color: 'white',
//             backgroundColor: 'black',
//             border: '1px solid white'
//         })
//         setBtnText("Enable light props.mode")
//     }
//     else{
//         setmyStyle({
//             color: 'black',
//             backgroundColor: 'white'
//         })
//         setBtnText("Enable dark props.mode")
//     }
//   }

  return (
    <div className = "container"style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze your text quickly and effeciently. Be it word count or preview.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutil is a free character counter tool that provide instant character cound and word count statistics for a given text. Textutil reports a number of words and characters. This is suitable for writing text with words/character limits.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compitable</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web brower such as chrom,firefox,edge. It suits to count characters in facebook,blog,books,etc.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container">
            <button onClick= {toggleStyle} className="btn btn-primary my-3">{btntext}</button>
        </div> */}
    </div>
  )
}
