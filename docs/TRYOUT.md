# Pπ Trying Out


[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![Community](https://img.shields.io/badge/Join-Community-blue)](https://discord.gg/9VVKhs6fSu) 

## Hardware

Pπ device is an IoT platform made up the following components.
- Power Unit 
    - 6V AA Battery. 
- Microcontroller Unit (MCU) 
    - [ESP32 CAM Module](https://amzn.to/2RjsVnm): similar to AI-Thinker ESP32 Camera Module. This is the main brain of the system.
    - [FTDI Module](https://amzn.to/3wWjQjD) to be able to program ESP32 chip.
- Sensing Unit
    - ESP32 CAM module contains a camera as input sensor.
- Accutator
    - [TB6612FNG H-Bridge controller](https://dronebotworkshop.com/tb6612fng-h-bridge/) is used to drive the motors when a plastic is detected.
- 

ESP32 to FTDI wiring is as follows:

![Roadmap](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/ftdi.jpg)

ESP32 to Motor Driver wiring is as follows:

![Roadmap](https://raw.githubusercontent.com/thiloshon/Personal-Plastic-Interceptor/main/images/driver.PNG)


### Getting started with Hardware

After wiring the device, start up Arduino IDE and upload the code in ```/edge-code``` directory:
1. app_httpd.cpp: For setting up a host point to controll IoT and send data.
2. esp32cam-robot.ion: To map ports of IoT with arduino code.

Once you have upload the code, press reset button in ESP32 to turn it on. 


## Software

To tryout the system we need to setup a Serverless web application and API with Code Engine.

1. First lets create [Cloudant](https://cloud.ibm.com/docs/Cloudant?topic=Cloudant-getting-started-with-cloudant) database.
    - Create a Cloudant instance - Select IAM as authentication method.
    - Launch Dashboard and Create Database, and do not select Partitioned under Partitioning.
    - Under Service credentials, Click Add to add the new credentials. We will be using it later. 

If you would like to test out software without setting up hardware, upload some variations of the following documents to the created Cloudant database. 

```
{
  "_id": "1d878dd8cfa978ef731b72defd750ac4",
  "_rev": "3-badbacd2852092d9b0de5465b3ddab4b",
  "interceptedAt": "2022-10-31T13:28:09.994Z",
  "type": "Plastic Bottle"
}
```

2. Then lets create serverless backend
    - On [Code Engine](https://cloud.ibm.com/codeengine/overview) create a new project.
    - Choose ```icr.io/solution-tutorials/tutorial-serverless-api-webapp:latest``` as Container Image.
    - In Runtime settings, Increase the Min number of instances to 1 and reduce Max number of instances to 2 
    - In the section Environment variables, add the Cloudant credentials from the prevoius step.

3. Now lets deploy the dashboard.
    - Create a [Object Storage](https://cloud.ibm.com/objectstorage/create) instance and create a bucket inside.
    - Scroll down to the Static website hosting and click Add+, add index.html as Index document
    - Click on Create Bucket
    - Open ```guestbook.js``` in ```/code-engine-backend``` directory and update the apiURL to the codeEngine URL from previous step.
    - Upload all the files in ```/code-engine-backend``` directory to the created bucket. 
    - In the Configuration tab, copy Public endpoint into a browser tab.
    - You should see the trash details updated in real time.


### How to Contribute

Thank you for your interest in contributing! Before you begin writing code, it is important that you share your intention to contribute with the team, based on the type of contribution:

1.  You want to propose a new feature and implement it.
    -   Post about your intended feature in an issue, and we shall discuss the design and implementation. Once we agree that the plan looks good, go ahead and implement it.
2.  You want to implement a feature or bug-fix for an outstanding issue.
    -   Search for your issue in the issue list
    -   Pick an issue and comment that you'd like to work on the feature or bug-fix.
    -   If you need more context on a particular issue, please ask and we shall provide.

Once you implement and test your feature or bug-fix, please submit a Pull Request.


## License

Pπ is licensed under the Apache Software License, Version 2.
Contributions are subject to the [Apache Software License, Version 2](http://www.apache.org/licenses/LICENSE-2.0.txt).