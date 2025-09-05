import "./Card.css";

function Card(props) {
  return (
    <div className={props.className}>
      {/* //<div className="card-1"> </div> */}
      <div className={props.backClass}>
        {/* //<div className="Back"> </div> */}
        <h3>
          {props.title}
          {props.icon}
        </h3>
        {/* title="Machine Learning Project" */}
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div>
      <text
        style={{
          color: "#FFD700",
          fontFamily: "Cinzel",
          textAlign: "center",
          fontSize: "40px",
          marginTop: "25%",
          marginLeft: "40%",
        }}
      >
        Projects Describe
      </text>

      <div id="card-contain">
        {/* Card-1 */}
        <Card
          className="card-1"
          backClass="Back"
          title="A.I Based Project"
          description="Developed a back-end system using Python and pandas to automatically send tailored mass emails to more than
1000 recipients.
Developed a user-friendly front-end interface utilizing HTML, CSS, and JavaScript, enabling users to upload files
and extract over 100 email addresses, decreasing manual data entry errors.
Successfully implemented logic to dynamically populate email templates, significantly reducing 20% manual effort."
        />

        {/* Card-2 */}
        <Card
          className="card-2"
          backClass="Back-X"
          title="Machine Learning Based"
          description="Created a Supervised Learning model for Behavioral Pattern Recognition to
          effectively arrange and distribute time for more than 15 user tasks. 10% more
          user productivity and time savings were achieved through suggested performance
          enhancements and intelligent time allocation using HTML, CSS, JavaScript, and ML."
        />

        {/* Card-3 */}
        <Card
          className="card-3"
          backClass="Back"
          title="Book Writing Project"
          description="Co-authoring a technical book on Machine Learning (ML) concepts and applications with 1+ one or more faculty members. 
 Using real-world examples in Python, I have written and organized more than 5 chapters on the basics of supervised learning techniques, such as linear regression. 
"
        />

        {/* Card-4 */}
        <Card
          className="card-4"
          backClass="Back-X"
          title="2019 Sales Analysis"
          description="Analysed customer behaviour and revenue trends to optimize sales and marketing with 50% incremental sales.
• Performed end-to-end sales data analysis using Python (Pandas, Matplotlib, Seaborn) on 140K+ transaction records.
• Cleaned and transformed multi-source CSV data, handling missing values, type conversion, and irrelevant fields.
• Extracted and engineered features like Month and City from raw purchase data for pattern identification.
• Built interactive visualizations (bar plots, histograms, and distribution charts) to highlight product, time, and location.
"
        />
      </div>
    </div>
  );
}
export { Card };
export default Cards;
