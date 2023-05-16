import { Component } from "react";
import "./slider.css"
class SliderClass extends Component{
    constructor(){
        super();
        this.state = {
            images:[
                "images/1.jpg",
                "images/2.jpg",
                "images/3.jpg",
                "images/4.jpg",
                "images/5.jpg",
                "images/6.jpg",
                "images/404_page_cover.jpg",
            ],
           
            currentIndex: 0,
            isDisplaying: true
        };
        this.timerId= null;
    }

    goToPrevSlide = () => {
        const { currentIndex, images } = this.state;
        const firstIndex = 0;
        const newIndex = currentIndex === firstIndex ? firstIndex : currentIndex - 1;
        this.setState({ currentIndex: newIndex });
      };
    
      goToNextSlide = () => {
        const { currentIndex, images } = this.state;
        const lastIndex = images.length - 1;
        const newIndex = currentIndex === lastIndex ? lastIndex : currentIndex + 1;
        this.setState({ currentIndex: newIndex });
      };

      slide= ()=>{
        this.timerId = setInterval(() => {
            const { currentIndex, images } = this.state;
            const lastIndex = images.length - 1;
            const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
            this.setState({ currentIndex: newIndex });
          }, 500);
    
      }
      stop=()=>{
        clearInterval(this.timerId);
      }
      render() {
        return (
          <div className="slider-container">
            <div className="slider-buttons">
            <button onClick={this.goToPrevSlide}>Prev</button>
            <button onClick={this.goToNextSlide}>Next</button>
            <button onClick={this.slide}>Play</button>
            <button onClick={this.stop}>Stop</button>
            </div>
            <img className="slider-image" src={this.state.images[this.state.currentIndex]}/>
          </div>
        );
      }
}
export default SliderClass;  
