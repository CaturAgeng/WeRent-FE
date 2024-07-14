import React from 'react';

interface RadioButtonProps {
    fitScale: string;
    setFitScale: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ fitScale, setFitScale }) => {
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
        </div>
    );
};

export default RadioButton;
