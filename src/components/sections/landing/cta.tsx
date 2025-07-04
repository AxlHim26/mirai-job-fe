export const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-2xl p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="text-white lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Start posting jobs today
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Start posting jobs for only $10.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Sign Up For Free
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Job Posting Dashboard</h3>
                <div className="text-2xl font-bold text-blue-600">21,447</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                  <div>
                    <div className="font-medium text-sm">
                      Recent Applications
                    </div>
                    <div className="text-xs text-gray-500">
                      124 new applications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
