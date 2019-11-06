var searchYouTube = ({ key, query, max = 5 }, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: key,
    q: query,
    part: 'snippet',
    maxResults: max,
    videoEmbeddable: true,
    type: 'video'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({ responseJSON }) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });

};

export default searchYouTube;
