import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.length === 0 ? (
          <p className="text-gray-500">No activity yet</p>
        ) : (
          activities.map((activity, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-3">
              <div>
                <div className="font-semibold">{activity.action}</div>
                <div className="text-sm text-gray-500">
                  {new Date(activity.date).toLocaleString()}
                </div>
                {activity.description && (
                  <div className="text-sm text-gray-600">{activity.description}</div>
                )}
              </div>
              <div className="text-right">
                <div className={`font-bold ${activity.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {activity.pnlPercent >= 0 ? '+' : ''}{activity.pnlPercent.toFixed(2)}%
                </div>
                <div className="text-sm text-gray-500">
                  ${activity.balance.toFixed(2)}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityList;
