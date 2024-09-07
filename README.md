# TrackMatch

> Web App for discovering relationships between Spotify tracks.

## Website

Try it out: <a href="https://trackmatcher.netlify.app/" target="_blank">trackmatcher.netlify.app/</a>

## Code

The `recommendation_model.ipynb` notebook in the `model` folder provides an in-depth explanation of how the data was loaded and how recommendation relationships between Spotify tracks were modeled using Graph Theory.

The `api` folder contains code for the Flask web API, which inferfaces with a SQL database. This API was deployed using AWS Elastic Beanstalk and RDS.

The `docs` folder contains an old static webpage this site used. It is now deployed on Netlify as a Vite and React app.

## Features I chose to include

- A search box with autosuggestions (React component) to easily find songs in the database
- Interface with TrackMatch API (made by me earlier this summer) to fetch recommendations
- Dynamic sizing for mobile applications
- Publicly deployed on Netlify

## Time Spent

I spent around 5 hours creating the Vite + React app and publicly deploying it.
