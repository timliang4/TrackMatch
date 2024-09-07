# TrackMatch

> Web App for discovering relationships between Spotify tracks.

## Website

Try it out: <a href="https://trackmatcher.netlify.app/" target="_blank">trackmatcher.netlify.app/</a>

## Overview

The `model`, `api`, and `docs` folders contain code I wrote earlier this summer. The `recommendation_model.ipynb` notebook in the `model` folder provides an in-depth explanation of how recommendation relationships between Spotify tracks were modeled using Graph Theory. The `api` folder contains code for the Flask web API, which inferfaces with a SQL database. This API was deployed using AWS Elastic Beanstalk and RDS. The `docs` folder contains an old static webpage this site used.

This week, I completely redid the frontend to a Vite and React app. I also interfaced the React app with my TrackMatch API, added dynamic sizing for mobile applications, and publicly deployed it on Netlify.

## Features I chose to include

- A search box with autosuggestions (React component) to easily find songs in the database
- Interface with TrackMatch API (made by me earlier this summer) to fetch recommendations
- Dynamic sizing for mobile applications
- Publicly deployed on Netlify

## Time Spent

I spent around 5 hours creating the Vite + React app and publicly deploying it.
