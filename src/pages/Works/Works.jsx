import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Works = () => {
    const works = [
        { id: "0", slug: "platon-study-case", name: "PLATON" },
        { id: "1", slug: "sedal-study-case", name: "Sedal" },
        { id: "2", slug: "solane-study-case", name: "Solane" },
    ];
    return (
        <>
            <h1>
                <FormattedMessage id="Works.title" />
            </h1>
            <p>
                <FormattedMessage id="Works.content" />
            </p>
            <div className="row">
                <div className="container d-flex justify-content-around">
                {works.map(({ slug, name, index }) => (
                    <div className="card col-md-3 text-center">
                        <h3>{name}</h3>
                        <p>
                            <Link key={index} className="btn btn-warning" to={"/Works/" + slug}>
                                <FormattedMessage id="Works.more" />
                            </Link>
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
};
export default Works;