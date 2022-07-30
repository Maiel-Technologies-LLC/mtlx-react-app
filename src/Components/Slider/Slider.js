import SliderItem from "./SliderItem";


function Slider (){

    const obj = {

        slide1 : {
            title: "Slide 1",
            content: "Some representative placeholder content for the first slide of the carousel.",
            btn: "button 1",
            caption: "carousel-caption text-start"
        },
        slide2 : {
            title: "Slide 2",
            content: "Some representative placeholder content for the second slide of the carousel.",
            btn: "button 2"

        },
        slide3 : {
            title: "Slide 3",
            content: "Some representative placeholder content for the third slide of this carousel.",
            btn: "button 3"
        },

    };

   


    return(
        <main>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <SliderItem title={ obj.slide1.title } content={ obj.slide1.content} btn={ obj.slide1.btn } captionClass={ obj.slide1.caption } class="carousel-item"/>
                    <SliderItem title={ obj.slide2.title } content={ obj.slide2.content} btn={ obj.slide2.btn } captionClass="carousel-caption text-center" class="carousel-item"/>
                    <SliderItem title={ obj.slide3.title } content={ obj.slide3.content} btn={ obj.slide3.btn } captionClass="carousel-caption text-end" class="carousel-item active"/>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    );
}

export default Slider;