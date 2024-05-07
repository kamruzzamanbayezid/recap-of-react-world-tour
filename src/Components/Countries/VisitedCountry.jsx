
const VisitedCountry = ({ visitedCountry, handleRemoveVisitedCountry }) => {
      return (
            <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
            }}>
                  <li>{visitedCountry?.name?.common}</li>
                  <i title="Remove visited country" onClick={() => handleRemoveVisitedCountry(visitedCountry?.cca3)} style={{
                        background: "black",
                        color: "white",
                        borderRadius: "50px",
                        padding: "5px",
                        cursor: "pointer"
                  }} className="fa-solid fa-xmark"></i>
            </div>
      );
};

export default VisitedCountry;