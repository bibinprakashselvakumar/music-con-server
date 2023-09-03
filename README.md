# Spotify to Apple Music Link Converter

Convert Spotify song links to Apple Music links with ease using this simple Express.js application. Say goodbye to manual searching and start enjoying your music seamlessly on Apple Music!

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Contact](#contact)

## About

This Express.js application provides a straightforward way to convert Spotify song links to their equivalent Apple Music links. It utilizes the Spotify API to fetch song details and the Apple Music API to find the closest match.

## Features

- Convert Spotify song links to Apple Music links.
- Retrieve song details like track name, artist, and album.
- Automatically search for the best match on Apple Music.
- Lightweight and easy to use.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Spotify API credentials (Client ID and Client Secret).
- Basic knowledge of Express.js.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/bibinprakashselvakumar/music-con-server.git
   ```

2. Navigate to the project directory:

   ```shell
   cd music-con-server
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

## Usage

To run the application, execute the following command:

```shell
npm start
```

The application will start on the specified port (default is 3000).

## API Endpoints

- **GET /get-song**
  - Description: Converts a Spotify song link to an Apple Music link.
  - Query Parameters:
    - `url` (required): Spotify song link.
  - Response:
    - If a match is found on Apple Music, it returns the Apple Music equivalent with details like track name, artist, album, and Apple Music link.
    - If no match is found, it returns "No Music Found."

## Technologies Used

- [Express.js](https://expressjs.com/)
- [axios](https://axios-http.com/)

## Contributing

Contributions are welcome! Feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [Bibin Prakash Rajadurai Selvakumar](https://github.com/bibinprakashselvakumar)

## Contact

Have any questions or suggestions? Feel free to reach out:

- Email: bibin.dev2000@gmail.com
- Twitter: [@prakashbibin](https://twitter.com/prakashbibin)
