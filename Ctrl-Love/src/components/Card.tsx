import "./Card.css"

interface CardProp {
    logo: string
    title: string
    description: string
}

const Card = ({
    logo,
    title,
    description
}: CardProp) => {
    return (
        <div className="card-component">
            <img style={{mixBlendMode: "multiply"}} src={logo} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;