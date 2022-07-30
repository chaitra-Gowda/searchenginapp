import './App.css';
import Split from 'react-split'

function App()
{
  return  <div className='main_div'>
              <Split
               sizes={[46, 48]}
               direction='horizontal'
               gutterAlign='center'
               gutterSize= {10}
               cursor="col-resize"
               style={{display: "flex", height: '95%'}}
              >
                <div className='first_div'>
                    <h3> Place the Paragraph </h3>
                    <div className='inner_div'>
                      <p  placeholder="Paragraph should contain 500 character">  
                      It says I need to type at least ten characters, so here's this.
                       Y'know what? I'm gonna type one hundred characters instead. Actually, 
                       I'm going to type five hundred characters. I'm definitely not going to type 
                       anywhere near one thousand characters, because that'd be ridiculous. 
                       Even if I wanted to type one thousand characters, I have to go to bed now anyway, so I simply don't have the time. 
                      I mean, I could just type a bunch of random letters or hold down one key, but that would be no fun at all.
                      </p>
                    </div>

                    <button> SUBMIT </button>
                </div>

                <div className='first_div'>
                    <h3> Converted Paragraph</h3>
                    <div className='inner_div'>
                      <p  placeholder="Paragraph should contain 500 character"> { "Paragraph should contain 500 character"} </p>
                    </div>
                </div>
              </Split>
          </div>
}

export default App;
