function Info(props) {
    return(
        <div className= "container"> 
            <hr className = "featurette-divider"/>
             <div className="row featurette">
                <div className={props.textBox}>
                    <h2 className="featurette-heading fw-normal lh-1"> {props.title}</h2>
                    <p className="lead"> {props.details}</p>
                </div>
                <div className={props.imageBox}>
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
            </div>
        </div>
    );
}

export default Info;