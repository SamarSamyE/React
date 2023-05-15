import { Component } from "react";
class InputClass extends Component{
    Styles = {
        input_container:{
            padding: '2%',
            border: '1px solid black',
            marginBottom: '3%',
            borderRadius: '10px',
            width: '60%',
            marginLeft: '20%',
            backgroundColor:'white'
          },
          input:{
            borderRadius: '5px',
            marginLeft: '25%',
            width: '50%',
            height: '30px',
            fontWeight: '600',
          },
          p:{
            textAlign: 'center',
            fontSize: 'larger',
            fontStyle: 'italic',
          },
          button:{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0C134F',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '43%',
            transition: 'background-color 0.3s ease',

          }
        }
    
    getData = (e)=>{
            this.setState({name:e.target.value})        
    }
    constructor(){
        super();
        this.state = {
            name:""
        }
    }
    render(){
        return(
          <div style={{backgroundColor:'#f7f7f7'}}>
            <div style={this.Styles.input_container}>
                <input 
                    type='text' 
                    value={this.state.name} 
                    style={this.Styles.input}
                    onChange={this.getData}
                />
                <p style={this.Styles.p}>{this.state.name}</p>
                <button style={this.Styles.button} onClick={() => this.setState({ name: "" })}>Reset</button>
              </div>
          </div>     
        )
    }
}

export default InputClass;