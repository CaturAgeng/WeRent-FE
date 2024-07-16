// export default function Page() {
//     return (
//         <div className="flex justify-center items-center h-screen w-screen">
//             <h1 className="text-3xl font-extrabold">Review Page</h1>
//         </div>
//     );
// }

import React from "react";
import ViewMoreWrapper from "@/features/review/components/viewMore/viewMoreWrapper";

const ReviewsPage: React.FC = () => {
  return (
    <div>
      <ViewMoreWrapper />
    </div>
  );
};

export default ReviewsPage;