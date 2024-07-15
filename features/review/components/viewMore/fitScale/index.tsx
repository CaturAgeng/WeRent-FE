import React from 'react';

interface FitScaleProps {
  fitScale: {
    small: number;
    trueToSize: number;
    large: number;
  };
}

const FitScale: React.FC<FitScaleProps> = ({ fitScale }) => {
  const scales = [
    { label: 'Small', value: fitScale.small, color: 'bg-blue-500' },
    { label: 'True to Size', value: fitScale.trueToSize, color: 'bg-green-500' },
    { label: 'Large', value: fitScale.large, color: 'bg-red-500' }
  ];

  return (
    <div className="mt-2">
      <div className="font-bold text-xl mb-2">Fit Scale</div>
      <div className="flex justify-between">
        {scales.map((scale) => (
          <div key={scale.label} className="flex flex-col items-center w-1/3">
            <div className="text-center font-medium mb-1">{scale.value}%</div>
            <div className="w-full bg-gray-200 h-6 rounded-full mb-1">
              <div
                className={`${scale.color} h-6 rounded-full`}
                style={{ width: `${scale.value}%` }}
              ></div>
            </div>
            <div className="text-center font-medium">{scale.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitScale;
