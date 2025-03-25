import{jsxs as s,jsx as e}from"react/jsx-runtime";import{useParams as l,Link as a,Outlet as n}from"@tanstack/react-router";import{memo as o}from"react";const c="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.94997%2015.3564C1.9945%2015.4712%202.0613%2015.5767%202.14684%2015.6658L5.89684%2019.4157C6.07263%2019.5927%206.31285%2019.6935%206.56248%2019.6935C6.81211%2019.6935%207.05232%2019.5927%207.22812%2019.4157C7.40508%2019.24%207.50586%2018.9997%207.50586%2018.7501C7.50586%2018.5005%207.40508%2018.2603%207.22812%2018.0845L5.07187%2015.9376H27.6562C28.1742%2015.9376%2028.5937%2015.5181%2028.5937%2015.0001C28.5937%2014.4821%2028.1742%2014.0626%2027.6562%2014.0626H5.07187L7.22812%2011.9158C7.5961%2011.5478%207.5961%2010.9525%207.22812%2010.5845C6.86014%2010.2165%206.26485%2010.2165%205.89687%2010.5845L2.14687%2014.3345C2.06133%2014.4236%201.99453%2014.529%201.95%2014.6439C1.90195%2014.7564%201.87617%2014.8771%201.875%2015.0001C1.87617%2015.1232%201.90195%2015.2439%201.95%2015.3564L1.94997%2015.3564Z'%20fill='%23545F7D'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.04053%2035.1796C6.47961%2032.2202%207.79365%2029.6264%209.97961%2027.4C12.7405%2024.6%2016.0732%2023.2%2019.9796%2023.2C23.886%2023.2%2027.2204%2024.6%2029.9796%2027.4C32.1796%2029.6266%2033.5062%2032.2204%2033.9593%2035.1796M28.1405%2014.0204C28.1405%2016.247%2027.3468%2018.1532%2025.7593%2019.7408C24.1734%2021.3408%2022.253%2022.1408%2020.0001%2022.1408C17.7594%2022.1408%2015.8409%2021.3408%2014.2409%2019.7408C12.6534%2018.1533%2011.8596%2016.247%2011.8596%2014.0204C11.8596%2011.7673%2012.6534%209.84679%2014.2409%208.25959C15.8409%206.67367%2017.7596%205.87991%2020.0001%205.87991C22.2532%205.87991%2024.1737%206.67367%2025.7593%208.25959C27.3468%209.84711%2028.1405%2011.7674%2028.1405%2014.0204Z'%20stroke='%23213F7D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",m="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.98572%201.28751C7.85197%201.29314%207.73572%201.38126%207.69447%201.50876L6.18759%206.17996L1.28071%206.16996C1.14196%206.16996%201.01821%206.25934%200.975716%206.39121C0.932591%206.52371%200.980091%206.66809%201.09259%206.74996L5.06891%209.62676L3.54203%2014.293C3.49891%2014.4249%203.54578%2014.5699%203.65828%2014.6511C3.77016%2014.733%203.92265%2014.733%204.03454%2014.6511L7.9995%2011.758L11.9657%2014.6511C12.0776%2014.733%2012.2301%2014.733%2012.342%2014.6511C12.4545%2014.5699%2012.5014%2014.4249%2012.4582%2014.293L10.9314%209.62676L14.9077%206.74996C15.0202%206.66809%2015.0677%206.52371%2015.0246%206.39121C14.9814%206.25933%2014.8583%206.16996%2014.7196%206.17059L9.81269%206.18059L8.30393%201.50939V1.50876C8.25956%201.37188%208.12957%201.28188%207.98581%201.28751L7.98572%201.28751Z'%20fill='%23E9B200'/%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M7.98439%200.959992C7.85189%200.966867%207.73688%201.05437%207.69563%201.18062L6.08939%205.99998H0.945073V6.0006C0.806948%206.0006%200.684449%206.08935%200.641953%206.2206C0.598828%206.35185%200.645078%206.49561%200.755703%206.5781L4.93442%209.63379L3.32818%2014.6213V14.6207C3.28506%2014.7532%203.33256%2014.8976%203.44506%2014.9788C3.55756%2015.0607%203.70943%2015.0601%203.82131%2014.9782L8.00003%2011.9225L12.1788%2014.9782C12.2906%2015.0601%2012.4425%2015.0607%2012.555%2014.9788C12.6675%2014.8976%2012.715%2014.7532%2012.6719%2014.6207L11.0656%209.63316L15.2444%206.57748V6.5781C15.355%206.49561%2015.4012%206.35185%2015.3581%206.2206C15.3156%206.08935%2015.1931%206.0006%2015.055%206.0006H9.91068L8.30444%201.18124V1.18062C8.26006%201.04374%208.1288%200.953112%207.98444%200.959992H7.98439ZM8.00001%202.29374L9.37564%206.41998V6.4206C9.41814%206.55185%209.54127%206.64122%209.68001%206.6406H14.0738L10.4987%209.255V9.25563C10.3875%209.33688%2010.3406%209.48062%2010.3831%209.61251L11.7587%2013.8807L8.1893%2011.2712H8.18867C8.07617%2011.1887%207.92368%2011.1887%207.81117%2011.2712L4.24173%2013.8807L5.61736%209.61251H5.61673C5.65923%209.48063%205.61236%209.33687%205.50111%209.25563L1.92607%206.64123H6.31983V6.6406C6.45858%206.64123%206.5817%206.55185%206.6242%206.4206L7.99983%202.29436L8.00001%202.29374Z'%20fill='%23E9B200'/%3e%3c/svg%3e",C=o(({children:i})=>{const{userId:r}=l({from:"/customers/users/$userId"});return s("div",{className:"userDetailsLayoutContainer",children:[s("div",{className:"userDetailsLayoutHeader",children:[s(a,{to:"/customers/users",className:"backButton",children:[e("img",{src:c,alt:"back icon"}),e("p",{className:"backButtonText",children:"Back to Users"})]}),s("div",{className:"headerContainer",children:[e("h1",{className:"headerTitle",children:"User Details"}),s("div",{className:"actionButtonsContainer",children:[e("button",{className:"blacklistUserButton",children:"Blacklist User"}),e("button",{className:"activateUserButton",children:"Activate User"})]})]})]}),s("div",{className:"userDetailsLayoutContent",children:[s("div",{className:"userDetailsBasicInfoHeaderContainer",children:[s("div",{className:"basicInfoCardContainer",children:[s("div",{className:"profileDataContainer",children:[e("div",{className:"profileImageContainer",children:e("img",{src:d,alt:"user icon"})}),s("div",{className:"profileData",children:[e("p",{className:"profileDataTitle",children:"Grace Effiom"}),e("p",{className:"profileDataValue",children:"LSQFf587g90"})]})]}),e("div",{className:"profileRatingContainer",children:s("div",{children:[e("p",{className:"profileRatingHeader",children:"User’s Tier"}),e("div",{className:"profileRatingValue",children:Array.from({length:3}).map((h,t)=>e("img",{src:t<=1?m:u,alt:""}))})]})}),e("div",{className:"LoanDetailsContainer",children:s("div",{children:[e("p",{className:"loanAmount",children:"₦200,000.00"}),e("p",{className:"loanRecipentAccount",children:"9912345678/Providus Bank"})]})})]}),s("div",{className:"profileNavContainer",children:[e(a,{to:"/customers/users/$userId/details",params:{userId:r??""},className:"profileNavItem",children:"General Details"}),e(a,{to:"/customers/users/$userId/documents",params:{userId:r??""},className:"profileNavItem",children:"Documents"}),e(a,{to:"/customers/users/$userId/bank-details",params:{userId:r??""},className:"profileNavItem",children:"Bank Details"}),e(a,{to:"/customers/users/$userId/loans",params:{userId:r??""},className:"profileNavItem",children:"Loans"}),e(a,{to:"/customers/users/$userId/savings",params:{userId:r??""},className:"profileNavItem",children:"Savings"}),e(a,{to:"/customers/users/$userId/app-and-system",params:{userId:r??""},className:"profileNavItem",children:"App and System"})]})]}),e("div",{className:"userDetailsBasicInfoContentContainer",children:i})]})]})}),g=function(){return e(C,{children:e(n,{})})};export{g as component};
