import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./page/Layout.jsx";
import PosLogin from "./page/Login.jsx";
import POSHome from "./page/POSHome.jsx";

// pos Transaction
import PosTrans from "./page/POS/Transaction/PosTrans.jsx";
import PosTransOrder from "./page/POS/Transaction/PosTransOrder.jsx";
import PosTransUnsettled from "./page/POS/Transaction/PosTransUnsettled.jsx";
import PosTransInventory from "./page/POS/Transaction/PosTransInventory.jsx";
import PosTransHistory from "./page/POS/Transaction/PosTransHistory.jsx";
import PosTransBatches from "./page/POS/Transaction/PosTransBatches.jsx";
import PosTransCustomerOrder from "./page/POS/Transaction/PosTransCustomerOrder.jsx";

// pos Items
import PosItems from "./page/POS/Items/PosItems.jsx";

// pos Customers
import PosCustomer from "./page/POS/Customers/PosCustomer.jsx";
import PosCusContacts from "./page/POS/Customers/PosCusContacts.jsx";
import PosCusDeliveryAddress from "./page/POS/Customers/PosCusDeliveryAddress.jsx";
import PosCusPaymentMethods from "./page/POS/Customers/PosCusPaymentMethods.jsx";
import PosCusShippingMethods from "./page/POS/Customers/PosCusShippingMethods.jsx";
import PosCusDocs from "./page/POS/Customers/PosCusDocs.jsx";
import PosCusOrders from "./page/POS/Customers/PosCusOrders.jsx";

// pos Sales Analysis
import PosSalesAnalysis from "./page/POS/SalesAnalysis/PosSalesAnalysis.jsx";
// pos Settings

// pos Change Password
import PosChangePassword from "./page/POS/ChangePassword/PosChangePassword.jsx";

// Businesspage
// import Home from "./page/Businesspage/Businesspage.jsx";
import BusinessLayout from "./page/BusinessLayout.jsx";

// GS Settings
import Default from "./page/GS/settings/Default.jsx";
import Codes from "./page/GS/settings/Codes.jsx";
import Transaction from "./page/GS/settings/Transaction.jsx";
import Currencies from "./page/GS/settings/Currencies.jsx";
import GL_interface from "./page/GS/settings/GL_Interface.jsx";
import GL_Message from "./page/GS/settings/Message.jsx";
import GL_Holiday from "./page/GS/settings/Holiday.jsx";
import GL_Vehicles from "./page/GS/settings/Vehicles.jsx";

// GS Customer
import GSCustomer from "./page/GS/customer/Customer.jsx";
import GSSuppiles from "./page/GS/supplies/Supplies.jsx";

// GS Item
import GSItem from "./page/GS/items/Item.jsx";
import GSList from "./page/GS/list/List.jsx";
import GSUtilities from "./page/GS/Utilities/Utilities.jsx";
import GSPriceDiscount from "./page/GS/price & discount/GSPrice&Discount.jsx";
import GS_StandardSellingPrices from "./page/GS/price & discount/Standard Selling Prices/GS_StandardSellingPrices.jsx";
import GS_Standardbuyingprice from "./page/GS/price & discount/Standard Buying Prices/GS_Standardbuyingprice.jsx";
import GS_StandardBuyingDiscounts from "./page/GS/price & discount/Standard Buying Discounts/GS_StandardBuyingDiscounts.jsx";
import GS_StandardSellingRateTables from "./page/GS/price & discount/Standard Selling Rate Tables/GS_StandardSellingRateTables.jsx";
import GS_StandardBuyingRateTables from "./page/GS/price & discount/Standard Buying Rate Tables/GS_StandardBuyingRateTables.jsx";
import GS_SpecialSellingPrices from "./page/GS/price & discount/Special (Promo-Code) Selling Prices/GS_SpecialPromoCodeSellingPrices.jsx";
import GS_SpecialBuyingPrices from "./page/GS/price & discount/Special (Promo-Code) Buying Prices/GS_SpecialPromoCodeBuyingPrices.jsx";
import GS_ContractSellingPrices from "./page/GS/price & discount/Contract Selling Prices/GS_ContractSellingPrices.jsx";
import GS_ContractSellingDiscounts from "./page/GS/price & discount/Contract Selling Discounts/GS_ContractSellingDiscounts.jsx";
import GS_ContractBuyingPrices from "./page/GS/price & discount/Contract Buying Prices/GS_ContractBuyingPrices.jsx";
import GS_ContractBuyingDiscounts from "./page/GS/price & discount/Contract Buying Discounts/GS_ContractBuyingDiscounts.jsx";
import GS_CustomerList from "./page/GS/list/Customer List/GS_customer_list.jsx";
import BusinessPagecreate from "./page/Businesspage/BusinessPagecreate.jsx";
import UserCreatePage from "./page/UserCreation/UserCreatePage.jsx";
import BranchManager from "./page/Businesspage/BranchManager.jsx";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <POSHome /> },
        // pos Transaction
        { path: "/pos-transactions", element: <PosTrans /> },
        { path: "/pos-transactions/pos-order", element: <PosTransOrder /> },
        {
          path: "/pos-transactions/pos-unsetteled",
          element: <PosTransUnsettled />,
        },
        {
          path: "/pos-transactions/inventory-pos",
          element: <PosTransInventory />,
        },
        { path: "/pos-transactions/pos-history", element: <PosTransHistory /> },
        { path: "/pos-transactions/pos-batches", element: <PosTransBatches /> },
        {
          path: "/pos-transactions/pos-customer",
          element: <PosTransCustomerOrder />,
        },
        // pos Items
        { path: "/pos-items", element: <PosItems /> },
        // pos Customers
        { path: "/pos-customers/customer", element: <PosCustomer /> },
        { path: "/pos-customers/contacts", element: <PosCusContacts /> },
        {
          path: "/pos-customers/delivery-address",
          element: <PosCusDeliveryAddress />,
        },
        {
          path: "/pos-customers/payment-methods",
          element: <PosCusPaymentMethods />,
        },
        {
          path: "/pos-customers/shipping-methods",
          element: <PosCusShippingMethods />,
        },
        { path: "/pos-customers/docs", element: <PosCusDocs /> },
        { path: "/pos-customers/orders", element: <PosCusOrders /> },

        // pos Sales Analysis
        { path: "/sales-analysis", element: <PosSalesAnalysis /> },
        // pos Settings

        // pos Change Password
        { path: "/change-password", element: <PosChangePassword /> },

        // GS Settings
        { path: "/global/settings/default", element: <Default /> },
        { path: "/global/settings/codes", element: <Codes /> },
        { path: "/global/settings/transaction", element: <Transaction /> },
        { path: "/global/settings/currencies", element: <Currencies /> },
        { path: "/global/settings/gl_interface", element: <GL_interface /> },
        { path: "/global/settings/message", element: <GL_Message /> },
        { path: "/global/settings/holiday", element: <GL_Holiday /> },
        { path: "/global/settings/vehicles", element: <GL_Vehicles /> },

        //GS Customer
        { path: "/global/customer", element: <GSCustomer /> },

        //GS Supplier
        { path: "/global/supplier", element: <GSSuppiles /> },

        //GS Item
        { path: "/global/item", element: <GSItem /> },

        //GS list
        { path: "/global/list", element: <GSList /> },
        //GS list
        { path: "/global/utilities", element: <GSUtilities /> },

        { path: "/global/price&discount", element: <GSPriceDiscount /> },

        // GS Price & Discount
        {
          path: "/global/price&discount/standard-selling-prices",
          element: <GS_StandardSellingPrices />,
        },
        {
          path: "/global/price&discount/sandard-bying-prices",
          element: <GS_Standardbuyingprice />,
        },
        {
          path: "/global/price&discount/standard-buying-discounts",
          element: <GS_StandardBuyingDiscounts />,
        },
        {
          path: "/global/price&discount/standard-selling-rate-tables",
          element: <GS_StandardSellingRateTables />,
        },
        {
          path: "/global/price&discount/standard-buying-rate-tables",
          element: <GS_StandardBuyingRateTables />,
        },
        {
          path: "/global/price&discount/special-promo-code-selling-prices",
          element: <GS_SpecialSellingPrices />,
        },
        {
          path: "/global/price&discount/special-promo-code-buying-prices",
          element: <GS_SpecialBuyingPrices />,
        },
        {
          path: "/global/price&discount/contract-selling-prices",
          element: <GS_ContractSellingPrices />,
        },
        {
          path: "/global/price&discount/contract-selling-discounts",
          element: <GS_ContractSellingDiscounts />,
        },
        {
          path: "/global/price&discount/contract-buying-prices",
          element: <GS_ContractBuyingPrices />,
        },
        {
          path: "/global/price&discount/contract-buying-discounts",
          element: <GS_ContractBuyingDiscounts />,
        },
        {
          path: "/global/price&discount/contract-list",
          element: <GS_CustomerList />,
        },
      ],
    },
    {
      element: <BusinessLayout />,
      children: [
        // { path: "/", element: <Home /> },
        { path: "/", element: <POSHome /> },
        { path: "/login", element: <PosLogin /> },
        { path: "/pos-business", element: <BusinessPagecreate /> },
        { path: "/pos-usercreation", element: <UserCreatePage /> },
        { path: "/pos-branch/:businessId", element: <BranchManager /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
