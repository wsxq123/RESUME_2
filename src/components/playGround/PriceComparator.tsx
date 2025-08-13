import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import unitConverter from './helper/unitConverter';

interface ICompareItem {
  label: string;
  unit: number;
  unitType: string;
  price: number;
}

const PriceComparator = () => {
  const [compareList, setCompareList] = useState<ICompareItem[]>([]);

  const [comparedItems, setComparedItems] = useState<ICompareItem[]>([]);

  const handleAddItem = (item: ICompareItem) => {
    if (compareList.some((i) => i.label === item.label)) {
      console.log('Item already exists');
    } else {
      setCompareList([...compareList, item]);
    }
  };

  const handleRemoveItem = (item: ICompareItem) => {
    setCompareList(compareList.filter((i) => i !== item));
  };

  const handleComparePerUnit = () => {
    if (compareList.length > 1) {
      setComparedItems([]);

      //確定所有物品都是同一種類的單位: piece/ (ml, l)/ (g, kg, lb, oz)
      if (
        compareList.every((item) => item.unitType === 'piece') ||
        compareList.every((item) => ['ml', 'l'].includes(item.unitType)) ||
        compareList.every((item) =>
          ['g', 'kg', 'lb', 'oz'].includes(item.unitType)
        )
      ) {
        compareList.map((item) => {
          const newItem: ICompareItem = {
            label: item.label,
            unit: 1,
            //以第一個選項的單位為準
            unitType: compareList[0].unitType,
            price:
              item.unitType === compareList[0].unitType
                ? item.price / item.unit
                : item.price /
                  unitConverter(
                    compareList[0].unitType,
                    item.unit,
                    item.unitType
                  ),
          };
          setComparedItems((prevComparedItems) => [
            ...prevComparedItems,
            newItem,
          ]);
        });
      } else {
        console.log(
          'All items unit type must be piece or (ml / l) or (g / kg / lb / oz)'
        );
      }
    }
  };

  return (
    <Box>
      <Typography variant='h5'>Price Comparator</Typography>
      <Typography mt={2}>Calculated in the unit of the first item</Typography>
      <Box display='flex' gap={2} mt={0.5}>
        <CompareItem handleAddItem={handleAddItem} />
      </Box>
      <Divider component='div' sx={{ my: 2 }} />
      <Box display='flex' flexDirection={'column'} gap={2}>
        {compareList.map((item) => (
          <AddedItem
            key={item.label}
            item={item}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </Box>
      <Box display='flex' justifyContent='center' mt={8} gap={2}>
        <Button variant='contained' onClick={handleComparePerUnit}>
          Compare per Unit
        </Button>
        {/* TODO */}
        {/* <Button variant='contained'>Compare per Price</Button> */}
      </Box>
      <Divider component='div' sx={{ my: 2 }} />
      <Box>
        <CompareTable items={comparedItems} />
      </Box>
    </Box>
  );
};

export default PriceComparator;

const CompareItem = ({
  handleAddItem,
}: {
  handleAddItem: (item: ICompareItem) => void;
}) => {
  const [label, setLabel] = useState('');
  const [unit, setUnit] = useState(0);
  const [unitType, setUnitType] = useState('');
  const [price, setPrice] = useState(0);

  const unitOptions = [
    { value: 'piece', label: 'piece' },
    //容量單位
    { value: 'ml', label: 'ml' },
    { value: 'l', label: 'l' },
    //重量單位
    { value: 'g', label: 'g' },
    { value: 'kg', label: 'kg' },
    { value: 'lb', label: 'lb' },
    { value: 'oz', label: 'oz' },
  ];

  const handleAddBtnClick = () => {
    handleAddItem({
      label: label,
      unit: unit,
      unitType: unitType,
      price: price,
    });

    setLabel('');
    setUnit(0);
    setUnitType('');
    setPrice(0);
  };

  return (
    <Box display='flex' gap={2} width='600px'>
      <TextField
        id='outlined-basic'
        label='label'
        value={label}
        variant='outlined'
        onChange={(e) => setLabel(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='unit'
        type='number'
        value={unit}
        placeholder='Enter unit'
        variant='outlined'
        onFocus={(e) => {
          if (unit === 0) {
            e.target.select();
          }
        }}
        onChange={(e) => setUnit(parseInt(e.target.value))}
      />
      <FormControl sx={{ minWidth: 140 }}>
        <InputLabel id='demo-simple-select-label'>Unit Option</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          defaultValue='piece'
          value={unitType}
          variant='outlined'
          onChange={(event) => setUnitType(event.target.value)}
        >
          {unitOptions.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id='outlined-basic'
        label='price'
        type='number'
        value={price}
        variant='outlined'
        onClick={(e) => {
          (e.target as HTMLInputElement).select();
        }}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <Button onClick={handleAddBtnClick}>Add</Button>
    </Box>
  );
};

const AddedItem = ({
  item,
  handleRemoveItem,
}: {
  item: ICompareItem;
  handleRemoveItem: (item: ICompareItem) => void;
}) => {
  return (
    <Box display='flex' gap={2} width='600px'>
      <TextField
        id='outlined-basic'
        label={item.label}
        variant='standard'
        disabled
      />
      <TextField
        id='outlined-basic'
        label={item.unit}
        variant='standard'
        disabled
      />
      <TextField
        id='outlined-basic'
        label={item.unitType}
        variant='standard'
        disabled
      />
      <TextField
        id='outlined-basic'
        label={item.price.toString()}
        variant='standard'
        disabled
      />
      <Button onClick={() => handleRemoveItem(item)}>Delete</Button>
    </Box>
  );
};

const CompareTable = ({ items }: { items: ICompareItem[] }) => {
  return (
    <TableContainer
      component={Box}
      border={2}
      borderColor='#8b9f8cff'
      bgcolor='#C9E4CA'
    >
      <Table aria-label='compare table'>
        <TableHead sx={{ backgroundColor: '#ade1aeff' }}>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Unit</TableCell>
            <TableCell align='center'>Unit Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {item.label}
              </TableCell>
              <TableCell align='center'>{item.price}</TableCell>
              <TableCell align='center'>{item.unit}</TableCell>
              <TableCell align='center'>{item.unitType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
