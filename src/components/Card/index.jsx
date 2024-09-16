import "./index.css"

function Card(props) {
    const {data} = props;
    return(
        <>
        <div className="cards">
            <div className="Card">
                <img src={data.image} alt="" />
                <div className="card-p">
                    <h2 className="Isim-familya">{data.firstName } { data.lastName}</h2>
                    <h2 className="telfon">Telefon: {data.phone}</h2>
                    <h2 className="Adres">Adres: {data.address.region}</h2>
                    <h2 className="card">Card: {data.cars[1]}</h2>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;