import PreviewWrapper from "@/components/features/review/preview/previewWrapper";

const Home = () => {
  return (
    <div className="p-4">
      <PreviewWrapper initialSmall={1} initialTrueToSize={1} initialLarge={1} />
    </div>
  );
};

export default Home;