<div id="top"></div>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="src/assets/images/Burger.svg" alt="Logo" width="80" height="80">

  <h3 align="center">Kill Your Hunger</h3>

  <p align="center">
    An App to help you decide for your next meal in three easy steps. All you need is one main ingredient.
    <br />
    <a href="https://github.com/vbit27/recipe-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kill-your-hunger.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/vbit27/recipe-app/issues">Report Bug</a>
    </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## About The Project

![Recipe App Screen Shot](https://user-images.githubusercontent.com/75995237/151698679-ab5d18a2-5ba9-4cd0-b538-4b34d3d71516.gif)

This App takes advantage of The Edamam API to show various recipes based on the main ingredient of your choice. To refine your search even more you can filter based on your diet and/or the type of meal.

### Built With

- [Edamam API](https://www.edamam.com/)
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- Local Storage

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Get a free API key at [Edamam API](https://www.edamam.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vbit27/recipe-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create an `.env` file inside the root folder
4. Enter your API in `.env`
   ```js
   const REACT_APP_API_KEY = 'ENTER YOUR API KEY';
   const REACT_APP_API_ID = 'ENTER YOUR API ID';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Future Work

- Clear local storage when clicking logo
- Load more results

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Vasil Bituni - [Linkedin](www.linkedin.com/in/vasilis-bitounis) - vasil.bituni@gmail.com

Project Link: [https://github.com/vbit27/recipe-app](https://github.com/vbit27/recipe-app)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [clsx](https://www.npmjs.com/package/clsx)
- [Background icons](https://www.figma.com/@furquan101)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/vbit27/recipe-app/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/vasilis-bitounis
