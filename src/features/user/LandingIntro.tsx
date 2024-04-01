import React from 'react';

const LandingIntro: React.FC = () => {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">
            <img
              src="/PM.png"
              className="w-12 inline-block mr-2 mask mask-circle"
              alt="react-redux-toolkit-template-logo"
            />
            react-redux-toolkit-template
          </h1>

          <div className="text-center mt-12">
            <img
              src="./intro.png"
              alt="react-redux-toolkit-template Admin Template"
              className="w-48 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          {/* <TemplatePointers /> */}
        </div>
      </div>
    </div>
  );
};

export default LandingIntro;
