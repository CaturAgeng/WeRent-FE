export type ratingRequestProps = {
    userId: number;
    productId: number;
    value: number;
}

export type starRatingProps = {
    userId: number;
    productId: number;
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
    required?: boolean;
    showErrors?: boolean;
}

export type rateWrapperProps = {
    userId: number;
    productId: number;
}

export type fitScaleProps = {
    fitScale: string;
    setFitScale: React.Dispatch<React.SetStateAction<string>>;
    required?: boolean;
}

export type descriptionProps = {
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}