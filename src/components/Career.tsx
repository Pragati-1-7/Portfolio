import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI)</h4>
                <h5>Vishwakarma Institute of Technology, Pune</h5>
              </div>
              <h3>CURRENT</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science Engineering (Artificial Intelligence). CGPA: 9.49.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC</h4>
                <h5>SNBP Jr. College, Pune</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Percentage: 89.33%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC</h4>
                <h5>St. Joseph's Convent, Pune</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Percentage: 94.8%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
