function EmptySlot(props) {
    var image = require("./molehill.png");

    return (
        <div>
            <img src={image} alt={image} />
        </div>
    );
}

export default EmptySlot;
