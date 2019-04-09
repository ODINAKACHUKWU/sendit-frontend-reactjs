export default {
  updateData: (parcelData) => {
    localStorage.setItem("Small", 1000);
    localStorage.setItem("Medium", 1500);
    localStorage.setItem("Large", 2000);

    if (parcelData) {
      const {
        firstName,
        lastName,
        first,
        last,
        item,
        quantity,
        size,
        senderStreet,
        senderCity,
        senderState,
        street,
        city,
        state,
        date,
        time,
        status,
      } = parcelData;

      const rate = localStorage.getItem(`${size}`);
      const unitRate = parseInt(rate, 10);
      const actualQty = parseInt(quantity, 10);
      const price = unitRate * actualQty;

      return {
        sender: `${firstName} ${lastName}`,
        receiver: `${first} ${last}`,
        item,
        pickupLocation: `${senderStreet}, ${senderCity}, ${senderState}`,
        destination: `${street}, ${city}, ${state}`,
        schedule: `${date}; ${time}`,
        presentLocation: `${senderStreet}, ${senderCity}, ${senderState}`,
        price,
        status,
      };
    }
    return "No parcel data is provided";
  },

  updateDestination: (destination) => {
    if (destination) {
      const { street, city, state } = destination;
      return {
        destination: `${street}, ${city}, ${state}`,
      };
    }
    return "No destination is provided";
  },
};
