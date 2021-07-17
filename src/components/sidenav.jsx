import React from "react";

const Sidenav = () => {
  return (
    <div className="side-nav">
      <h5 className="menu-heading">MENU</h5>
      <div className="section">
        <div className="sidenav-items active">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09299 13.8495V11.811C6.09299 11.2906 6.51792 10.8688 7.04209 10.8688L8.95821 10.8688C9.20993 10.8688 9.45134 10.968 9.62933 11.1447C9.80732 11.3214 9.90731 11.5611 9.90731 11.811V13.8495C9.90572 14.0658 9.99118 14.2738 10.1447 14.4273C10.2983 14.5809 10.5072 14.6672 10.7251 14.6672H12.0324C12.6429 14.6688 13.229 14.4291 13.6612 14.0011C14.0935 13.5731 14.3365 12.9919 14.3365 12.3858V6.57847C14.3365 6.08887 14.1178 5.62445 13.7395 5.31034L9.29248 1.78447C8.51891 1.16627 7.41054 1.18623 6.66006 1.83188L2.31447 5.31034C1.91829 5.61519 1.6815 6.08098 1.6698 6.57847V12.3799C1.6698 13.6431 2.70139 14.6672 3.97392 14.6672H5.25133C5.70395 14.6672 6.0718 14.3047 6.07508 13.8554L6.09299 13.8495Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Discover</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.22647 8.0048L7.22748 8.24087C7.23559 9.17719 7.29203 10.0126 7.38937 10.542C7.38937 10.5515 7.49556 11.0766 7.56319 11.2514C7.66937 11.504 7.86137 11.7184 8.10209 11.8543C8.29482 11.9512 8.497 12.0004 8.70863 12.0004C8.87499 11.9927 9.14935 11.909 9.34517 11.8388L9.50789 11.7764C10.5857 11.3483 12.646 9.94936 13.4351 9.09384L13.4933 9.03404L13.7529 8.75384C13.9166 8.53941 14.0031 8.27725 14.0031 7.99526C14.0031 7.74264 13.926 7.49002 13.7718 7.28588C13.7257 7.21973 13.6513 7.13488 13.5852 7.06319L13.3324 6.79866C12.4628 5.91754 10.5799 4.68162 9.60389 4.27211C9.60389 4.26329 8.99736 4.00994 8.70863 4.0004H8.67009C8.22718 4.0004 7.81337 4.25301 7.60174 4.66131C7.54392 4.77293 7.48846 4.99158 7.44628 5.18362L7.37047 5.5462C7.28392 6.12928 7.22647 7.02371 7.22647 8.0048ZM3.00528 6.98817C2.45183 6.98817 2.00311 7.44126 2.00311 8.0001C2.00311 8.55894 2.45183 9.01204 3.00528 9.01204L5.47143 8.79393C5.90561 8.79393 6.25761 8.43924 6.25761 8.0001C6.25761 7.5617 5.90561 7.20627 5.47143 7.20627L3.00528 6.98817Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Trending</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.48696 4.86051V2.18783C7.48696 1.90364 7.71362 1.66682 8.00029 1.66682C8.25696 1.66682 8.47441 1.86582 8.50887 2.11788L8.51362 2.18783V4.86051L11.7002 4.86071C13.2869 4.86071 14.5905 6.16001 14.6636 7.78043L14.6669 7.92422V11.2838C14.6669 12.9155 13.4087 14.255 11.8456 14.3302L11.7069 14.3335L4.29356 14.3335C2.70689 14.3335 1.40962 13.0407 1.33678 11.4143L1.33356 11.27L1.33356 7.91733C1.33356 6.28556 2.5855 4.93963 4.14822 4.86406L4.28689 4.86071L7.48689 4.86071V9.12897L6.42022 8.02748C6.22022 7.82095 5.89356 7.82095 5.69356 8.02748C5.59356 8.13075 5.54689 8.26843 5.54689 8.40612C5.54689 8.51076 5.57676 8.61981 5.6399 8.71211L5.69356 8.77787L7.63356 10.7881C7.72689 10.8913 7.86022 10.9464 8.00022 10.9464C8.11133 10.9464 8.22245 10.9082 8.31041 10.8357L8.36022 10.7881L10.3002 8.77787C10.5002 8.57134 10.5002 8.23401 10.3002 8.02748C10.1184 7.83973 9.8319 7.82266 9.63105 7.97628L9.57356 8.02748L8.51356 9.12897V4.86071L7.48696 4.86051Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Streaming</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.10546 11.094L9.99985 9.18069C10.1913 8.98069 10.1913 8.66736 9.99325 8.47403C9.80183 8.28069 9.4916 8.28069 9.30018 8.47403L8.25067 9.54069V6.32736C8.25067 6.04736 8.03285 5.82736 7.76222 5.82736C7.4916 5.82736 7.26717 6.04736 7.26717 6.32736V9.54069L6.21767 8.47403C6.02625 8.28069 5.71602 8.28069 5.5246 8.47403C5.33318 8.66736 5.33318 8.98069 5.5246 9.18069L7.41239 11.094C7.45859 11.1407 7.5114 11.174 7.5708 11.2007C7.63021 11.2274 7.69622 11.2407 7.76222 11.2407C7.82823 11.2407 7.88764 11.2274 7.94704 11.2007C8.00645 11.174 8.05925 11.1407 8.10546 11.094ZM12.8885 6.01777C13.0437 6.01598 13.2126 6.01403 13.3661 6.01403C13.5377 6.01403 13.6698 6.14736 13.6698 6.31403V11.674C13.6698 13.3274 12.3364 14.6674 10.6995 14.6674L5.45194 14.6674C3.72917 14.6674 2.33643 13.2607 2.33643 11.5274V4.3407C2.33643 2.68736 3.66316 1.33403 5.31332 1.33403L8.83808 1.33403C9.00309 1.33403 9.14171 1.47403 9.14171 1.6407V3.78736C9.14171 5.00736 10.1318 6.00736 11.3463 6.01403C11.6253 6.01403 11.8749 6.01615 12.0928 6.01799C12.2616 6.01943 12.4114 6.0207 12.541 6.0207C12.635 6.0207 12.7568 6.01929 12.8885 6.01777ZM13.0728 5.04477C12.5309 5.04677 11.8913 5.04477 11.4313 5.0401C10.7012 5.0401 10.0999 4.43277 10.0999 3.69543V1.9381C10.0999 1.65077 10.4451 1.5081 10.6418 1.71543C11.1503 2.24899 11.9289 3.06679 12.5868 3.7578C12.8529 4.03726 13.0992 4.29598 13.2999 4.50677C13.4926 4.70877 13.3514 5.0441 13.0728 5.04477Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Playlist</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8461 5.58767L14.6669 5.58767C14.6669 3.32286 13.3099 1.9998 11.0106 1.9998L4.98985 1.9998C2.69059 1.9998 1.33356 3.32286 1.33356 5.55878V10.4408C1.33356 12.6767 2.69059 13.9998 4.98985 13.9998L11.0106 13.9998C13.3099 13.9998 14.6669 12.6767 14.6669 10.4408V10.2328L11.8461 10.2328C10.537 10.2328 9.47578 9.19815 9.47578 7.9218C9.47578 6.64546 10.537 5.61078 11.8461 5.61078V5.58767ZM11.8449 6.58144L14.1679 6.58144C14.4428 6.58144 14.6656 6.79872 14.6656 7.06675V8.7538C14.6624 9.02053 14.4414 9.236 14.1679 9.23912L11.8982 9.23912C11.2355 9.24781 10.656 8.80541 10.5056 8.17604C10.4304 7.78536 10.536 7.38221 10.7944 7.07464C11.0527 6.76707 11.4372 6.58654 11.8449 6.58144ZM11.9486 8.35523H12.1679C12.4493 8.35523 12.6775 8.13277 12.6775 7.85836C12.6775 7.58394 12.4493 7.36149 12.1679 7.36149H11.9486C11.814 7.35994 11.6844 7.411 11.5886 7.50326C11.4929 7.59553 11.439 7.72133 11.439 7.85258C11.439 8.12794 11.6662 8.35206 11.9486 8.35523ZM4.49307 5.58804L8.25603 5.58804C8.53749 5.58804 8.76566 5.36559 8.76566 5.09117C8.76566 4.81676 8.53749 4.5943 8.25603 4.5943L4.49307 4.5943C4.21391 4.59428 3.98668 4.81324 3.98344 5.08539C3.98342 5.36076 4.21065 5.58488 4.49307 5.58804Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Bookmark</p>
        </div>
      </div>
      <h5 className="menu-heading">CATEGORIES</h5>
      <div className="section">
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09299 13.8495V11.811C6.09299 11.2906 6.51792 10.8688 7.04209 10.8688L8.95821 10.8688C9.20993 10.8688 9.45134 10.968 9.62933 11.1447C9.80732 11.3214 9.90731 11.5611 9.90731 11.811V13.8495C9.90572 14.0658 9.99118 14.2738 10.1447 14.4273C10.2983 14.5809 10.5072 14.6672 10.7251 14.6672H12.0324C12.6429 14.6688 13.229 14.4291 13.6612 14.0011C14.0935 13.5731 14.3365 12.9919 14.3365 12.3858V6.57847C14.3365 6.08887 14.1178 5.62445 13.7395 5.31034L9.29248 1.78447C8.51891 1.16627 7.41054 1.18623 6.66006 1.83188L2.31447 5.31034C1.91829 5.61519 1.6815 6.08098 1.6698 6.57847V12.3799C1.6698 13.6431 2.70139 14.6672 3.97392 14.6672H5.25133C5.70395 14.6672 6.0718 14.3047 6.07508 13.8554L6.09299 13.8495Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Live Stream</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.22647 8.0048L7.22748 8.24087C7.23559 9.17719 7.29203 10.0126 7.38937 10.542C7.38937 10.5515 7.49556 11.0766 7.56319 11.2514C7.66937 11.504 7.86137 11.7184 8.10209 11.8543C8.29482 11.9512 8.497 12.0004 8.70863 12.0004C8.87499 11.9927 9.14935 11.909 9.34517 11.8388L9.50789 11.7764C10.5857 11.3483 12.646 9.94936 13.4351 9.09384L13.4933 9.03404L13.7529 8.75384C13.9166 8.53941 14.0031 8.27725 14.0031 7.99526C14.0031 7.74264 13.926 7.49002 13.7718 7.28588C13.7257 7.21973 13.6513 7.13488 13.5852 7.06319L13.3324 6.79866C12.4628 5.91754 10.5799 4.68162 9.60389 4.27211C9.60389 4.26329 8.99736 4.00994 8.70863 4.0004H8.67009C8.22718 4.0004 7.81337 4.25301 7.60174 4.66131C7.54392 4.77293 7.48846 4.99158 7.44628 5.18362L7.37047 5.5462C7.28392 6.12928 7.22647 7.02371 7.22647 8.0048ZM3.00528 6.98817C2.45183 6.98817 2.00311 7.44126 2.00311 8.0001C2.00311 8.55894 2.45183 9.01204 3.00528 9.01204L5.47143 8.79393C5.90561 8.79393 6.25761 8.43924 6.25761 8.0001C6.25761 7.5617 5.90561 7.20627 5.47143 7.20627L3.00528 6.98817Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Tutorial</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.48696 4.86051V2.18783C7.48696 1.90364 7.71362 1.66682 8.00029 1.66682C8.25696 1.66682 8.47441 1.86582 8.50887 2.11788L8.51362 2.18783V4.86051L11.7002 4.86071C13.2869 4.86071 14.5905 6.16001 14.6636 7.78043L14.6669 7.92422V11.2838C14.6669 12.9155 13.4087 14.255 11.8456 14.3302L11.7069 14.3335L4.29356 14.3335C2.70689 14.3335 1.40962 13.0407 1.33678 11.4143L1.33356 11.27L1.33356 7.91733C1.33356 6.28556 2.5855 4.93963 4.14822 4.86406L4.28689 4.86071L7.48689 4.86071V9.12897L6.42022 8.02748C6.22022 7.82095 5.89356 7.82095 5.69356 8.02748C5.59356 8.13075 5.54689 8.26843 5.54689 8.40612C5.54689 8.51076 5.57676 8.61981 5.6399 8.71211L5.69356 8.77787L7.63356 10.7881C7.72689 10.8913 7.86022 10.9464 8.00022 10.9464C8.11133 10.9464 8.22245 10.9082 8.31041 10.8357L8.36022 10.7881L10.3002 8.77787C10.5002 8.57134 10.5002 8.23401 10.3002 8.02748C10.1184 7.83973 9.8319 7.82266 9.63105 7.97628L9.57356 8.02748L8.51356 9.12897V4.86071L7.48696 4.86051Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Competition</p>
        </div>
        <div className="sidenav-items">
          <div className="icons">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.10546 11.094L9.99985 9.18069C10.1913 8.98069 10.1913 8.66736 9.99325 8.47403C9.80183 8.28069 9.4916 8.28069 9.30018 8.47403L8.25067 9.54069V6.32736C8.25067 6.04736 8.03285 5.82736 7.76222 5.82736C7.4916 5.82736 7.26717 6.04736 7.26717 6.32736V9.54069L6.21767 8.47403C6.02625 8.28069 5.71602 8.28069 5.5246 8.47403C5.33318 8.66736 5.33318 8.98069 5.5246 9.18069L7.41239 11.094C7.45859 11.1407 7.5114 11.174 7.5708 11.2007C7.63021 11.2274 7.69622 11.2407 7.76222 11.2407C7.82823 11.2407 7.88764 11.2274 7.94704 11.2007C8.00645 11.174 8.05925 11.1407 8.10546 11.094ZM12.8885 6.01777C13.0437 6.01598 13.2126 6.01403 13.3661 6.01403C13.5377 6.01403 13.6698 6.14736 13.6698 6.31403V11.674C13.6698 13.3274 12.3364 14.6674 10.6995 14.6674L5.45194 14.6674C3.72917 14.6674 2.33643 13.2607 2.33643 11.5274V4.3407C2.33643 2.68736 3.66316 1.33403 5.31332 1.33403L8.83808 1.33403C9.00309 1.33403 9.14171 1.47403 9.14171 1.6407V3.78736C9.14171 5.00736 10.1318 6.00736 11.3463 6.01403C11.6253 6.01403 11.8749 6.01615 12.0928 6.01799C12.2616 6.01943 12.4114 6.0207 12.541 6.0207C12.635 6.0207 12.7568 6.01929 12.8885 6.01777ZM13.0728 5.04477C12.5309 5.04677 11.8913 5.04477 11.4313 5.0401C10.7012 5.0401 10.0999 4.43277 10.0999 3.69543V1.9381C10.0999 1.65077 10.4451 1.5081 10.6418 1.71543C11.1503 2.24899 11.9289 3.06679 12.5868 3.7578C12.8529 4.03726 13.0992 4.29598 13.2999 4.50677C13.4926 4.70877 13.3514 5.0441 13.0728 5.04477Z"
                fill="#808191"
              />
            </svg>
          </div>
          <p>Community</p>
        </div>
      </div>

      <div className="night-day-mode">
        <div className="toggle-icon">
          <div className="knob"></div>
        </div>
        <p>Night Mode</p>
      </div>
    </div>
  );
};

export default Sidenav;
