# TrackMatch

> Web App for discovering relationships between Spotify tracks.

Try it out: [Website](https://timliang4.github.io/TrackMatch/)

## Code

The ```recommendation_model.ipynb``` notebook in the ```model``` folder provides an in-depth explanation of how the data was loaded and how recommendation relationships between Spotify tracks were modeled using Graph Theory.

The ```api``` folder contains code for the Flask web API, which inferfaces with a SQL database. This API was deployed using AWS Elastic Beanstalk and RDS.

Finally, the ```docs``` folder includes code for a static webpage that allows users to search for tracks and retrieve recommendations.
