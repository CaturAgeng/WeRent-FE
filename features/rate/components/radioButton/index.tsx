import React from 'react';

interface RadioButtonProps {
    fitScale: string;
    setFitScale: (value: string) => void;
    required?: boolean;
    showErrors?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ fitScale, setFitScale, required = false, showErrors = false }) => {
    return (
        <div>
            <div className="mt-2">
                <input 
                    type="radio" 
                    id="small" 
                    name="fit_scale" 
                    className="mr-2" 
                    value="Small"
                    checked={fitScale === 'Small'}
                    onChange={(e) => setFitScale(e.target.value)} 
                />
                <label htmlFor="small">Small</label>
            </div>
            <div className="mt-2">
                <input 
                    type="radio" 
                    id="trueToSize" 
                    name="fit_scale" 
                    className="mr-2" 
                    value="True to Size"
                    checked={fitScale === 'True to Size'}
                    onChange={(e) => setFitScale(e.target.value)} 
                />
                <label htmlFor="trueToSize">True to Size</label>
            </div>
            <div className="mt-2">
                <input 
                    type="radio" 
                    id="large" 
                    name="fit_scale" 
                    className="mr-2" 
                    value="Large"
                    checked={fitScale === 'Large'}
                    onChange={(e) => setFitScale(e.target.value)} 
                />
                <label htmlFor="large">Large</label>
            </div>
            {required && showErrors && !fitScale && <p className='text-red-600 text-sm mt-2'>Fit scale is required.</p>}
        </div>
    );
};

export default RadioButton;
