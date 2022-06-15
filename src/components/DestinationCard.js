import loc_icon from "../assets/loc-icon.svg";
function DestinationCard(props) {
  return (
    <div className="destn-card">
      <img
        src={props.img}
        alt="Foto del destino vacacional"
        className="destn-card__photo"
      />
      <div className="destn-card__info">
        <div className="destn-card__loc">
          <img src={loc_icon} alt="icono" className="loc-icon" />
          <h3 className="destn-card__country">{props.location}</h3>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gmaps"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="destn-card__title">{props.title}</h2>
        <h3 className="destn-card__dates">
          {props.startDate} - {props.endDate}
        </h3>
        <p className="destn-card__description">{props.description}</p>
      </div>
    </div>
  );
}
export default DestinationCard;
