import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<{ access_token: string }> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export interface NowPlaying {
  isPlaying: boolean;
  title?: string;
  album?: string;
  artist?: string;
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status !== 200)
    return {
      isPlaying: false,
    };

  const nowPlaying = await response.json();

  return {
    isPlaying: nowPlaying.is_playing,
    title: nowPlaying.item.name,
    album: nowPlaying.item.album.name,
    artist: nowPlaying.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(', '),
  } as NowPlaying;
};
