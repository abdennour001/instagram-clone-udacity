import { FETCH_POSTS, CREATE_POST } from "../types";

const initialState = {
    posts: [
        {
            id: 1,
            username: "logobooks_",
            userthumbnail:
                "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/82296251_589859191811763_4463958445028016128_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=jsCIi8RqZPUAX8CU2rn&oh=494724949856da51e1b8d0b7e2b68252&oe=5F8CDBA1",
            postImage:
                "https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/119708026_329534198365567_2209061106607073849_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_cat=107&_nc_ohc=SqGhzSHvpJkAX99TdWY&oh=75dcc338fe528ae067010620f2cdc0bf&oe=5F8BEA55 640w,https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/119708026_329534198365567_2209061106607073849_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_cat=107&_nc_ohc=SqGhzSHvpJkAX99TdWY&oh=4b23e0a60eae551e75e04abb0d466b87&oe=5F8D4211 750w,https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-15/e35/119708026_329534198365567_2209061106607073849_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_cat=107&_nc_ohc=SqGhzSHvpJkAX99TdWY&_nc_tp=18&oh=3067dac2a22c3f6e405b1e9be5332642&oe=5F8BEB6F",
            likes: "340",
            caption: `Available in store: Trademarks & Symbols of the
            World 2 by Yasaburo Kuwayama. . 📙 Tap the image
            for more info. . #logoplace #logodesigner
            #logoinspiration #logoinspirations #monogram
            #branding #identity #graphicdesignblg
            #graphicgang #logotype #logofolio
            #logocollection #logomark #symbol #graphicdesign
            #graphicdesigner #designinspiration #logogrid
            #thedesigntip #designing #logobooks #graphiclogo
            #logographic #brandmark #logobrand
            #logo_showcase #logotipo #logonew #logomaker`,
            date: "8 hours ago"
        },
        {
            id: 2,
            username: "coding_.master",
            userthumbnail:
                "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/100961713_248207412921430_5211210581901574144_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=-NzbS5bSgNUAX816mJo&oh=7ff547bb2b4c5fd0bb7acf81bc97e35f&oe=5F9114CB",
            postImage:
                "https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/119437561_608556073160357_1334167033318364338_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=X7yox2xyc74AX8hTV9M&oh=24bb7f7a52b4c68827b05cb8fe2f805b&oe=5F91B085 640w,https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/119437561_608556073160357_1334167033318364338_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=X7yox2xyc74AX8hTV9M&oh=4152fb8bc034237686f38ff3a62475ea&oe=5F9038C1 750w,https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/119437561_608556073160357_1334167033318364338_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=X7yox2xyc74AX8hTV9M&_nc_tp=18&oh=400af6faf700905ca13693e63b7db1bd&oe=5F91CF3F 1080w",
            likes: "1,777",
            caption: `GITHUB vs GITLAB

            If This Post Is Helpful For You Then Like & Share The Post & Follow Us For More Such Amazing Content 🔥🔥🔥🔥
            
            .....................................................................
            
            !! FOLLOW US TO LEARN ALL ABOUT WEB DEVELOPMENT !!
            
            What Will You Get Here ?? 👇👇👇
            
            📑 Learn Web Development
            📑 Get Daily Quiz
            📑 Free & Paid Projects
            📑 Web Development Related Tips & Tricks
            📑 HTML & CSS3 Creative YouTube Video Tutorials
            
            ‼ AND MUCH MORE ‼
            
            Follow Now 👇👇
            
            @coding_.master
            @coding_.master
            @coding_.master
            .....................................................................
            
            #coding_.master #web #htmlcss #html5 #css3code #js #webdeisgn
            #javascript #javascriptdeveloper
            #webdesigner #websitedesign
            #website #programming #code
            #coding #100daysofcode #reactjs
            #bootstrap #webdeveloper
            #webdevelopment #wordpress
            #python #java #frontend
            #backenddeveloper #fullstackdeveloper #developer
            
            ...................................................................`,
            date: "10 hours ago"
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };

        default:
            return state;
    }
};
