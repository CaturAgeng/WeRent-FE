
const mockUser = {
    id: 1,
    name: "John Doe",
    email: "test@example.com",
    access_token:"ytta"
};

export const dummyAxiosInstance = {
    post: async(url: string, payload: any) => {
        console.log(`Mock request to ${url} with payload:`, payload);

        // simulate different endpoints
        if (url ==="/user/Login") {
            if (payload.email === "test@example.com" && payload.password === "test123") {
                return {data: mockUser};
            } else {
                const error = {
                    response: {
                        data: {
                            error: {
                                message: "Invalid email or password"
                            }
                        }
                    }
                };
                throw error;
            }
        }

        throw new Error("Unexpected error");
    }
}