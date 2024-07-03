const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');
const aplEs = require('./apl-es');
const aplEn = require('./apl-en');

const languageStrings = {
    en: {
        translation: {
            WELCOME_MESSAGE: 'Welcome to Tokyo Info! You can ask about Tokyo\'s description, places to visit, typical food, traditional costume, notable characters, or music. What would you like to know?',
            HELP_MESSAGE: 'You can ask me for a description of Tokyo, places to visit, typical food, traditional costume, notable characters, or music. How can I assist you?',
            GOODBYE_MESSAGE: 'Goodbye!',
            REFLECTOR_MESSAGE: 'You just triggered %s',
            FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MESSAGE: 'Sorry, there was an error. Please try again.',
            DESCRIPTION_MESSAGE: 'Tokyo, the capital of Japan, is a vibrant metropolis and one of the largest cities in the world. With a population exceeding 37 million in its metropolitan area, Tokyo is Japan\'s political, economic, and cultural center. The city offers a fascinating blend of tradition and modernity, with ancient temples and shrines standing alongside ultramodern skyscrapers and high-tech shopping streets. What else would you like to know?',
            PLACES_MESSAGE: 'Here are some popular places to visit in Tokyo: 1. Senso-ji Temple: This ancient Buddhist temple located in Asakusa is one of Tokyo\'s most famous and visited temples. 2. Tokyo Tower: An icon of the city, this communications and observation tower offers panoramic views of Tokyo. 3. Shibuya Crossing: The world\'s most famous intersection, known for its frantic pedestrian crossing and the Hachiko statue. 4. Ueno Park: A large public park known for its zoo, museums, and especially cherry blossoms in spring. 5. Imperial Palace: The official residence of the Emperor of Japan, surrounded by gardens and moats, located in the heart of Tokyo. Would you like to hear about something else?',
            FOOD_MESSAGE: 'Typical food in Tokyo includes: 1. Sushi: Vinegared rice combined with raw fish, seafood, and other ingredients. 2. Ramen: Wheat noodle soup served in a meat or fish-based broth, usually with pork, eggs, and vegetables. 3. Tempura: Battered and deep-fried seafood, vegetables, or meat. 4. Sashimi: Thin slices of raw fish or seafood. 5. Okonomiyaki: A type of savory pancake with various ingredients like meat, seafood, and vegetables. What else would you like to know?',
            COSTUME_MESSAGE: 'The traditional costume of Tokyo is the Kimono, a formal garment worn during special occasions like weddings, tea ceremonies, and festivals. There are different types of kimonos for men and women, each with unique styles and details. Women usually wear colorful and decorative kimonos, while men opt for more subdued designs. Would you like to know more?',
            CHARACTERS_MESSAGE: 'Notable characters from Japan include: 1. Hayao Miyazaki: A renowned film director and co-founder of Studio Ghibli, known for animated films like "Spirited Away" and "My Neighbor Totoro." 2. Haruki Murakami: One of Japan\'s most influential contemporary writers, famous for novels like "Norwegian Wood" and "Kafka on the Shore." 3. Yoko Ono: An artist, musician, and activist known both for her artistic work and her marriage to John Lennon of The Beatles. 4. Akira Kurosawa: One of Japan\'s most important filmmakers, known for movies like "Rashomon," "Seven Samurai," and "Ran." 5. Naomi Osaka: A professional tennis player, she has won multiple Grand Slam titles and is one of Japan\'s most prominent sports figures. Anything else you want to know?',
            MUSIC_MESSAGE: 'Playing typical songs from Tokyo...'
        }
    },
    es: {
        translation: {
            WELCOME_MESSAGE: '¡Bienvenido a Información de Tokio! Puedes preguntar sobre la descripción de Tokio, lugares para visitar, comida típica, vestimenta tradicional, personajes sobresalientes o música. ¿Qué te gustaría saber?',
            HELP_MESSAGE: 'Puedes preguntarme por una descripción de Tokio, lugares para visitar, comida típica, vestimenta tradicional, personajes sobresalientes o música. ¿Cómo te puedo ayudar?',
            GOODBYE_MESSAGE: '¡Adiós!',
            REFLECTOR_MESSAGE: 'Acabas de activar %s',
            FALLBACK_MESSAGE: 'Lo siento, no sé sobre eso. Por favor, intenta nuevamente.',
            ERROR_MESSAGE: 'Lo siento, hubo un error. Por favor, intenta nuevamente.',
            DESCRIPTION_MESSAGE: 'Tokio, la capital de Japón, es una metrópolis vibrante y una de las ciudades más grandes del mundo. Con una población que supera los 37 millones de habitantes en su área metropolitana, Tokio es el centro político, económico y cultural de Japón. La ciudad combina una fascinante mezcla de tradición y modernidad, con antiguos templos y santuarios coexistiendo junto a rascacielos ultramodernos y calles comerciales de alta tecnología. ¿Qué más te gustaría saber?',
            PLACES_MESSAGE: 'Aquí tienes algunos lugares populares para visitar en Tokio: 1. Templo Senso-ji: Este antiguo templo budista, ubicado en Asakusa, es uno de los más famosos y visitados de Tokio. 2. Torre de Tokio: Un ícono de la ciudad, esta torre de comunicaciones y observatorio ofrece vistas panorámicas de Tokio. 3. Cruce de Shibuya: La intersección más famosa del mundo, conocida por su frenético cruce peatonal y la estatua de Hachiko. 4. Parque Ueno: Un amplio parque público conocido por su zoológico, museos y especialmente por los cerezos en flor durante la primavera. 5. Palacio Imperial: La residencia oficial del Emperador de Japón, rodeada de jardines y fosos, se encuentra en el corazón de Tokio. ¿Te gustaría saber algo más?',
            FOOD_MESSAGE: 'La comida típica de Tokio incluye: 1. Sushi: Arroz sazonado con vinagre combinado con pescado crudo, mariscos y otros ingredientes. 2. Ramen: Sopa de fideos de trigo servida en un caldo de carne o pescado, generalmente con carne de cerdo, huevos y verduras. 3. Tempura: Mariscos, vegetales o carnes rebozados y fritos. 4. Sashimi: Lonchas finas de pescado crudo o marisco. 5. Okonomiyaki: Un tipo de panqueque salado con varios ingredientes como carne, mariscos y verduras. ¿Te gustaría saber algo más?',
            COSTUME_MESSAGE: 'La vestimenta tradicional de Tokio es el Kimono, una prenda formal que se usa en ocasiones especiales como bodas, ceremonias del té y festivales. Existen diferentes tipos de kimono para hombres y mujeres, cada uno con su estilo y detalles únicos. Las mujeres suelen usar kimonos coloridos y decorativos, mientras que los hombres optan por diseños más sobrios. ¿Quieres saber más?',
            CHARACTERS_MESSAGE: 'Personajes sobresalientes de Japón incluyen: 1. Hayao Miyazaki: Un renombrado director de cine y cofundador de Studio Ghibli, conocido por películas animadas como "El viaje de Chihiro" y "Mi vecino Totoro." 2. Haruki Murakami: Uno de los escritores contemporáneos más influyentes de Japón, famoso por sus novelas como "Tokio Blues (Norwegian Wood)" y "Kafka en la orilla." 3. Yoko Ono: Artista, música y activista, conocida tanto por su trabajo artístico como por su matrimonio con John Lennon de los Beatles. 4. Akira Kurosawa: Uno de los cineastas más importantes de Japón, conocido por películas como "Rashomon", "Los siete samuráis" y "Ran." 5. Naomi Osaka: Tenista profesional, ha ganado múltiples títulos de Grand Slam y es una de las figuras deportivas más destacadas de Japón. ¿Quieres saber algo más?',
            MUSIC_MESSAGE: 'Reproduciendo canciones típicas de Tokio...'
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const getAplData = (locale) => {
    if (locale.startsWith('es')) {
        return aplEs;
    } else {
        return aplEn;
    }
};

const LocalizationInterceptor = {
    process(handlerInput) {
        const localizationClient = i18n.use(sprintf).init({
            lng: handlerInput.requestEnvelope.request.locale,
            fallbackLng: 'en',
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: languageStrings,
            returnObjects: true
        });

        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = function (...args) {
            return localizationClient.t(...args);
        };

        attributes.locale = handlerInput.requestEnvelope.request.locale;
    }
};


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.WELCOME_ID_ES;
                aplDatasource = aplData.welcome_es;
            } else {
                aplDocumentId = aplData.WELCOME_ID_EN;
                aplDatasource = aplData.welcome_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DescriptionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescriptionIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.DESCRIPTION_ID_ES;
                aplDatasource = aplData.description_es;
            } else {
                aplDocumentId = aplData.DESCRIPTION_ID_EN;
                aplDatasource = aplData.description_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        const speakOutput = requestAttributes.t('DESCRIPTION_MESSAGE');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};


const PlacesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlacesIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.PLACES_ID_ES;
                aplDatasource = aplData.places_es;
            } else {
                aplDocumentId = aplData.PLACES_ID_EN;
                aplDatasource = aplData.places_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        const speakOutput = requestAttributes.t('PLACES_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};

const FoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FoodIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.FOOD_ID_ES;
                aplDatasource = aplData.food_es;
            } else {
                aplDocumentId = aplData.FOOD_ID_EN;
                aplDatasource = aplData.food_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        const speakOutput = requestAttributes.t('FOOD_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};

const CostumeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CostumeIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.COSTUME_ID_ES;
                aplDatasource = aplData.costume_es;
            } else {
                aplDocumentId = aplData.COSTUME_ID_EN;
                aplDatasource = aplData.costume_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        const speakOutput = requestAttributes.t('COSTUME_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};

const CharactersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CharactersIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.CHARACTER_ID_ES;
                aplDatasource = aplData.character_es;
            } else {
                aplDocumentId = aplData.CHARACTER_ID_EN;
                aplDatasource = aplData.character_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        
        const speakOutput = requestAttributes.t('CHARACTERS_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};

const MusicIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicIntent';
    },
    handle(handlerInput) {
         const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.MUSIC_ID_ES;
                aplDatasource = aplData.music_es;
            } else {
                aplDocumentId = aplData.MUSIC_ID_EN;
                aplDatasource = aplData.music_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
       
        const speakOutput = requestAttributes.t('MUSIC_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.HELP_ID_ES;
                aplDatasource = aplData.help_es;
            } else {
                aplDocumentId = aplData.HELP_ID_EN;
                aplDatasource = aplData.help_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        const speakOutput = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.EXIT_ID_ES;
                aplDatasource = aplData.exit_es;
            } else {
                aplDocumentId = aplData.EXIT_ID_EN;
                aplDatasource = aplData.exit_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
       
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('FALLBACK_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = requestAttributes.t('REFLECTOR_MESSAGE', intentName);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(requestAttributes.t('HELP_MESSAGE'))
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const locale = requestAttributes.locale;
        const aplData = getAplData(locale);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            let aplDocumentId, aplDatasource;
            if (locale.startsWith('es')) {
                aplDocumentId = aplData.ERROR_ID_ES;
                aplDatasource = aplData.error_es;
            } else {
                aplDocumentId = aplData.ERROR_ID_EN;
                aplDatasource = aplData.error_en;
            }
            const aplDirective = createDirectivePayload(aplDocumentId, aplDatasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescriptionIntentHandler,
        PlacesIntentHandler,
        FoodIntentHandler,
        CostumeIntentHandler,
        CharactersIntentHandler,
        MusicIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .addRequestInterceptors(LocalizationInterceptor)
    .withCustomUserAgent('sample/tokyo-info/v1.0')
    .lambda();
