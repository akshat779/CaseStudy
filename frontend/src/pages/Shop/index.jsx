import { Helmet } from "react-helmet";
import { Button, Heading, CheckBox, Text, Img } from "../../components";
import Header from "../../components/Header";
import ProductDetails from "../../components/ProductDetails";
import React, { Suspense,useEffect } from "react";
import FooterPage from "../../components/Footer";
import productStore from "../../store/productStore";
import { Link } from "react-router-dom";

export default function ShopPage() {
  const {productsList=[], fetchProducts, loadMoreProducts, hasMoreProducts, searchQuery} = productStore();
  const [categories, setCategories] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const noOfProducts = filteredProducts.length || productsList.length;

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);

  useEffect(() => {
    const categories = productsList.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];
    const finalArray = uniqueCategories.map((category) => ({name:category}))
    setCategories([...finalArray]);
  },[productsList])

  useEffect(() => {
    let filtered = [...productsList];
    
    // Filter by categories if any are selected
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by search query if present
    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategories, productsList, searchQuery]);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryName)) {
        return prev.filter(c => c !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    productStore.getState().setSearchQuery("");
  };

  const productsToDisplay = filteredProducts.length > 0 || selectedCategories.length > 0 || searchQuery 
    ? filteredProducts 
    : productsList;

  return (
    <>
      <Header className="self-stretch" />
      <div className="flex w-full flex-col items-center gap-[42px] bg-background_primary">
        <div className="flex flex-col items-start gap-[34px] self-stretch mt-5">
          <div className="container-sm mb-[46px]  ">
            {/* Top Heading */}
            <div className="flex flex-col items-start gap-2">
              <Heading
                size="heading2xl"
                as="h1"
                className="text-[36px] font-semibold tracking-[-1.08px] !text-colors-white md:text-[34px] sm:text-[32px]"
              >
                Shop Products !
              </Heading>
              <Text
                size="paragraph_02"
                as="p"
                className="w-[42%] text-[18px] font-normal leading-[26px] tracking-[-0.30px] !text-colors-white md:w-full"
              >
                Choose the Categories of Products that suits you the best.
              </Text>
              {searchQuery && (
                <Text
                  size="paragraph_02"
                  as="p"
                  className="w-full text-[16px] font-normal leading-[26px] tracking-[-0.30px] !text-colors-white mt-2"
                >
                  Search results for: <span className="font-bold">"{searchQuery}"</span>
                </Text>
              )}
            </div>
            {/* Top Heading Ends */}
          </div>
        </div>
        <div className="container-md mb-1 md:px-5 ">
          <div className="flex flex-row justify-evenly  align-start gap-[18px] min-h-screen">
            <div className="flex flex-col gap-2.5 sticky top-5">
              <div className="flex items-start justify-center  min-h-screen">
                {/* filter categories */}
                <div className="flex flex-col flex-wrap items-center gap-[19px] sticky top-5">
                  <div className="flex items-center justify-between w-full gap-2.5">
                    <Heading
                      size="heading_04"
                      as="h2"
                      className="text-[22px] font-semibold tracking-[-0.55px]"
                    >
                      Filters
                    </Heading>
                    <Text
                      onClick={clearFilters}
                      size="texts"
                      as="p"
                      className="self-end text-[14px] font-normal tracking-[-0.40px] !text-gray-400 underline cursor-pointer"
                    >
                      Clear filters
                    </Text>
                  </div>
                  {/* categories */}
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading
                      size="headingxs"
                      as="h4"
                      className="text-[14px] font-bold tracking-[-0.40px]"
                    >
                      Categories
                    </Heading>
                    {categories.map((category, index) => (
                      
                      <CheckBox
                        name={category.name}
                        label={category.name}
                        id={category.name}
                        key={"category" + index}
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryChange(category.name)}
                        className="gap-3 pr-[34px] text-[13px] tracking-[-0.40px] text-text_primary sm:pr-5"
                      />
                  
                      // console.log(category)
                    ))}
                  </div>
                  {/* categories */}
                </div>
                {/* filter categories */}
              </div>
            </div>

            {/* products */}
            <div className="flex-col items-start md:flex-col">
              <div className="mt-1 flex flex-1 flex-col items-center gap-[42px] self-center md:self-stretch">
                {productsToDisplay.length === 0 && (
                  <div className="flex flex-col items-center justify-center p-10">
                    <Img src="/images/defaultNoData.png" alt="No products found" className="w-32 h-32 mb-4" />
                    <Text
                      size="heading_04"
                      as="p"
                      className="text-[18px] font-semibold text-center"
                    >
                      No products found
                    </Text>
                    <Text
                      size="paragraph_04"
                      as="p"
                      className="text-[14px] font-normal text-center mt-2"
                    >
                      Try adjusting your search or filter criteria
                    </Text>
                  </div>
                )}
                <div className="ml-11 grid grid-cols-2 gap-8 self-stretch md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {productsToDisplay.map((d, index) => (
                      <>
                      <Link to={`/productpagetwo/${d.id}`} onClick={() => fetchProducts(d.id)}>
                      {/* {console.log({...d})} */}
                      <ProductDetails {...d} key={"productgrid" + index} />
                      </Link>
                      </>
                    ))}
                  </Suspense>
                </div>
                {productsToDisplay.length > 0 && (
                  <Button
                    onClick={() => loadMoreProducts()}
                    shape="square"
                    className={`min-w-[298px] p-2 !border-[0.5px] px-[34px] font-semibold tracking-[-0.40px] sm:px-5 hover:bg-[#1D1D1D] hover:text-[#FFFFFF] !text-black-900_7f ${!hasMoreProducts ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!hasMoreProducts || searchQuery}
                  >
                    {hasMoreProducts && !searchQuery ? 'Load more products' : 'No more products'}
                  </Button>
                )}
              </div>
            </div>
            {/* products */}
            {/* SortBy */}
            <div className="h-[100vh]">
              <div className="flex flex-wrap items-end self-end border border-solid border-indigo-900 p-1.5 sticky top-5">
                <Text
                  size="textxs"
                  as="p"
                  className="text-[13px] font-normal tracking-[-0.30px] !text-black-900_7f"
                >
                  Sort By
                </Text>
                <Heading
                  size="headingxs"
                  as="h3"
                  className="ml-2.5 !font-inter text-[14px] font-bold tracking-[-0.30px]"
                >
                  Popular
                </Heading>

                <Img
                  src="images/img_arrow_down_text_primary.svg"
                  alt="Arrowdownone"
                  className="ml-1 h-[24px] self-center"
                />
              </div>
              <Text
                size="paragraph_04"
                as="p"
                className="text-[14px] font-normal tracking-[-0.40px] mt-4 sticky top-16"
              >
                Showing {noOfProducts} Products
              </Text>
            </div>
            {/* SortBy */}
          </div>
        </div>
      </div>
      <FooterPage />  
    </>
  );
}
