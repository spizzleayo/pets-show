import React from 'react';

function CloudLeftImage1({ url, x, y, sizeW, sizeH, id, fill }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 850"
        >
            {
                fill
                    ? ''
                    : <defs>
                        <pattern id={id} patternUnits="userSpaceOnUse" width="100%" height="100%">
                            <image href={url} x={x} y={y} width={sizeW} height={sizeH} />
                        </pattern>
                    </defs>
            }
            {/* <defs> */}
            {/* <pattern patternUnits="userSpaceOnUse" width="100%" height="100%"> */}
            {/* </pattern> */}
            {/* </defs> */}
            <path d="M91.8 3.5c-.7.7-3.5 1.3-14.6 3-10.8 1.7-24.4 5.3-36.3 9.6-9.4 3.3-31.1 13.7-37.1 17.6L0 36.3v671l2.2 3.6c15.8 26.2 35.9 51.2 53.9 67 37.3 33 70.6 47.8 133.4 59.6 7.2 1.3 14.1 2.7 15.4 2.9 3.8.8 16.6 2.5 28.1 3.6 5.8.6 11.6 1.3 13 1.7 3.8 1.1 78.9 1.4 83.5.3 2.2-.4 12.3-1.8 22.5-2.9 10.2-1.2 19.6-2.4 21-2.7 1.4-.3 7.9-1.6 14.5-2.9 15.9-3.1 26.6-5.6 40-9.3 15.8-4.4 47.2-15.1 55.2-18.7 1.7-.8 3.5-1.5 3.9-1.5.5 0 8.8-3.6 18.5-8.1 31.7-14.4 59-29.6 86.9-48.2 14.4-9.6 16.8-11.4 38.4-27.4 63-46.9 106.6-61.7 169.1-57.3 9.4.6 19.7 1.5 23 2 3.3.4 13.7 1.7 23 2.9 9.4 1.2 21.1 2.8 26 3.6 5 .8 15.3 1.9 23 2.5 7.7.5 19.2 1.4 25.5 1.9 36.1 2.8 103.5-2.7 133.5-10.9 51.7-14.1 87.3-38.8 114.2-79 23.3-34.8 33.5-81.3 26.5-120.4-6.9-37.7-24-65.9-51.6-84.9-5.9-4-26.3-14.7-34.1-18-2.2-.9-7.4-3-11.5-4.7-4.1-1.8-12.9-5.1-19.5-7.5-36.9-13.4-46.2-17.7-59.6-27.6-20-14.9-35.1-34.2-55.4-70.9-17.6-31.9-19.4-35-27.3-46.5C906 166.7 866 133.3 823 115.8c-18-7.3-29.1-10.7-47.3-14.3-17.9-3.6-29.5-4.6-53.2-4.6-41.3 0-72.7 5.7-123 22.3-41.6 13.7-73 19-113.5 19-24.9 0-37.3-1-56-4.9-19.9-4-34.7-8.9-51.8-17-13.2-6.2-20.2-10.7-40.7-25.9-43.8-32.4-85-55.3-125-69.4-20.3-7.1-39.8-12.1-57-14.5-6.6-1-12.4-2.1-13-2.5-1.1-.9-49.9-1.3-50.7-.5z"
                fill={fill ? fill : `url(#${id})`}
            />
            {/* <image href={url} x={x} y={y} width={sizeW} height={sizeH} /> */}
        </svg>

    );
}

export default CloudLeftImage1;
