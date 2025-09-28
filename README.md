# Spotify Clone Music App

A real-time music streaming web app with playlists, authentication, comments, and a library of 1000 songs.

## Structure

- `client/` – React frontend (UI, player, library)
- `server/` – Express backend (API, auth, song management)
- `songs/` – Storage for song files (or use cloud)
- `seed/` – Scripts to populate your database

## Quick Start

### Backend

1. `cd server && npm install`
2. Seed songs: `node ../seed/seedSongs.js`
3. Start API: `npm start`

### Frontend

1. `cd client && npm install`
2. Start app: `npm start`
3. Visit `http://localhost:3000`

## Features

- Real-time playback
- Song library (1000+ songs)
- Awesome modern design
- User auth, playlists, comments

## Tech

- React, TailwindCSS
- Node.js, Express, MongoDB
