import { Box, Divider, Stack, Tab } from '@mui/material';
import { useState } from 'react';
import DataList from '@components/demos/backend/DataList';
import { getAllUser, getUserByEmail, UserType } from '@src/firebase/dbUserCRUD';
import { getAllProducts, ProductType } from '@src/firebase/dbProductsCRUD';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { getAllOrder, OrderType } from '@src/firebase/dbOrderCRUD';
import UserPanel from './UserPanel';
import ProductsPanel from './ProductsPanel';
import OrderPanel from './OrderPanel';

const Backend = () => {
  const [switcher, setSwitcher] = useState('0');

  const [email, setEmail] = useState('');
  const [userDataList, setUserDataList] = useState<UserType[]>();
  const [productDataList, setProductDataList] = useState<ProductType[]>();
  const [orderDataList, setOrderDataList] = useState<OrderType[]>();

  const handleswitcher = (_event: React.SyntheticEvent, newValue: string) => {
    setSwitcher(newValue);
  };

  function handleSearchAllUserBtn() {
    const item = getAllUser();
    item
      .then((data) => setUserDataList(data))
      .catch((error) => console.log('error:' + error));
  }

  function handleSearchUserByEmail(email: string) {
    const item = getUserByEmail(email);
    item
      .then((data) => {
        setUserDataList(data);
        setEmail('');
      })
      .catch((error) => console.log('error:' + error));
  }

  function handleSearchAllProductsBtn() {
    const item = getAllProducts();
    item
      .then((data) => setProductDataList(data))
      .catch((error) => console.log('error:' + error));

    console.log('Products');
    console.log(item);
  }

  function handleSearchAllOrderBtn() {
    const item = getAllOrder();
    item
      .then((data) => setOrderDataList(data))
      .catch((error) => console.log('error:' + error));

    console.log('Order');
    console.log(item);
  }

  return (
    <Stack spacing={8} width='80%' m='70px 0px'>
      <TabContext value={switcher}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleswitcher}
            aria-label='lab API tabs example'
            centered={true}
          >
            <Tab label='Users' value='0' />
            <Tab label='Products' value='1' />
            <Tab label='Order' value='2' />
          </TabList>
        </Box>
        <TabPanel value='0'>
          <UserPanel
            email={email}
            setEmail={setEmail}
            handleSearchAllUserBtn={handleSearchAllUserBtn}
            handleSearchUserByEmail={handleSearchUserByEmail}
          />
        </TabPanel>
        <TabPanel value='1'>
          <ProductsPanel
            handleSearchAllProductsBtn={handleSearchAllProductsBtn}
          />
        </TabPanel>
        <TabPanel value='2'>
          <OrderPanel handleSearchAllOrderBtn={handleSearchAllOrderBtn} />
        </TabPanel>
      </TabContext>

      <Divider />
      <Box>
        {switcher === '0' && (
          <DataList userDataList={userDataList} switcher={switcher} />
        )}

        {switcher === '1' && (
          <DataList productDataList={productDataList} switcher={switcher} />
        )}

        {switcher === '2' && (
          <DataList orderDataList={orderDataList} switcher={switcher} />
        )}
      </Box>
    </Stack>
  );
};

export default Backend;
