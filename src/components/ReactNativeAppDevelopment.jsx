import React from "react";

const ReactNativeAppDevelopment = () => {
  return (
    <div className="w-[1920px] h-[936px] flex items-center justify-center bg-gray-100 p-0">
      <div className="w-full max-w-[1400px] flex flex-col items-center text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold">React Native App Development</h2>
        <p className="mt-2 text-gray-600">
          At <span className="font-semibold">Tech Devise</span> we offer various kinds of services under <span className="font-semibold">React Native App Development</span>. All our
          services aim to satisfy your needs. Contact us today to know more about our services.
        </p>

        {/* Content Section */}
        <div className="mt-10 flex gap-6">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img src="/mnt/data/image.png" alt="React Native Development" className="w-[400px] h-auto" />
          </div>

          {/* Services Section */}
          <div className="flex gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  🔧
                </span>
              </div>
              <h3 className="text-xl font-bold">React Native App Development</h3>
              <p className="text-gray-600 mt-2">
                Under our React Native App Development service we offer cross-development apps that can be used to run on Android, iOS, and other
                mobile platforms as well. React Native App Development costs less and also takes less time to develop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-80">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  ⚙️
                </span>
              </div>
              <h3 className="text-xl font-bold">React Native Customizations</h3>
              <p className="text-gray-600 mt-2">
                Our team specializes in React Native app Customizations. Hence, whatever feature you require in your app, our team will be able to
                offer the same. Also, our React Native Customizations are affordably priced. Contact us today for the best quote.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-6 flex space-x-2">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ReactNativeAppDevelopment;
