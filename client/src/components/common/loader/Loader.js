import React from 'react'
import  '../loader/style.css'
function Loader() {
  return (
    <div className="Savtech_overlay d-none">
    <div className="Savtech_overlay__inner">
        <div className="Savtech_overlay__content ">
        <div class="traditional"></div>
          {/* <svg width="110" height="111" viewBox="0 0 110 111" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_5)" filter="url(#filter0_d_1_5)">
      <path d="M40.8038 61.2243L35.2973 57.699C37.7569 73.4822 41.3825 81.3884 50.4401 93.5399C43.7247 81.4963 41.5088 74.2077 40.8038 61.2243Z" fill="#FFDD00" stroke="#FFDD00"/>
      <path d="M5.01179 34.7938C22.6272 34.0569 31.0839 37.5055 41.5046 47.5293L40.8162 56.6364C29.115 45.7666 17.9337 44.8986 13.5134 45.4728C13.5134 45.4728 12.7118 49.6982 15.3489 62.8057C17.986 75.9132 23.1497 81.9012 23.1497 81.9012C23.1497 81.9012 30.3783 92.5897 37.3747 96.0025C44.3711 99.4154 48.7501 100.484 50.9114 100.703C53.0728 100.922 50.9781 101.02 49.9937 100.997C49.0093 100.974 49.3054 100.997 49.3054 100.997C49.3054 100.997 34.9096 100.234 26.4066 93.8547C18.4971 88.091 10.3428 71.2783 10 70.5C9.65723 69.7217 4.73156 52.3504 5.01179 34.7938Z" fill="#FFDD00" fill-opacity="0.82" stroke="#FFDD00"/>
      <path d="M85.1105 93.5705C93.3243 88.6524 100.516 71.8595 100.687 71.5066C100.857 71.1537 106.028 54.5369 104.816 35.6657C95.2554 33.9012 78.1072 38.8278 77.9723 40.3662C77.8375 41.9045 78.4029 49.767 78.4029 49.767C86.6417 45.8059 97.0155 45.6542 97.0155 45.6542C97.0155 45.6542 97.1083 55.3171 95.18 62.987C93.2517 70.6569 91.5215 74.3562 88.0675 80.6137C88.0675 80.6137 80.8645 92.5079 73.8681 95.9208C66.8717 99.3336 62.4928 100.402 60.3314 100.621C58.17 100.84 60.2647 100.938 61.2491 100.915C62.2336 100.892 61.9375 100.915 61.9375 100.915C61.9375 100.915 76.6075 99.9498 85.1105 93.5705Z" fill="#FFDD00" stroke="#FFDD00"/>
      <path d="M42.4098 42.1288L36.2151 37.4284C39.51 23.3216 43.3933 15.3538 55.2582 1C70.6708 16.8753 75.4486 37.4284 75.4486 46.8293C75.4486 56.2301 74.9773 60.013 73.8425 66.2186C73.8425 66.2186 71.1967 75.5672 68.5655 80.9074C65.8844 86.3489 60.3058 93.5399 60.3058 93.5399H59.8469C64.2971 86.2892 66.0881 81.9733 68.1066 73.8568C70.1427 64.3528 70.3196 58.7501 69.0244 48.2981C66.3361 34.9445 63.7654 27.7934 55.2582 16.2764C48.8973 24.1598 46.3626 30.2789 42.4098 42.1288Z" fill="#FFDD00" stroke="#FFDD00"/>
      <path d="M52.6814 78.0825L52.7042 79.2215L46.9021 79.3092C47.1967 77.7165 48.4705 77.0314 47.7451 76.12C44.7069 72.4372 43.3277 70.4766 43.1652 66.5907C43.3039 64.7183 43.4813 63.9929 43.9691 63.264C44.6009 61.6032 44.9375 60.6615 45.3319 58.8585C46.291 58.609 46.1257 59.5661 45.4994 61.7907C44.4571 64.6228 44.4955 65.1862 44.5014 66.2943L44.6464 66.2921C44.6464 66.2921 45.7722 62.5048 45.8341 62.2C45.896 61.8952 46.7413 60.1883 46.9164 58.2821C47.965 58.3146 48.0124 59.0387 47.4704 60.587L45.7847 65.1701C45.5267 66.0128 45.5 66.5266 45.5772 67.4865C45.6339 67.7455 45.7397 67.7603 45.9453 67.7571L46.0071 65.4084C46.3123 64.1009 46.5539 63.3098 47.4884 61.4844C47.9796 60.3462 48.1964 59.6486 48.4395 58.2591L48.5845 58.2569C49.2841 58.2844 49.3978 58.529 49.2573 59.248C48.6315 61.3476 48.2673 62.5249 47.515 64.626C47.0761 65.9321 46.962 66.7407 47.0087 68.328C47.2098 68.484 47.3117 68.516 47.4439 68.3215C47.4145 66.5352 47.4461 65.5789 47.9712 63.8595C48.4564 62.1847 48.8423 61.2803 49.5933 59.7263C49.7 59.6211 49.8702 59.6645 49.8834 59.7219C50.3571 60.7447 50.396 61.308 50.2979 62.3052C49.6669 64.514 49.5639 65.7226 49.7195 67.8382C50.9137 70.1794 51.7262 71.4323 53.4612 73.5477C55.2661 76.7314 52.6814 78.0825 52.6814 78.0825Z" fill="#073793"/>
      <path d="M56.6939 78.0218L56.7167 79.1609L62.5187 79.0732C62.1606 77.4904 60.8601 76.8441 61.5486 75.9114C64.4376 72.139 65.7374 70.1379 65.7443 66.2494C65.5307 64.3823 65.3243 63.6627 64.8077 62.949C64.1098 61.3083 63.7357 60.3774 63.2694 58.5873C62.3009 58.367 62.5043 59.3186 63.2193 61.5229C64.3744 64.3217 64.3585 64.886 64.3971 65.9936L64.252 65.9958C64.252 65.9958 62.9753 62.2447 62.9013 61.942C62.8272 61.6393 61.914 59.959 61.6628 58.0592C60.6161 58.1234 60.5978 58.8485 61.2014 60.3795L63.0695 64.9088C63.361 65.7433 63.4083 66.2559 63.3696 67.2176C63.3233 67.4782 63.2181 67.4962 63.0125 67.4992L62.8567 65.1537C62.4994 63.8562 62.2263 63.0729 61.2193 61.2769C60.6828 60.1542 60.4382 59.4636 60.1397 58.0822L59.9947 58.0844C59.2966 58.1331 59.1927 58.3809 59.362 59.0953C60.0714 61.1747 60.4825 62.3403 61.3185 64.4174C61.8093 65.7094 61.9558 66.5141 61.9726 68.1019C61.7779 68.2639 61.6774 68.2989 61.5375 68.1084C61.4953 66.3224 61.4255 65.3676 60.8319 63.6651C60.28 62.006 59.858 61.1139 59.0453 59.5834C58.9344 59.4815 58.7661 59.5301 58.7552 59.5878C58.3227 60.6243 58.3063 61.1884 58.4444 62.182C59.1634 64.3704 59.3147 65.5753 59.2439 67.6943C58.1441 70.0701 57.3822 71.3468 55.733 73.5133C54.0567 76.7497 56.6939 78.0218 56.6939 78.0218Z" fill="#073793"/>
      <path d="M56.5056 70.0882C57.5919 69.2481 58.7184 66.7278 59 65.1527C58.4968 63.7053 57.4817 63.195 53.9307 63C51.7575 63.3 50.7904 63.5846 50.1087 64.5751C49.8694 65.1476 50.0773 65.8296 50.235 66.3466L50.2391 66.3603C50.5572 67.4038 51.0283 68.4687 51.4363 68.9855C53.8529 72.0472 55.4193 70.9282 56.5056 70.0882Z" fill="#747479" fill-opacity="0.49"/>
      <path d="M51 65.7902C51.571 64.2122 52.2004 63.7971 54 64.0847C53.9223 66.0204 53.1574 66.2684 51 65.7902Z" fill="#0020C5"/>
      <path d="M58 65.7902C57.429 64.2122 56.7996 63.7971 55 64.0847C55.0777 66.0204 55.8426 66.2684 58 65.7902Z" fill="#0020C5"/>
      <path d="M54.6314 50C54.801 54.5697 49.1194 58.3515 53.953 63H55.3946C57.9862 56.2847 57.2286 53.7731 54.6314 50Z" fill="url(#paint0_linear_5_31)" fill-opacity="0.82"/>
    </g>
    
      <defs>
        <filter id="filter0_d_1_5" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <animate attributeName="y" values="100;0" from="100" to="0" dur="3s"  repeatCount="indefinite" />
          
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape"/>
              </filter>
      <linearGradient id="paint0_linear_5_31" x1="54.5" y1="50" x2="54.5" y2="63" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFDD00"/>
      <stop offset="1" stop-color="#FF3D00"/>
      </linearGradient>
        <clipPath id="clip0_1_5">
              <rect width="100" height="100" fill="white" transform="translate(4)"/>
            </clipPath>
      </defs>
      </svg> */}
</div>




    </div>
</div>
  )
}

export default Loader