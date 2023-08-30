const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();
const cors = require("cors");

const app = express();

// Spotify API credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Allow requests from a specific origin
const allowedOrigin = "https://spotify-apple-music-gamma.vercel.app";
const corsOptions = {
  origin: allowedOrigin,
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Spotify API authentication options
const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  method: "POST",
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${CLIENT_ID}:${CLIENT_SECRET}`
    ).toString("base64")}`,
  },
  data: "grant_type=client_credentials",
};

router.get("/get-song", async (req, res) => {
  try {
    const requestUrl = req.query.url;
    const trackId = extractTrackIdFromUrl(requestUrl);

    const authResponse = await axios(authOptions);
    const token = authResponse.data.access_token;

    const trackOptions = {
      url: `https://api.spotify.com/v1/tracks/${trackId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const trackResponse = await axios(trackOptions);
    const songData = {
      trackName: trackResponse.data.name,
      trackArtist: trackResponse.data.artists[0].name,
      trackAlbum: trackResponse.data.album.name,
    };

    const appleMusicQuery = `${songData.trackName} ${songData.trackArtist} ${songData.trackAlbum}`;
    const appleMusicSearchUrl = `https://itunes.apple.com/search?country=US&media=music&entity=song&limit=5&term=${encodeURIComponent(
      appleMusicQuery
    )}`;

    const appleMusicResponse = await axios.get(appleMusicSearchUrl);
    const appleMusicResults = appleMusicResponse.data.results;

    const bestMatch = appleMusicResults.find(
      (appleMusicSong) =>
        appleMusicSong.trackName.toLowerCase() ===
          songData.trackName.toLowerCase() &&
        appleMusicSong.artistName.toLowerCase() ===
          songData.trackArtist.toLowerCase()
    );

    if (bestMatch) {
      const appleMusicEquivalent = {
        trackName: bestMatch.trackName,
        trackArtist: bestMatch.artistName,
        trackAlbum: bestMatch.collectionName,
        appleMusicLink: bestMatch.trackViewUrl,
      };
      res.send(appleMusicEquivalent);
    } else {
      console.log("No Music Found");
      res.send("No Music Found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500);
  }
});

function extractTrackIdFromUrl(url) {
  const match = url.match(/track\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}

module.exports = router;
