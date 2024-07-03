const CHARACTER_ID_ES = "character";
const COSTUME_ID_ES = "costume";
const DESCRIPTION_ID_ES = "description";
const ERROR_ID_ES = "error";
const EXIT_ID_ES = "exit";
const FOOD_ID_ES = "food";
const HELP_ID_ES = "help";
const MUSIC_ID_ES = "music";
const PLACES_ID_ES = "places";
const WELCOME_ID_ES = "welcome";

const character_es = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
            "headerTitle": "Rodrigo Del Angel Gerardo",
            "headerSubtitle": "20210658",
            "headerAttributionImage": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "primaryText": "Personajes sobresalientes",
            "listItems": [
                {
                    "primaryText": "Hayao Miyazaki",
                    "secondaryText": "Renombrado director de cine",
                    "thumbnailImage": "https://static.euronews.com/articles/stories/08/30/05/18/1200x675_cmsv2_79166748-9efd-5333-8740-797bc205849e-8300518.jpg"
                },
                {
                    "primaryText": "Haruki Murakami",
                    "secondaryText": "Escritor contemporaneo",
                    "thumbnailImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbtsCXuHTfrFnOptux89Vko0rSWKCUG-RUg&s"
                },
                {
                    "primaryText": "Yoko Ono",
                    "secondaryText": "Artista, música y activista",
                    "thumbnailImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yoko_Ono_2011_SXSW.jpg/1200px-Yoko_Ono_2011_SXSW.jpg"
                },
                {
                    "primaryText": "Akira Kurosawa",
                    "secondaryText": "Uno de los cineastas más importantes de Japón",
                    "thumbnailImage": "https://cdn.zendalibros.com/wp-content/uploads/akira-kurosawa.jpg"
                },
                {
                    "primaryText": "Naomi Osaka",
                    "secondaryText": "Tenista profesional",
                    "thumbnailImage": "https://imagenes.elpais.com/resizer/v2/IYJ3CINWD6KACUN44EUF563VOE.jpg?auth=f8437eeffa43cc829155d9f130000b1535e23e8ca0f8cb7ebedc11a6f162b4b9&width=414"
                }
            ]
        }
    }
};

const costume_es = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
            "foregroundImageLocation": "left",
            "foregroundImageSource": "https://www.nippon.com/es/ncommon/contents/behind/122249/122249.jpg",
            "headerTitle": "Rodrigo Del Angel Gerardo",
            "headerSubtitle": "20210658",
            "hintText": "Prueba, \"Alexa, Dime una descripcion de Tokyo\"",
            "headerAttributionImage": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "primaryText": "El kimono es una prenda tradicional japonesa que se usa en ocasiones formales como bodas, ceremonias del té y festivales. Existen diferentes tipos de kimono para hombres y mujeres, cada uno con su estilo y detalles únicos. Las mujeres suelen usar kimonos coloridos y decorativos, mientras que los hombres optan por diseños más sobrios.",
            "textAlignment": "start",
            "titleText": "Kimono"
        }
    }
};

const description_es = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
            "displayFullscreen": false,
            "headerTitle": "Rodrigo Del Angel Gerardo",
            "headerSubtitle": "20210658",
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "videoControlType": "skip",
            "videoSources": [
                "https://www.dropbox.com/scl/fi/xqoatqzsouj0437xa3xm8/Por-qu-vive-tanta-gente-en-Tokio_.mp4?rlkey=kxhmzcems1478z4lwxacyz1j7&dl=1",
                "https://www.dropbox.com/scl/fi/xqoatqzsouj0437xa3xm8/Por-qu-vive-tanta-gente-en-Tokio_.mp4?rlkey=kxhmzcems1478z4lwxacyz1j7&dl=1",
                "https://www.dropbox.com/scl/fi/xqoatqzsouj0437xa3xm8/Por-qu-vive-tanta-gente-en-Tokio_.mp4?rlkey=kxhmzcems1478z4lwxacyz1j7&dl=1"
            ],
            "sliderType": "determinate"
        }
    }
};

const error_es = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo."
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Prueba, \"Alexa, Dime lugares turisticos de Tokyo\""
        }
    }
};

const exit_es = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Hasta luego, vuelve pronto para mas informacion de Tokyo."
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": ",Te deseamos excelente dia."
        }
    }
};

const food_es = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
                    "size": "large"
                }
            ]
        },
        "title": "Rodrigo Del Angel Gerardo",
        "listItems": [
            {
                "primaryText": "Sushi",
                "imageSource": "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/28/c6/40.jpg"
            },
            {
                "primaryText": "Ramen",
                "imageSource": "https://media.timeout.com/images/105591139/750/562/image.jpg"
            },
            {
                "primaryText": "Tempura",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1XJ8u4MUvJbOJcu4H75srXzjO8BT_IFJ-Q&s"
            },
            {
                "primaryText": "Sashimi",
                "imageSource": "https://jw-webmagazine.com/wp-content/uploads/2019/12/93d34990255c92d5ba645698d005d697_l-min.jpg"
            },
            {
                "primaryText": "Okonomiyaki",
                "imageSource": "https://static.wixstatic.com/media/0a76fd_41b8f2f5eaa641f08f40a3cf15801f4a~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_90/file.jpg"
            }
        ]
    }
};

const help_es = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido al modo ayuda. Puedo proporcionarte información sobre los personajes, lugares, comida y música de Tokyo. ¿Sobre qué te gustaría saber más?"
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Prueba, \"Alexa, Dime un personaje famoso de Tokyo\""
        }
    }
};

const music_es = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "skip",
            "audioSources": [
                "https://www.dropbox.com/scl/fi/lszc974fbg5uy09p0ydhs/Y2meta.app-Omoinotake-_-Official-Music-Video-128-kbps.mp3?rlkey=1igl06gtz1mi1rlhzkme994vw&st=jxdrf4dc&dl=1",
                "https://www.dropbox.com/scl/fi/hsgrr41as6105hbgt6ms8/Y2meta.app-Sakura-Sakura-traditional-Japanese-melody-and-lyrics-with-subtitles-128-kbps.mp3?rlkey=iu4uon82ezx1x389g6nov2aib&st=dwtyj3w4&dl=1",
                "https://www.dropbox.com/scl/fi/4ozfrov6n4hyrfs4ye3rk/Y2meta.app-Tokyo-bushi_-With-English-and-Romaji-subtitles-128-kbps.mp3?rlkey=4f2x83fys3d0f740u7c1hn742&st=m20n6hgz&dl=1",
                "https://www.dropbox.com/scl/fi/9r3ivc0fpp5rdjqm1jr3k/Y2meta.app-Tokyo-Drift-Traducci-n-al-espa-ol-_-R-pidos-y-Furiosos.-Reto-Tokyo.-128-kbps.mp3?rlkey=zznblou3mdpw489vyaxhg3nwq&st=kf030wba&dl=1",
                "https://www.dropbox.com/scl/fi/8zxljaboptla97qemfulc/Y2meta.app-Tokyo-Ondo-128-kbps.mp3?rlkey=mecv25tv4b95eqyudv8piqg4n&st=vom7eytf&dl=1",
                "https://www.dropbox.com/scl/fi/818eud0t0txgrd0d1tos6/Y2meta.app-Tani-Yuuki-MV-128-kbps.mp3?rlkey=w54ddnncap29mawd8ef97i9x5&st=vwo2q4jp&dl=1"
            ],
            "backgroundImage": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
            "coverImageSource": "https://www.tokyoweekender.com/wp-content/uploads/2018/10/Sound-Museum-Vision-Tokyo-Weekender.jpg",
            "headerTitle": "Rodrigo Del Angel Gerardo",
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "primaryText": "Mix Tokyo",
            "secondaryText": "My favourite album",
            "sliderType": "determinate"
        }
    }
};

const places_es = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Rodrigo Del Angel Gerardo",
        "listItems": [
            {
                "primaryText": "Templo Senso-ji",
                "imageSource": "https://mywowo.net/media/images/cache/tokyo_tempio_buddista_senso_ji_01_introduzione_jpg_1200_630_cover_85.jpg"
            },
            {
                "primaryText": "Torre de Tokyo",
                "imageSource": "https://live.staticflickr.com/65535/50586319641_8f5d0a5a65_b.jpg"
            },
            {
                "primaryText": "Shibuya Crossing",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YXaRgZl7DRuTxorHRVCvMTx3QlARIHHmDw&s"
            },
            {
                "primaryText": "Parque Ueno",
                "imageSource": "https://vivetokio.com/wp-content/uploads/2019/11/cerezos-en-flor-parque-ueno.jpg"
            },
            {
                "primaryText": "Palacio Imperial",
                "imageSource": "https://m.cooperativa.cl/noticias/site/artic/20231226/imag/foto_0000001320231226160851.jpg"
            }
        ],
        "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png"
    }
};

const welcome_es = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido a la skill sobre Tokyo. ¿Cómo te puedo ayudar hoy?"
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Prueba, \"Alexa, Dime personajes sobresalientes de Tokyo\""
        }
    }
};

module.exports = {
    CHARACTER_ID_ES,
    COSTUME_ID_ES,
    DESCRIPTION_ID_ES,
    ERROR_ID_ES,
    EXIT_ID_ES,
    FOOD_ID_ES,
    HELP_ID_ES,
    MUSIC_ID_ES,
    PLACES_ID_ES,
    WELCOME_ID_ES,
    character_es,
    costume_es,
    description_es,
    error_es,
    exit_es,
    food_es,
    help_es,
    music_es,
    places_es,
    welcome_es
};
