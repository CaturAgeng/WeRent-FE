import React from "react";
import { fitScaleProps } from "features/rate";

const FitScale: React.FC<fitScaleProps> = ({ fitScale, setFitScale, required = false }) => {
    const handleFitScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFitScale(event.target.value);
    };

    return (
        <div className="space-x-2">
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    className="form-radio"
                    value="small"
                    checked={fitScale === 'small'}
                    onChange={handleFitScaleChange}
                />
                <span className="ml-2">Small</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    className="form-radio"
                    value="trueToSize"
                    checked={fitScale === 'trueToSize'}
                    onChange={handleFitScaleChange}
                />
                <span className="ml-2">True to Size</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    className="form-radio"
                    value="large"
                    checked={fitScale === 'large'}
                    onChange={handleFitScaleChange}
                />
                <span className="ml-2">Large</span>
            </label>
            {required && !fitScale && <p className='text-red-600 text-sm mt-2'>Fit scale is required.</p>}
        </div>
    );
};

export default FitScale;