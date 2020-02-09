# Ankkuri

<img  align="right" inline src="https://i.imgur.com/tgU6Tu2.png" width="50">

### A combined web and voice application

##### by Ashleigh Hyslop, Bianca Jemsten, Catherine Oxley and Isabel Lewis

---

#### Overview

Ankkuri was built during the [Junction Hackathon](https://www.hackjunction.com/) in Helsinki 2019. It's a combined web and voice application that generates a personalised morning routine for users. The user fills out a profile about themselves in the voice app which then powers the voice journey which can be accessed through an Alexa.

See the webapp hosted on Netlify here: [Ankkuri.life ](https://www.ankkuri.life/#/).

#### To use the application

- Use Chrome to ensure features work as intended
- The voice app is not yet publicly available as the skill isn't published

#### Technologies used

|             |                         |                   |
| ----------- | ----------------------- | ----------------- |
| React       | JavaScript(ECMAScript6) | Styled Components |
| Babel       | Webpack                 | Node.js           |
| DynamoDB    | Lambda                  | Cognito           |
| API Gateway | Alexa                   | Netlify           |

</br>

<img src="https://i.imgur.com/cbpUDvv.png" width="800"/>

#### Repository set up

This repository contains both the backend and the frontend for the apps. `ankkuri-ui` has the `React` frontend whereas `ankkuri-service` contains the AWS service.

#### Designs

The designs were made to appeal to a young audience as the mission of the challenge was to prevent mental health issues for young professionals and teenagers.
We therefore decided to go with a fun colour scheme and happy lighthearted photos. Throughout the app we also re-used the idea of waves as they symbolise tranquility but also sound waves, which ultimately ties it to the voice application.

<table>
  <th><img align="center" src="https://i.imgur.com/oupDT6b.png" height="300" width="300"/></th>
  <th><img align="center" src="https://i.imgur.com/Wf0lRRk.png" height="300" width="300"/></th>
</table>

#### Workflow

The team brainstormed ideas for the application and the voice journey together and then divided up the work into different areas. We did this to be as time efficient as possible as we only had about 36 hours to build the application.
Two developers focused on the frontend. They divided up components into atoms and molecules before they build out all the pages. They were also responsible for the designs.
One developer specialised on integrating the database with the API and the lambda functions for the voice application. Additionally, they also integrated AWS Cognito with both the voice app and the web app. Finally, one developer tested and wrote out the voice journey in `Node.js` using `Lambda` to power the Alexa skill.

#### Disclaimers

Due to the limited time frame, the application was built out as a prototype. There is no algorithm that puts together the voice journey and the site currently only displays a mock user we've created. However, the user information is coming from the `DynamoDB` databse. This means that changes in the databse actively change the voice journey. Signing up for the application in the Alexa skill does generate a user in `Cognito` and `DynamoDB` but due to the user in the web app being hard-coded a user could today only change their preferences directly in the databse.

## Team

|                 <a href="https://github.com/ashleighyslop" target="_blank">**Ashleigh Hyslop**</a>                  |                 <a href="https://github.com/biancajemsten" target="_blank">**Bianca Jemsten**</a>                  |                 <a href="https://github.com/Bibiiii" target="_blank">**Catherine Oxley**</a>                 |                 <a href="https://github.com/isabellewis" target="_blank">**Isabel Lewis**</a>                  |
| :-----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| [![Ashleigh Hyslop](https://avatars0.githubusercontent.com/u/31035314?s=200&v=4)](https://github.com/ashleighyslop) | [![Bianca Jemsten](https://avatars0.githubusercontent.com/u/37228766?s=200&v=4)](https://github.com/biancajemsten) | [![FVCproductions](https://avatars3.githubusercontent.com/u/15086661?s=400&v=4)](https://github.com/Bibiiii) | [![Isabel Lewis](https://avatars0.githubusercontent.com/u/21742394?s=200&v=4)](https://github.com/isabellewis) |
|              <a href="https://github.com/ashleighyslop" target="_blank">`github.com/ashleighyslop`</a>              |             <a href="https://github.com/biancajemsten" target="_blank">`github.com/biancajemsten`</a>              |                <a href="https://github.com/Bibiiii" target="_blank">`github.com/Bibiiii`</a>                 |             <a href="https://github.com/isabellewis" target="_blank">`github.com/isabellewis`</a>              |
