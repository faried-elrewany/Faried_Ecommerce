import React from "react";
import Row from "../../Components/Row";
import clothe from "../../images/clothe.png";
import Container from "../../Components/Container";
import Pagination from "../../Components/Pagination";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import CategoryCard from "../../Components/Category/CategoryCard";
const AllCategoryPage = () => {
  return (
    <>
      <Container>
        <h2 className="font-bold text-red-900 text-2xl m-4">كل التصنيفات</h2>
        <Row>
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        </Row>
        <Pagination />
      </Container>
    </>
  );
};

export default AllCategoryPage;
