import React from "react";
import NewProduct from "../newproducts/newproducts.component";

import ProductList from "../productlist/productlist.component";
import Users from "../users/users";
import UsersFunctional from "../users/users.functional";

function App() {
  return (
    <div>
      {/* <Users /> */}
      <ProductList />
      {/* <UsersFunctional /> */}
      <NewProduct />
    </div>
  );
}

export default App;
