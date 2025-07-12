import { FaMale, FaFemale, FaBook, FaPrayingHands, FaBirthdayCake, FaBlind } from "react-icons/fa";
import React from "react";








const icons = [
    <FaMale size={64} color="#2563eb" title="Male" />,
    <FaBook size={64} color="#10b981" title="Education" />,
    <FaFemale size={64} color="#f43f5e" title="Female" />,
    <FaPrayingHands size={64} color="#f59e42" title="Religion" />,
    <FaBirthdayCake size={64} color="#a855f7" title="Age" />,
    <FaBlind size={64} color="#64748b" title="Elderly" />,
];

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    maxWidth: '640px',
    margin: '1pc auto',
};

const responsiveGridStyle = `
@media (max-width: 900px) {
  .demographic-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
@media (max-width: 600px) {
  .demographic-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

const Art: React.FC = () => {
    return (
        <>
            <style>{responsiveGridStyle}</style>
            <div className="demographic-grid" style={gridStyle}>
                {icons.map((icon, idx) => (
                    <div
                        key={idx}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#f3f4f6',
                            borderRadius: '8px',
                            padding: '24px 0',
                            minHeight: '120px',
                            transition: 'background 0.2s, box-shadow 0.2s',
                            cursor: 'pointer',
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.background = '#e0e7ef';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.12)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.background = '#f3f4f6';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {icon}
                    </div>
                ))}
            </div>
        </>
    );
};

function Demographic() {
    return (
        <div style={{ justifyContent: "center", alignItems: "center", padding: "48px 24px" }}>
            <h1
                style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                Demographics
            </h1>

            <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl w-full">
                {/* Text Section */}
                <div className="w-full text-left mb-6 sm:mb-8">
                    <p
                        style={{
                            fontSize: '1rem',
                            fontFamily: 'Roboto, sans-serif',
                            marginBottom: '2rem',
                            marginLeft:"16pc",
                            marginRight:"10pc",
                            textAlign: 'justify',
                        }}
                    >
                        This section provides an overview of the demographic characteristics, including population, age distribution, and other relevant statistics.
                    </p>

<style>
{`
.button-demographic {
  font-size: 1rem;
  margin: 0pc 0pc 0pc 40pc;

}
@media (max-width: 1300px) {
  .button-demographic {

  }
}
@media (max-width: 900px) {
  .button-demographic {
  margin: 0pc 18pc 0pc 20pc;
  
  }
}
@media (max-width: 600px) {
  .button-demographic {
    margin-left: 0 !important;
    width: 100%;
    display: block;
    text-align: center;
  }
}
`}
</style>
                </div>
                <Art />
            </div>
        </div>
    );
}

export default Demographic;
