import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-show-orange">2M</h3>
          <p className="text-gray-700">Active Users</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-show-orange">10K+</h3>
          <p className="text-gray-700">Job Positions</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-show-orange">5K+</h3>
          <p className="text-gray-700">Employers</p>
        </div>
      </div>
    </section>
  );
};
