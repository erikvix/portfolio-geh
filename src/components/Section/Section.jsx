import React from "react";
import Card from "../Card";
import SeactionHeader from "../SectionHeader";

export default function Section () {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <SeactionHeader />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-20 relative">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <svg
          className="absolute z-0 bottom-40 -left-20"
          width="112"
          height="118"
          viewBox="0 0 112 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.3661 62.2926C59.4755 63.5199 57.1853 64.192 55.9982 62.2926C54.7151 60.6148 55.6585 56.7186 59.3661 55.5937C62.8581 54.262 68.3836 56.8183 69.4696 62.2926C70.8533 67.5564 66.675 74.6575 59.3661 75.6913C52.2842 77.114 43.5085 71.3524 42.5268 62.2926C41.0388 53.4539 48.4673 43.1268 59.3661 42.1951C70.0535 40.6703 82.0516 49.6556 82.941 62.2926C84.5236 74.7085 73.8704 88.2602 59.3661 89.0895C45.0759 90.7163 29.8446 78.5049 29.0556 62.2926C27.3748 46.2912 41.259 29.5326 59.3661 28.7968C77.2447 27.0784 95.7284 42.4948 96.4124 62.2926C98.1958 81.8693 81.0681 101.854 59.3661 102.488C37.8824 104.308 16.1743 85.6676 15.5842 62.2926C13.7088 39.1391 34.0594 15.9322 59.3661 15.3984C84.4466 13.4758 109.396 35.3428 109.884 62.2926C111.864 89.032 88.2677 115.446 59.3661 115.886C30.6913 117.902 2.49762 92.828 2.11275 62.2926C0.0385898 31.9783 26.8638 2.33814 59.3661 2"
            stroke="#4F4F4F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute -bottom-[29px] z-0 -right-2"
          width="124"
          height="123"
          viewBox="0 0 124 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.0217 2.36859C60.3585 0.0923195 63.6417 0.0923206 63.9786 2.36859L66.4987 19.397C66.7874 21.3483 69.4276 21.7476 70.2805 19.969L77.7305 4.43282C78.7255 2.35777 81.8621 3.32909 81.5103 5.60333L78.8815 22.5975C78.5798 24.5477 80.9853 25.71 82.3258 24.2618L94.0347 11.6115C95.5983 9.92216 98.3089 11.7775 97.3001 13.8466L89.7702 29.2905C88.9048 31.0654 90.8619 32.8874 92.5705 31.8975L107.482 23.2585C109.475 22.1041 111.519 24.6774 109.944 26.3571L98.1951 38.8858C96.8434 40.3271 98.1782 42.6469 100.104 42.2026L116.884 38.3309C119.128 37.8131 120.325 40.8751 118.325 42.0168L103.403 50.5323C101.686 51.5122 102.28 54.1235 104.252 54.2643L121.411 55.4888C123.709 55.6528 123.953 58.932 121.705 59.4354L104.927 63.1922C102.998 63.6242 102.798 66.2952 104.642 67.009L120.67 73.2138C122.818 74.0455 122.089 77.2518 119.792 77.0729L102.632 75.7363C100.661 75.5829 99.6858 78.0762 101.238 79.3005L114.723 89.9393C116.531 91.3658 114.892 94.2152 112.75 93.3698L96.7245 87.0459C94.887 86.3208 93.2225 88.4151 94.3437 90.0414L104.093 104.184C105.4 106.079 102.995 108.319 101.197 106.881L87.7347 96.1168C86.1929 94.8841 83.987 96.3932 84.5772 98.2768L89.7159 114.679C90.404 116.875 87.4473 118.305 86.1534 116.401L76.4643 102.148C75.3552 100.516 72.8038 101.306 72.8103 103.279L72.8666 120.484C72.8742 122.785 69.6279 123.276 68.9543 121.076L63.9125 104.607C63.3351 102.721 60.6651 102.721 60.0877 104.607L55.046 121.076C54.3724 123.276 51.1261 122.785 51.1336 120.484L51.19 103.279C51.1964 101.306 48.6451 100.516 47.536 102.148L37.8468 116.401C36.5529 118.305 33.5961 116.875 34.2843 114.679L39.4231 98.2768C40.0132 96.3932 37.8073 94.8841 36.2656 96.1168L22.8031 106.881C21.0048 108.319 18.6007 106.079 19.9075 104.184L29.6567 90.0415C30.7779 88.4151 29.1134 86.3208 27.276 87.0459L11.2504 93.3699C9.10803 94.2153 7.46932 91.3658 9.27746 89.9393L22.7626 79.3005C24.3144 78.0762 23.3391 75.5829 21.3686 75.7363L4.20785 77.0729C1.91117 77.2518 1.18222 74.0455 3.3305 73.2138L19.3581 67.009C21.2019 66.2952 21.0024 63.6242 19.0731 63.1922L2.29477 59.4354C0.0466555 58.932 0.291459 55.6528 2.5894 55.4888L19.7483 54.2643C21.7202 54.1235 22.3142 51.5122 20.5972 50.5323L5.67573 42.0168C3.67516 40.8751 4.87223 37.8131 7.11669 38.331L23.8968 42.2026C25.8222 42.6469 27.1569 40.3271 25.8053 38.8857L14.0566 26.3572C12.4814 24.6775 14.5255 22.1042 16.518 23.2586L31.4298 31.8975C33.1384 32.8874 35.0955 31.0654 34.2301 29.2905L26.7001 13.8466C25.6912 11.7775 28.4019 9.92216 29.9655 11.6115L41.6745 24.2618C43.0149 25.71 45.4204 24.5477 45.1188 22.5975L42.4899 5.60332C42.1381 3.32908 45.2748 2.35777 46.2698 4.43282L53.7198 19.969C54.5727 21.7476 57.2128 21.3483 57.5016 19.397L60.0217 2.36859Z"
            fill="#B349FF"
          />
        </svg>
      </div>
    </div>
  );
}
