import booknow from "../images/booknow1.jpeg";
import BookComponent from "../components/booknow/BookComponent";
import Carousel from "../components/booknow/Carousel";
import ReviewCard from "../components/ReviewCard";

function BooknowPage() {
  return (
    <>
      <div className="relative w-full ">
        <img src={booknow} className="w-full" />
        <BookComponent />
      </div>
      <Carousel />

      <h1 className=" text-[#9AC0B5] text-[40px] text-center">
        Review from user
      </h1>
      <div className="h-[200px] flex mt-[80px] mb-[80px] justify-center gap-10">
        <ReviewCard />

        <ReviewCard />

        <ReviewCard />

        <ReviewCard />

        <ReviewCard />
      </div>
    </>
  );
}

export default BooknowPage;
