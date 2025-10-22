import React from "react";

const Map = () => {
  return (
    <div className="w-full rounded-4xl">
      <iframe
        className="w-full rounded-t-4xl"
        width="100%"
        height="450"
        //style="border:0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD84BvnJGsGjKWLXVUHYJ1DidTvafy7cAw&q=22+Collochan+Drive,+Barnhill,+Dumfries,+DG2+9FH"
      ></iframe>
    </div>
  );
};

export default Map;
