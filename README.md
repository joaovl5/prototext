<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Prototext</h3>

  <p align="center">
    A small, pseudonymous textboard/forum!
    <br />
    <!-- [ ] change links -->
    <br />
    <a href="https://github.com/joaovl5/prototext">View Demo</a>
    ·
    <a href="https://github.com/joaovl5/prototext/issues">Report Bug</a>
    ·
    <a href="https://github.com/joaovl5/prototext/issues">Request Feature</a>
  </p>
</div>



<!-- [ ] FIX TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Prototext Screen Shot][product-screenshot]](https://example.com)

Prototext is a minimalist textboard/forum with simple functions. You can create posts and reply to them with comments while maintaining *pseudonimity*

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<!-- [ ] FIX IMAGES / LINKS -->
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Pug][Pug.js]][Pug-url]
* [![MongoDB][Mongo.db]][Mongo-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

These are the instructions on how to setup your own Prototext server.

### Prerequisites


* Node.js with NPM
* MongoDB server

### Installation

<!-- [X] Fix url here -->
1. Clone the repo
   ```sh
   git clone https://github.com/joaovl5/prototext.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your MongoDB connection details in `init.js`
   ```js
   const CONNECTION_STRING = "mongodb://127.0.0.1:27017/database_name"
   ```
4. Run `node init.js`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## How it works

The forum consists of a series of posts, with comments each. Authors are pseudonymous, meaning they are each assigned an ID that lasts temporarily. Anyone can post and comment.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Subforums
- [ ] Optional account creation
- [ ] Moderation features
  - [ ] Automoderation (antispam, cooldown)
  - [ ] Manual moderation (through moderator accounts)
- [ ] Better front-end

<!-- [X] Change link here -->
Please go to [open issues](https://github.com/joaovl5/prototext/issues) for proposing features and reporting bugs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- [ ] LICENSE -->
## License

Distributed under the GPL License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<!-- [X] CHANGE LINK  -->
Project Link: [https://github.com/joaovl5/prototext](https://github.com/joaovl5/prototext)
Linkedin: 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/joaovl5/prototext.svg?style=for-the-badge
[contributors-url]: https://github.com/joaovl5/prototext/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/joaovl5/prototext.svg?style=for-the-badge
[forks-url]: https://github.com/joaovl5/prototext/network/members
[stars-shield]: https://img.shields.io/github/stars/joaovl5/prototext.svg?style=for-the-badge
[stars-url]: https://github.com/joaovl5/prototext/stargazers
[issues-shield]: https://img.shields.io/github/issues/joaovl5/prototext.svg?style=for-the-badge
[issues-url]: https://github.com/joaovl5/prototext/issues
[license-shield]: https://img.shields.io/github/license/joaovl5/prototext.svg?style=for-the-badge
[license-url]: https://github.com/joaovl5/prototext/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/joaovieiral/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=green
[Express.js]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: http://expressjs.com/
[Pug.js]: https://img.shields.io/badge/pug-000000?style=for-the-badge&logo=pug&logoColor=red
[Mongo.db]: https://img.shields.io/badge/mongodb-000000?style=for-the-badge&logo=mongodb&logoColor=green
[Mongo-url]: https://www.mongodb.com/
[Pug-url]: https://github.com/pugjs/pug
[Next-url]: https://nextjs.org/
[Node-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
