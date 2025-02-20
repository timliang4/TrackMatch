# TrackMatch

> Recommendation Algorithm for Spotify tracks.

## Code

The ```recommendation_model.ipynb``` notebook in the ```model``` folder provides an in-depth explanation of how the data was loaded and how recommendation relationships between Spotify tracks were modeled using Graph Theory.

The ```api``` folder contains code for the Flask web API, which inferfaces with a SQL database and RustworkX graph to retrieve song recommendations. This API was deployed using AWS Elastic Beanstalk and RDS, but is no longer deployed due to costs.

The ```public``` and ```src``` folders contain code for a React web app that allows users to search for songs in the database and find recommendations. It is no longer deployed because the API costs money to run. 

Feel free to check out the code!
