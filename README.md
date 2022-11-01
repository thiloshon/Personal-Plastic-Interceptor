# Pπ - Personal Plastic Interceptor

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/solutions/projects/get-started/) [![Test Bed](https://img.shields.io/badge/View-Website-blue)](https://ppi-storage.s3-web.us-east.cloud-object-storage.appdomain.cloud)


_Global Challenge Problem Prompt: Reduce volume of and demand for materials that create the biggest
waste footprint, and encourage reuse/recycle opportunities_

## Short description

### What's the problem?

Plastic waste makes up over 80% of all marine debris in the ocean, from the 14 million tons of plastic ending up in the ocean every year. This threatens ocean biodiversity, the health of marine species, food safety, human health and more. Several large organizations are leading initiatives to clean up ocean, but projects to stop plastic from ever reaching the ocean has largely been unsuccessful.

### How can technology help?

Advanced autonomous cyber physical systems can greatly help tackle plastic pollution and prevent plastics ever reaching oceans. There have been several such projects with most notable being The Ocean Cleanup Project. But these are high-cost large-scale projects that requires governmental endoresements. Simple solutions focused on consumer is imperative. 

### The idea

Pπ is a hardware-software solution with a computer on the edge that monitors waterflows in sewage and drainage canals. It is capable of detecting and automatically intercepting plastic debris in the water. Powered by Artificial Intelligence, it can differentiate plastic debris from organic waste and intercepts only the plastics. This low cost device is very impactful, making it an affordable solution for daily consumers.

## Demo videos

Pitch Video:

[![Watch the pitch video](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/thumb.PNG)](https://youtu.be/WuuJH8ljmIs)

Product Demo (Shot for the Accelerator):

[![Watch the product video](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/thumb2.PNG)](https://youtu.be/BcF8-4348Gs)


## The architecture

![Video transcription/translation app](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/architecturedark.png)

1. DeepTrash dataset is used to build a deep learning model that can differentiate trash in water.
2. IBM Watson Studio is used to train the Deep Learning model and store the weights for online prediction. (For offline predition, model will be offloaded to edge IoT device)
3. IoT edge device is setup by user in waterways with camera facing inbound flow. When a debris is detected it is intercepted by the device and returns to initial state.
4. Data pertaining to the interception is sent to the IBM Cloudant database for analytics.
5. IBM Cloud Storage is used to store the backend code of the Pπ dashboard.
6. IBM Code Engine serves the dashboard on web and binds Cloudant data to the webpage dynamically. It is used to scale the application when demand increases. 
7. IBM Weather Company is used to retrieve latest weather updates and alert user. (Currently being developed)
8. Users can view the data online and get alerts. (Mobile app is being developed for ease of use.)

## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Features
1. Differentiate Plastic, Tin and Polythene debris in waterways.
2. Intercept plastic automatically without user intervention.
3. Real time update with web Dashboard.
4. Works online and Off the grid.
5. Runs without altering/harming the environment. Simply place the device on waterway and remove when not needed.
6. Affordable and ease to use.

## Project roadmap

So far we have completed:
1. User study and requirement analysis.
2. Design development and review.
3. Prototype Developement and beta testing in field.
4. Cloud insfrastructure developement
5. Web dashboard development.
6. UX study and documentation.

Proposed schedule on next steps after Call for Code 2021 submission:
1. Study Legal and Policy restrictions for test regions (Los Angeles and Colombo).
2. Convert web dashboard to mobile native application.
3. Implement trash forecast ML model to alert user of excessive trash inbound.
4. Build better product casing (3D print?) and beta test within a closed users of 10. Gather review and recommendation.
5. Press Release and Introduction to the project. Open website, twitter and social media pages for better visibility.
6. Second iteration of model developement based on review and redesign cloud architecture with more secured and premium tiers. 
7. Finalize product casing and study mass development requirements.
8. Outreach to investors and stake holders to gather funds.
9. Perform market analysis of open source products.
10. Release the first version to public with open access mobile app. 


![Roadmap](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/roadmap.PNG)

## Getting started

[Complete guide is available here](./docs/TRYOUT.md)

## Live demo

You can find a running system at [IBM hosted site](https://ppi-storage.s3-web.us-east.cloud-object-storage.appdomain.cloud). Please note it is built mobile-first, thus for best experience view on mobile. Also note the data is published from the Edge Device and viewed in this dashboard.

Dashboard: 

<img src="https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/dashboard.jpeg" style="width:400px"/>



## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

<a >
  <img src="https://i1.rgstatic.net/ii/profile.image/634942736330758-1528393553978_Q512/Thiloshon-Nagarajah.jpg" style="width:60px"/>
</a>

- **Thiloshon Nagarajah** - _University of Southern California_ - From Sri Lanka

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
