const apiKey = 'sfZRhlbkmKHtbjGjrwBN6DBiu6UNUp8L-_DgxZUuNbay6wAVV1ky0l_6B379iYTdPLq0ozt5kKNec_utGHDj4FzC3A33JIvy9qCnMb7_GIF2OL-2pNjxn4eWufXoWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/searchterm=${term}&location=${location}&sort_by=$
      {sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
