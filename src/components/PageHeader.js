import React from 'react';


const PageHeader = (props) => {
    return (
        <section className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content">
                            <h2 className="breadcrumb__title">{ props.title }</h2>
                            <ul className="breadcrumb__list">
                                <li className="active__list-item"><a>home</a></li>
                                <li>{ props.title }</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
