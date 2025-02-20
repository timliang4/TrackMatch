# TrackMatch

> Web App for discovering relationships between Spotify tracks.

## Code

The ```recommendation_model.ipynb``` notebook in the ```model``` folder provides an in-depth explanation of how the data was loaded and how recommendation relationships between Spotify tracks were modeled using Graph Theory.

The ```api``` folder contains code for the Flask web API, which inferfaces with a SQL database and NetworkX graph to retrieve song recommendations. This API was deployed using AWS Elastic Beanstalk and RDS, but is no longer deployed due to costs.

The `````` folder contains code for a React web app that allows users to search for songs in the database and find recommendations. 

## Support

Encounter an issue?

If you find a bug or have a feature request, please file an issue or email me at timliang4@gmail.com. Or, if you'd like to contribute, feel free to submit a pull request.
