import historyImage from "../assets/Lamin.jpeg";
import GlareHover from "../hooks/GlareHover";
 

function History() {






  return (
    <div

    >


      <h1 className="font-bold text-3xl font-sans mt-16"
    
      >
        History
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          maxWidth: "672px",
          width: "100%",
          justifyContent: "center",
          margin: '15pc 0pc 0pc 29pc',
        }}
      >
        {/* Text & Image Section */}
        <div 
        style={{ height: '600px', position: 'relative' }}
        className="history-section">


            <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
    
  >
          <img
            src={historyImage}
            alt="History"
            className="history-image"
            style={{
              // width: "30pc",
              // height: "auto",
              // margin: "0 -30pc 0pc 0pc",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              maxWidth: "100%",
            }}
          />
          </GlareHover>
        </div>

        {/* Button Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "16px",
          }}
        >




        </div>
      </div>
      {/* Responsive Styles */}
      <style>
        {`
          .history-section {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .history-image {
            width: 47pc;
            margin: 0 pc 0 0;
            border-radius: 1rem;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            max-width: 100%;
            height: auto;
            transition: all 0.3s;
          }
          .history-description {
            margin: -17pc 29pc 4pc -13pc;
            font-size: 1rem;
            line-height: 1.6;
            text-align: justify;
            max-width: 100%;
            width: 54%;
            transition: all 0.3s;
          }
          @media (max-width: 1300px) {
            .history-image {
              width: 70%;
              margin: 6px 3px 2pc 26pc;
            }
            .history-description {
              margin: -20pc 33pc 3pc 0;
              width: 49%;
              font-size: 0.95rem;
            }
          }
          @media (max-width: 900px) {
            .history-image {
              width: 60%;
              margin: -2pc 0 7pc 0;
            }
            .history-description {
              margin: -4pc 1pc 2pc 0;
              font-size: 0.95rem;
            }
            .history-button {
              width: 100% !important;
              font-size: 0.95rem;
              padding: 10px 0;
              margin: 0 auto !important;
            }
          }
          @media (max-width: 600px) {
            .history-section {
              flex-direction: column;
              align-items: center;
            }
            .history-image {
              width: 60%;
              margin: 0 0 1pc 0;
              border-radius: 0.5rem;
            }
            .history-description {
              margin: 1pc 0 1pc 0;
              font-size: 0.9rem;
              text-align: left;
            }
            .history-button {
              width: 100% !important;
              font-size: 0.9rem;
              padding: 10px 0;
              margin: 0 auto !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default History;



