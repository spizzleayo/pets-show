import React from 'react';

function CloudLeftImage4({ url, x, y, sizeW, sizeH, id, fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 850"
            width={'100%'}
            height={'100%'} 
            style={{ overflow: "visible !important", }}
        >
            {
                fill
                    ? ''
                    : <defs>
                        <pattern id={id} patternUnits="userSpaceOnUse" width="100%" height="100%">
                            <image href={url} x={x} y={y} width={sizeW} height={sizeH}  />
                        </pattern>
                    </defs>
            }
            <path d="M1139 3.8c0 .5-6.4 1.2-14.3 1.6-23 1.1-80.4 8-103 12.5-2.9.6-12.4 2.4-21.2 4.1-44.2 8.5-88.2 21.6-121 36-2.2 1-7.4 3.2-11.5 5-19 8.3-63.9 31.8-111.7 58.6-11.1 6.3-20.5 11.4-20.7 11.4-.2 0-3.7 1.9-7.7 4.1-32.8 18.6-99 51.8-115.4 57.8-55.3 20.5-98.5 21.8-183.5 5.6-21.9-4.1-34.7-6.4-49-8.5-7.4-1.1-16.4-2.5-20-3-22.2-3.4-73.4-4.3-99-1.6-39.6 4.1-74.1 12-101.5 23.1-73.9 29.9-126.7 92.7-145.4 173.1-5.2 22.3-8.3 59.2-6 72.4.5 3 1.4 9.5 2 14.5 5.1 43 25.3 83.7 54.2 109.4 8.9 7.8 15 12 29.7 20.3 10.8 6.1 16.7 9.2 53 28 35.6 18.5 52.1 29.7 70 47.7 19.4 19.6 38.8 48 58.8 86.1 8.9 17 15.5 26.5 25.2 36 27.9 27.6 69.3 41 127.4 41.2 15 .1 43.2-1.6 55.6-3.2 39.7-5.4 70.1-11.4 131.5-26.1 51.4-12.3 80.6-16.1 118.5-15.2 14.9.3 48.5 2.9 50 3.8.3.2 4.8 1.1 10 2 63.8 10.8 130.9 41.9 197.5 91.5 26.2 19.5 34 25 46.5 32.7 11.4 7 32.8 18.2 42.5 22.1 22.1 9.1 38.3 13.7 58.6 16.7 11.8 1.8 39.5 2 52.1.4l8.8-1.2V3h-30.5c-16.8 0-30.5.4-30.5.8z"
                fill={fill ? fill : `url(#${id})`}
            />
        </svg>

    );
}

export default CloudLeftImage4;