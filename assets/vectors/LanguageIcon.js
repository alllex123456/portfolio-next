import React from 'react';

function LanguageIcon({ fill, width, height, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 30}
      height={height || 30}
      fill="none"
      viewBox="0 0 95 95"
      className={className}
    >
      <path
        fill={fill || '#999'}
        d="M47.5 94.583c-6.435 0-12.516-1.236-18.245-3.71-5.728-2.473-10.73-5.848-15.005-10.123-4.278-4.275-7.653-9.277-10.123-15.005C1.657 60.016.42 53.935.417 47.5c0-6.513 1.236-12.614 3.71-18.301C6.6 23.51 9.975 18.529 14.25 14.249c4.275-4.277 9.275-7.652 15-10.122C34.977 1.657 41.06.42 47.5.417c6.513 0 12.615 1.236 18.306 3.71C71.496 6.6 76.478 9.975 80.75 14.25c4.279 4.275 7.653 9.258 10.123 14.949 2.47 5.69 3.707 11.791 3.71 18.301 0 6.435-1.236 12.516-3.71 18.245-2.473 5.728-5.848 10.732-10.123 15.01-4.275 4.275-9.258 7.65-14.949 10.123-5.69 2.473-11.79 3.709-18.3 3.705zm0-9.652a59.776 59.776 0 005.297-8.828 55.737 55.737 0 003.649-9.77H38.554a55.73 55.73 0 003.65 9.77 59.776 59.776 0 005.296 8.828zm-12.242-1.883a64.933 64.933 0 01-3.705-8.065 70.137 70.137 0 01-2.65-8.65h-13.89a39.048 39.048 0 008.536 10.241c3.415 2.904 7.318 5.061 11.71 6.474zm24.484 0c4.394-1.413 8.299-3.57 11.714-6.474a38.972 38.972 0 008.532-10.24h-13.89a69.517 69.517 0 01-2.646 8.653 64.225 64.225 0 01-3.71 8.061zM11.01 56.917h16.008a64.002 64.002 0 01-.527-4.647 64.62 64.62 0 01-.18-4.77c0-1.648.06-3.236.18-4.765.119-1.528.295-3.079.527-4.652H11.01a39.937 39.937 0 00-.881 4.652 38.383 38.383 0 00-.297 4.765c0 1.648.1 3.238.297 4.77.198 1.531.491 3.08.88 4.647zm25.424 0h22.13c.235-1.57.412-3.119.532-4.647a59.89 59.89 0 00.174-4.77c0-1.648-.06-3.236-.179-4.765a68.149 68.149 0 00-.527-4.652h-22.13a63.944 63.944 0 00-.527 4.652 64.69 64.69 0 00-.179 4.765c0 1.648.06 3.238.18 4.77.118 1.531.294 3.08.526 4.647zm31.546 0H83.99a40.67 40.67 0 00.885-4.647c.198-1.529.295-3.119.292-4.77 0-1.648-.098-3.236-.292-4.765a39.547 39.547 0 00-.885-4.652H67.98c.236 1.57.413 3.12.532 4.652.12 1.532.178 3.12.175 4.765 0 1.648-.06 3.238-.18 4.77a67.286 67.286 0 01-.527 4.647zm-1.883-28.25h13.89a39.095 39.095 0 00-8.532-10.24c-3.412-2.904-7.317-5.062-11.714-6.475a65.413 65.413 0 013.71 8.065 68.55 68.55 0 012.646 8.65zm-27.544 0h17.892a55.74 55.74 0 00-3.649-9.77 59.772 59.772 0 00-5.297-8.828 59.772 59.772 0 00-5.297 8.828 55.731 55.731 0 00-3.649 9.77zm-23.541 0h13.89a68.989 68.989 0 012.65-8.654 65.57 65.57 0 013.705-8.06c-4.394 1.412-8.299 3.57-11.714 6.473a38.971 38.971 0 00-8.531 10.24z"
      ></path>
    </svg>
  );
}

export default LanguageIcon;