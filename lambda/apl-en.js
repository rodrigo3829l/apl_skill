const CHARACTER_ID_EN = "character";
const COSTUME_ID_EN = "costume";
const DESCRIPTION_ID_EN = "description";
const ERROR_ID_EN = "error";
const EXIT_ID_EN = "exit";
const FOOD_ID_EN = "food";
const HELP_ID_EN = "help";
const MUSIC_ID_EN = "music";
const PLACES_ID_EN = "places";
const WELCOME_ID_EN = "welcome";

const character_en = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://c.wallhere.com/photos/fa/ce/Japan_anime_street_light_temple_light_effects_dark-1954129.jpg!d",
            "headerTitle": "Rodrigo Del Angel Gerardo",
            "headerSubtitle": "20210658",
            "headerAttributionImage": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "primaryText": "Outstanding Characters",
            "listItems": [
                {
                    "primaryText": "Hayao Miyazaki",
                    "secondaryText": "Renowned filmmaker",
                    "thumbnailImage": "https://static.euronews.com/articles/stories/08/30/05/18/1200x675_cmsv2_79166748-9efd-5333-8740-797bc205849e-8300518.jpg"
                },
                {
                    "primaryText": "Haruki Murakami",
                    "secondaryText": "Contemporary writer",
                    "thumbnailImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbtsCXuHTfrFnOptux89Vko0rSWKCUG-RUg&s"
                },
                {
                    "primaryText": "Yoko Ono",
                    "secondaryText": "Artist, musician, and activist",
                    "thumbnailImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yoko_Ono_2011_SXSW.jpg/1200px-Yoko_Ono_2011_SXSW.jpg"
                },
                {
                    "primaryText": "Akira Kurosawa",
                    "secondaryText": "One of Japan's most important filmmakers",
                    "thumbnailImage": "https://cdn.zendalibros.com/wp-content/uploads/akira-kurosawa.jpg"
                },
                {
                    "primaryText": "Naomi Osaka",
                    "secondaryText": "Professional tennis player",
                    "thumbnailImage": "https://imagenes.elpais.com/resizer/v2/IYJ3CINWD6KACUN44EUF563VOE.jpg?auth=f8437eeffa43cc829155d9f130000b1535e23e5b&f=default_1200x0&sec=2022-07-12T01%3A11%3A07%2B00%3A00"
                }
            ]
        }
    }
};

const costume_en = {
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
            "primaryText": "The kimono is a traditional Japanese garment worn on formal occasions such as weddings, tea ceremonies, and festivals. There are different types of kimono for men and women, each with its own unique style and details. Women usually wear colorful and decorative kimonos, while men opt for more sober designs.",
            "textAlignment": "start",
            "titleText": "Kimono"
        }
    }
};

const description_en= {
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

const error_en = {
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
                    "text": "Sorry, something went wrong. Please try again."
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Try, \"Alexa, tell me tourist places in Tokyo\""
        }
    }
};

const exit_en = {
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
                    "text": "See you later, come back soon for more information about Tokyo."
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Have a great day!"
        }
    }
};

const food_en = {
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

const help_en = {
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
                    "text": "Welcome to the help mode. I can provide you with information about Tokyo's characters, places, food, and music. What would you like to know more about?"
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Try, \"Alexa, tell me about a famous character from Tokyo\""
        }
    }
};

const music_en = {
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

const places_en = {
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
                "primaryText": "Senso-ji Temple",
                "imageSource": "https://mywowo.net/media/images/cache/tokyo_tempio_buddista_senso_ji_01_introduzione_jpg_1200_630_cover_85.jpg"
            },
            {
                "primaryText": "Tokyo Tower",
                "imageSource": "https://live.staticflickr.com/65535/50586319641_8f5d0a5a65_b.jpg"
            },
            {
                "primaryText": "Shibuya Crossing",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YXaRgZl7DRuTxorHRVCvMTx3QlARIHHmDw&s"
            },
            {
                "primaryText": "Ueno Park",
                "imageSource": "https://vivetokio.com/wp-content/uploads/2019/11/cerezos-en-flor-parque-ueno.jpg"
            },
            {
                "primaryText": "Imperial Palace",
                "imageSource": "https://m.cooperativa.cl/noticias/site/artic/20231226/imag/foto_0000001320231226160851.jpg"
            }
        ],
        "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png"
    }
};

const welcome_en = {
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
                    "text": "Welcome to the Tokyo skill. How can I help you today?"
                }
            },
            "logoUrl": "https://www.uthh.edu.mx/imagenes/carreras/Logos_Carreras/2015061214431910_gal.png",
            "hintText": "Try, \"Alexa, tell me about outstanding characters from Tokyo\""
        }
    }
};

module.exports = {
    CHARACTER_ID_EN,
    COSTUME_ID_EN,
    DESCRIPTION_ID_EN,
    ERROR_ID_EN,
    EXIT_ID_EN,
    FOOD_ID_EN,
    HELP_ID_EN,
    MUSIC_ID_EN,
    PLACES_ID_EN,
    WELCOME_ID_EN,
    character_en,
    costume_en,
    description_en,
    error_en,
    exit_en,
    food_en,
    help_en,
    music_en,
    places_en,
    welcome_en
};
