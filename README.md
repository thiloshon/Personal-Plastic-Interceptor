# Pπ - Personal Plastic Interceptor

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/solutions/projects/get-started/) [![Test Bed](https://img.shields.io/badge/View-Website-blue)](https://ppi-storage.s3-web.us-east.cloud-object-storage.appdomain.cloud)

Developed as part of [Call for Code](https://developer.ibm.com/callforcode/). Join the Call for Code with The Linux Foundation:  [join the Call for Code community](https://developer.ibm.com/callforcode/solutions/projects/get-started/).

> If you're new to open source, please consider taking the [free "Introduction to Open Source" class](https://cognitiveclass.ai/courses/introduction-to-open-source).
> 
> [![Open Source Foundations](images/open-source-foundations.png)](https://cognitiveclass.ai/courses/introduction-to-open-source) 

## Contents

- [Submission or project name](#submission-or-project-name)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

Plastic waste makes up over 80% of all marine debris in the ocean, from the 14 million tons of plastic ending up in the ocean every year. This threatens ocean biodiversity, the health of marine species, food safety, human health and more. Several large organizations are leading initiatives to clean up ocean, but projects to stop plastic from ever reaching the ocean has largely been unsuccessful.

### How can technology help?

Advanced autonomous cyber physical systems can greatly help tackle plastic pollution and prevent plastics ever reaching oceans. There have been several such projects with most notable being The Ocean Cleanup Project. But these are high-cost large-scale projects that requires governmental endoresements. Simple solutions focused on consumer is imperative. 

### The idea

Pπ is a computer on the edge that monitors waterflows in sewage and drainage canals. It is capable of detecting and automatically intercepting plastic debris in the water. Powered by Artificial Intelligence, it can differentiate plastic debris from organic waste and intercepts only the plastics. This low cost device is very impactful, making it an affordable solution for daily consumers.

## Demo videos

Pitch Video:

[![Watch the pitch video](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/tree/main/images/thumb.png)](https://youtu.be/WuuJH8ljmIs)

Product Demo (Shot for the Accelerator):

[![Watch the product video](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/tree/main/images/thumb2.png)](https://youtu.be/BcF8-4348Gs)


## The architecture

![Video transcription/translation app](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/tree/main/images/architecturedark.png)

1. The user navigates to the site and uploads a video file.
2. Watson Speech to Text processes the audio and extracts the text.
3. Watson Translation (optionally) can translate the text to the desired language.
4. The app stores the translated text as a document within Object Storage.

## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap

The project currently does the following things.

- Feature 1
- Feature 2
- Feature 3

It's in a free tier IBM Cloud Kubernetes cluster. In the future we plan to run on Red Hat OpenShift, for example.

See below for our proposed schedule on next steps after Call for Code 2021 submission.

![Roadmap](./images/roadmap.jpg)

## Getting started

In this section you add the instructions to run your project on your local machine for development and testing purposes. You can also add instructions on how to deploy the project in production.

- [sample-react-app](./sample-react-app/)
- [sample-angular-app](./sample-angular-app/)
- [Explore other projects](https://github.com/upkarlidder/ibmhacks)

## Live demo

You can find a running system at [callforcode.mybluemix.net](http://callforcode.mybluemix.net/). Please note it is built mobile-first, thus might not look great on web. Also note the data is published from the Edge Device and viewed in this dashboard.

## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

<a href="https://github.com/Call-for-Code/Project-Sample/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Call-for-Code/Project-Sample" />
</a>

- **Thiloshon Nagarajah** - _University of Southern California_ - From Sri Lanka

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
