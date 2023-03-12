const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://i.imgur.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: "7ORbUAH.jpg", width: 1200, height: 1000 },
    { id: "DCBPAVG.jpg",width: 1200, height: 1000 },
    { id: "i6TIU5L.jpg", width: 1200, height: 1000  },
    { id: "wU0tluO.jpg",width: 1200, height: 1000  },
    { id: "2UfvaUN.jpg",width: 1200, height: 1000  },
    { id: "WFfMobr.jpg", width: 1200, height: 1000  },
    { id: "wGoRE75.jpg", width: 1200, height: 1000  },
    
];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;