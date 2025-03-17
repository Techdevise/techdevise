import React from 'react';

const Testimonials = () => {
  return (
    <div className="text-white container mx-auto py-12 w-1680">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-8">
        What our customers
        <span className="text-green-400"> say</span>
        about us
      </h2>

      {/* Testimonials Grid */}
      <div className="flex justify-center space-x-4">
        {/* Testimonial 1 */}
        <div className="bg-green-900 p-6 rounded-lg">
          <img 
            alt="Portrait of a smiling woman" 
            className="rounded-full mb-4 mx-auto"
            src="https://storage.googleapis.com/a1aa/image/8RPtXWAc-XV9WPSuK_-Nvi9WKDDbyPddgbRs2WYP5AM.jpg" 
            width="150" 
            height="150"
          />
          <div className="text-center">
            <i className="fas fa-play-circle text-4xl text-white"></i>
          </div>
        </div>

        {/* Testimonial 2 - Active Card */}
        <div className="bg-green-900 p-6 rounded-lg w-[500px]">
          <img 
            alt="Portrait of a smiling man with a cap" 
            className="rounded-full mb-4 mx-auto"
            src="https://storage.googleapis.com/a1aa/image/_BViZ84RIYAnjuGZmRWPm-4NLYKZb6fArT5d_bRcYWg.jpg" 
            width="150" 
            height="150"
          />
          <h3 className="text-xl font-bold text-center">Alex Johnson</h3>
          <p className="text-sm mt-2 text-center">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <div className="flex justify-center mt-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-yellow-500"></i>
            ))}
          </div>
          <div className="text-right mt-4">
            <i className="fas fa-quote-right text-4xl text-green-800"></i>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-green-900 p-6 rounded-lg">
          <img 
            alt="Portrait of a smiling man with curly hair" 
            className="rounded-full mb-4 mx-auto"
            src="https://storage.googleapis.com/a1aa/image/imcqHYqDvzglQTMch50Ze7rGDlTMVbljgJXh76lSsyc.jpg" 
            width="150" 
            height="150"
          />
          <div className="text-center">
            <i className="fas fa-play-circle text-4xl text-white"></i>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-green-900 p-6 rounded-lg">
          <img 
            alt="Portrait of a smiling woman with long hair" 
            className="rounded-full mb-4 mx-auto"
            src="https://storage.googleapis.com/a1aa/image/D4ZkfEb_YkN501dumGeuy0zOYWVq6l-IESc7J4X0KTg.jpg" 
            width="150" 
            height="150"
          />
          <div className="text-center">
            <i className="fas fa-play-circle text-4xl text-white"></i>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button className="bg-green-400 text-black p-2 rounded-full hover:bg-green-300 transition-colors">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="bg-green-400 text-black p-2 rounded-full hover:bg-green-300 transition-colors">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
