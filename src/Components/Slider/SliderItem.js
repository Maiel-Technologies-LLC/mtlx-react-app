

function SliderItem (props){

    return(
        
        <div className={ props.class }>
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

            <div className="container">
            <div className={ props.captionClass }>
                <h1>{ props.title }</h1>
                <p>{ props.content }</p>
                <p><a className="btn btn-lg btn-primary" href="http://google.com">{ props.btn }</a></p>
            </div>
            </div>
        </div>
        
    );
}

export default SliderItem;