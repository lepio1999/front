// 제품 목록 데이터
var products = [
    { name: "제품 1", price: 100000, details: "제품 1에 대한 상세 정보입니다." },
    { name: "제품 2", price: 200000, details: "제품 2에 대한 상세 정보입니다." },
    { name: "제품 3", price: 300000, details: "제품 3에 대한 상세 정보입니다." }
  ];
  
  // 제품 목록 표시 함수
  function displayProductList() {
    var productList = document.getElementById("product-list");
  
    // 제품 목록을 동적으로 생성
    products.forEach(function(product) {
      var listItem = document.createElement("li");
      listItem.textContent = product.name + " - 가격: " + product.price + "원";
      
      // 제품 클릭 시 상세 정보 표시
      listItem.addEventListener("click", function() {
        displayProductDetails(product);
      });
      
      productList.appendChild(listItem);
    });
  }
  
  // 제품 상세 정보 표시 함수
  function displayProductDetails(product) {
    var productDetails = document.getElementById("product-details");
    productDetails.innerHTML = "<h3>" + product.name + "</h3><p>" + product.details + "</p>";
    productDetails.classList.remove("hidden");
  }
  
  // 초기화 함수
  function initialize() {
    displayProductList();
  }
  
  // 초기화 함수 호출
  initialize();