const Alexa = require("ask-sdk-core");
const { getUser } = require("./helpers/getUserInfo");

const { DynamoDbPersistenceAdapter } = require('ask-sdk-dynamodb-persistence-adapter');
const persistenceAdapter = new DynamoDbPersistenceAdapter({
  tableName: 'MorningRoutineStates',
  createTable: true
})
/* INTENT HANDLERS */

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  async handle(handlerInput) {
    const accessToken =
      handlerInput.requestEnvelope.context.System.user.accessToken;
    let getPersistedAttributes = await handlerInput.attributesManager.getPersistentAttributes();
    if (accessToken && Object.keys(getPersistedAttributes).length == 0) {
      const user = await getUser(accessToken);
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      sessionAttributes.user = user;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      const names = user.name.split(' ');
      speechText = `Good morning ${names[0]}! It's day number ${user.streak}, only ${user.goal - user.streak} days left to reach your goal! Are you up yet or still in bed?`

    } else if (accessToken && getPersistedAttributes.action == 'goStretch') {
      const user = await getUser(accessToken);
      speechText = `Welcome back! I hope you feel better after stretching. Now ${user.preferences.drink}, or a shower?`
      getPersistedAttributes = {
        'action': 'goShower'
      };
      handlerInput.attributesManager.setPersistentAttributes(getPersistedAttributes);
      await handlerInput.attributesManager.savePersistentAttributes();
    } else if (accessToken && getPersistedAttributes.action == 'goShower') {
      speechText = 'Almost finished. Remember you need to take your lunch to work with you. Have you packed it in your bag?'
      getPersistedAttributes = {};
      handlerInput.attributesManager.setPersistentAttributes(getPersistedAttributes);
      await handlerInput.attributesManager.savePersistentAttributes();
    }
    else {
      speechText = `Hello, please sign-in to Ankkuri on your device to activate your customised morning routine.`;
    }
    return handlerInput.responseBuilder
      .speak(
        speechText
      )
      .reprompt('are you still in bed?')
      .getResponse();
  }
};


const NotOutOfBed = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "NotOutOfBed"
    );
  },

  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    // sessionAttributes.user = user;
    // handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    if (sessionAttributes.user.routine.socialMedia == false) {
      speechText = 'You need to get up soon. Are you scrolling or is your phone aside?'
    } else if (sessionAttributes.user.routine.stretch == true) {
      speechText = 'You need to get up soon. Shall we do some stretching or are you ready to shower?'
    } else {
      speechText = 'You need to get up soon.'
    }
    return handlerInput.responseBuilder
      .speak(
        speechText
      )
      .reprompt("Come on, are you scrolling?")
      .getResponse();
  }

};

const YesScrolling = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "YesScrolling"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    if (sessionAttributes.user.routine.stretch == true && sessionAttributes.user.routine.meditate == true) {
      speechText = "Ok, let's put the phone down and start with something easy. Shall we do some stretching and meditation or are you ready to shower?";
    } else if (sessionAttributes.user.routine.stretch == true && sessionAttributes.user.routine.meditate == false) {
      speechText = "Ok, let's put the phone down and start with something easy. Shall we do some stretching or are you ready to shower?"
    } else {
      speechText = "then I cannot help you"
    }
    return handlerInput.responseBuilder
      .speak(
        speechText
      )
      .reprompt("Strech or shower?")
      .getResponse();
  }
};

const YesStretch = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "YesStretch"
    );
  },
  async handle(handlerInput) {
    let getPersistedAttributes = await handlerInput.attributesManager.getPersistentAttributes();
    speechText = "Ok do some stretches. When you're done just say 'Alexa, open Ankkuri routine'";
    getPersistedAttributes = {
      'action': 'goStretch'
    };
    handlerInput.attributesManager.setPersistentAttributes(getPersistedAttributes);
    await handlerInput.attributesManager.savePersistentAttributes();
    return handlerInput.responseBuilder
      .speak(
        speechText
      )
      .getResponse();
  }
};

const HaveAShower = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "HaveAShower"
    );
  },
  async handle(handlerInput) {
    speechText = "Lovely, enjoy your shower and let me know when you're dressed. Just say 'Alexa, open Ankkuri routine'";
    return handlerInput.responseBuilder
      .speak(
        speechText
      )
      .getResponse();
  }
};

const LunchPacked = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "AMAZON.YesIntent"
    );
  },
  async handle(handlerInput) {
    speechText = "Perfect! You've completed your morning routine. Have a great day and don't forget to take your keys!";
    return handlerInput.responseBuilder
      .speak(
        speechText
      )
      .getResponse();
  }
}

const FallbackHandler = {
  // 2018-Nov-21: AMAZON.FallackIntent is currently available in en-* and de-DE locales.
  //              This handler will not be triggered except in those locales, so it can be
  //              safely deployed here in the code for any locale.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "AMAZON.FallbackIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(FALLBACK_MESSAGE)
      .reprompt(FALLBACK_REPROMPT)
      .getResponse();
  }
};

const InProgressRecommendationIntent = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return (
      request.type === "IntentRequest" &&
      request.intent.name === "RecommendationIntent" &&
      request.dialogState !== "COMPLETED"
    );
  },
  handle(handlerInput) {
    const currentIntent = handlerInput.requestEnvelope.request.intent;
    let prompt = "";

    for (const slotName of Object.keys(
      handlerInput.requestEnvelope.request.intent.slots
    )) {
      const currentSlot = currentIntent.slots[slotName];
      if (
        currentSlot.confirmationStatus !== "CONFIRMED" &&
        currentSlot.resolutions &&
        currentSlot.resolutions.resolutionsPerAuthority[0]
      ) {
        if (
          currentSlot.resolutions.resolutionsPerAuthority[0].status.code ===
          "ER_SUCCESS_MATCH"
        ) {
          if (
            currentSlot.resolutions.resolutionsPerAuthority[0].values.length > 1
          ) {
            prompt = "Which would you like";
            const size =
              currentSlot.resolutions.resolutionsPerAuthority[0].values.length;

            currentSlot.resolutions.resolutionsPerAuthority[0].values.forEach(
              (element, index) => {
                prompt += ` ${index === size - 1 ? " or" : " "} ${
                  element.value.name
                  }`;
              }
            );

            prompt += "?";

            return handlerInput.responseBuilder
              .speak(prompt)
              .reprompt(prompt)
              .addElicitSlotDirective(currentSlot.name)
              .getResponse();
          }
        } else if (
          currentSlot.resolutions.resolutionsPerAuthority[0].status.code ===
          "ER_SUCCESS_NO_MATCH"
        ) {
          if (requiredSlots.indexOf(currentSlot.name) > -1) {
            prompt = `What ${currentSlot.name} are you looking for`;

            return handlerInput.responseBuilder
              .speak(prompt)
              .reprompt(prompt)
              .addElicitSlotDirective(currentSlot.name)
              .getResponse();
          }
        }
      }
    }

    return handlerInput.responseBuilder
      .addDelegateDirective(currentIntent)
      .getResponse();
  }
};

const CompletedRecommendationIntent = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return (
      request.type === "IntentRequest" &&
      request.intent.name === "RecommendationIntent" &&
      request.dialogState === "COMPLETED"
    );
  },
  handle(handlerInput) {
    const filledSlots = handlerInput.requestEnvelope.request.intent.slots;

    const slotValues = getSlotValues(filledSlots);

    const key = `${slotValues.salaryImportance.resolved}-${slotValues.personality.resolved}-${slotValues.bloodTolerance.resolved}-${slotValues.preferredSpecies.resolved}`;
    const occupation = options[slotsToOptionsMap[key]];

    const speechOutput =
      `So you want to be ${slotValues.salaryImportance.resolved}. You are an ${
      slotValues.personality.resolved
      }, you like ${slotValues.preferredSpecies.resolved}  and you ${
      slotValues.bloodTolerance.resolved === "high" ? "can" : "can't"
      } tolerate blood ` + `. You should consider being a ${occupation.name}`;

    return handlerInput.responseBuilder.speak(speechOutput).getResponse();
  }
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return (
      request.type === "IntentRequest" &&
      request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(
        "This is Decision Tree. I can help you find the perfect job. You can say, recommend a job."
      )
      .reprompt("Would you like a career or do you want to be a couch potato?")
      .getResponse();
  }
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return (
      request.type === "IntentRequest" &&
      (request.intent.name === "AMAZON.CancelIntent" ||
        request.intent.name === "AMAZON.StopIntent")
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.speak("Bye").getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    console.log(
      `Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`
    );

    return handlerInput.responseBuilder.getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak("Sorry, I can't understand the command. Please say again.")
      .reprompt("Sorry, I can't understand the command. Please say again.")
      .getResponse();
  }
};

/* CONSTANTS */

const skillBuilder = Alexa.SkillBuilders.custom();
const SKILL_NAME = "Ankkuri Morning Routine";
const FALLBACK_MESSAGE = `The ${SKILL_NAME} skill can\'t help you with that.  It can recommend the best job for you. Do you want to start your career or be a couch potato?`;
const FALLBACK_REPROMPT = "What can I help you with?";



exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    NotOutOfBed,
    YesScrolling,
    YesStretch,
    HaveAShower,
    LunchPacked,
    FallbackHandler,
    SessionEndedRequestHandler
  )
  .withPersistenceAdapter(persistenceAdapter)
  .addErrorHandlers(ErrorHandler)
  .lambda();
