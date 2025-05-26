<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
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


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mission Ready lvl5 Refactor Collective Mission 2</h3>

  <p align="center">
    project_description
  </p>
</div>



<!-- TABLE OF CONTENTS -->
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

A live example is available at https://mr-lvl5-m2-refactor-collective.sethsamuel.online. 
note this is setup to take api requests only and is not available to view from the browser. 
Please see below for Curl commands to query api endpoints.

Were were given a simple api to make and asked to use test driven development to crate the functions. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
* [![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## division of work
Seth: API 4 \
Rachel:API 2 \
Kent: API 3 \
Val: API 1


<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* node
  
  available to be downloaded here: 
  https://nodejs.org/en/download 

### Installation


1. Clone the repo
   ```sh
   git clone --depth 1 https://github.com/SethSamuelCode/MissionReadyLvl5-Refactor_Collective-mission2.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. copy the .env example
   ```sh
   cp .env.example .env
   ```

4. set the port in the .env file to a different port if required  
   ```sh
   SERVER_LISTEN_PORT=4000
   ```
5. start the a dev server  
    ```sh
    node run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Deploy with docker 

1. Clone the repo
   ```sh
   git clone --depth 1 https://github.com/SethSamuelCode/MissionReadyLvl5-Refactor_Collective-mission2.git
   ```
2. build the container
   ```sh
   bash build $imageName
   ```
   eg
   ```sh
   bash build mr_lvl5_m2_docker
   ```
3. start the container
   ```sh
   docker run --rm -d -p 4000:4000 mr_lvl5_m2_docker
   ```
4. stop the container
   ```sh
   docker stop mr_lvl5_m2_docker
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

### curl 
```sh
curl --location 'http://localhost:4000/api/api4' \
--header 'Content-Type: application/json' \
--data '{ "age": 60, "experience": 51 }'
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### endpoints 

### API1
### API2
### API3
### API4

#### Input
takes a json object with the fields `age` and `experience`. eg.
```js
{age:24,experience:4}
```
Age and experience both accept Integers only and is the age of a person and the number of years the person has been driving. 

#### Output
If successful it will return a JSON object with the field `discount_rate` otherwise it will return an json object containing `{ error: "there is an error" }`

example successful return 
```js
{ discount_rate: 10 }
```
#### Complete example 
```sh
$ curl --location 'https://mr-lvl5-m2-refactor-collective.sethsamuel.online/api/api4' \
--header 'Content-Type: application/json' \
--data '{ "age": 60, "experience": 51 }'


{"discount_rate":20}
``` 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing


### Top contributors:

<a href="https://github.com/SethSamuelCode/MissionReadyLvl5-Refactor_Collective-mission2/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SethSamuelCode/MissionReadyLvl5-Refactor_Collective-mission2" />
</a>

Made with [contrib.rocks](https://contrib.rocks).



<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Seth Samuel - seths@missionreadyhq.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

