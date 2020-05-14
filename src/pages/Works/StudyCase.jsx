import React from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const StudyCase = () => {
  let { WorkSlug } = useParams();
  const Work = WorkSlug.replace("-study-case", "");
  return (
    <>
      <div className="container d-flex justify-content-around">
        {WorkSlug && (
          <div className="card mt-5 col-md-6 bg-light border-warning">
            <h1 className="text-center my-3">
              <FormattedMessage id={Work + ".title"} />
            </h1>
            <p>
              <FormattedMessage id={Work + ".content"} />
            </p>
          </div>
        )}
      </div>
    </>
  )
};

export default StudyCase;