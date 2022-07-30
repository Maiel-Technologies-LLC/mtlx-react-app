import ServiceItem from "./ServiceItem";

function Service() {

    const service1 = "Some representative placeholder content for the three columns of text below the carousel. This is the first column.";
    const service2 = "Another exciting bit of representative placeholder content. This time, we've moved on to the second column.";
    const service3 = "And lastly this, the third column of representative placeholder content.";

    return(
        <div className="container marketing">
            <div className="row">
                <ServiceItem serviceContent={ service1 } />
                <ServiceItem serviceContent={ service2 } />
                <ServiceItem serviceContent={ service3 } />
            </div>
        </div>
    );
}

export default Service;